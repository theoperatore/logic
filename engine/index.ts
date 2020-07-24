import {
  Animal,
  AnimalColor,
  BannerColor,
  Ornament,
  AnimalEffectType,
  AnimalColorSwap2,
  LogicSymbol,
  BannerColorBasic,
  BannerColorOddEven,
  BannerColorEffectType,
  BannerColorCompound,
  AnimalColorBasic,
  OrnamentType,
  OrnamentColorChangeOp,
} from './logic-types';
import { logicSymbols } from './corpus/logic-symbols';

type SymbolNumbers = [number, number, number, number];

export type Inputs = {
  symbolNumbers: SymbolNumbers;
  animal: Animal;
  animalColor: AnimalColor;
  bannerColor: BannerColor;
  ornament: Ornament;

  debug?: {
    shouldLog: boolean;
  };
};

let shouldLog = false;
function log(...args: any[]) {
  if (shouldLog) {
    console.log(...args);
  }
}

export function solve(inputs: Inputs): number[] {
  const { symbolNumbers, animal, animalColor, bannerColor, ornament, debug = { shouldLog: false } } = inputs;

  // enable logging?
  shouldLog = debug.shouldLog;

  // step 0. convert numbers into structs
  const symbols: LogicSymbol[] = symbolNumbers.map((value, idx) => ({
    ...logicSymbols[idx],
    value,
  }));

  // step 1. apply animal color
  let answer = applyAnimalColor(symbols, animalColor);

  // step 2. deterine which inputs will be affected by the banner color via the animal
  const bannerColorIds = determineSymbolsAffectedByAnimal(answer, animal);

  // step 3. apply banner color to inputs derrived from step 2
  answer = applyBannerColor(answer, bannerColor, bannerColorIds);

  // step 4. apply ornament
  answer = applyOrnament(answer, ornament, animal, animalColor, bannerColor);

  // step 5. return;
  return answer.map(ls => ls.value);
}

function applyAnimalColor(symbols: LogicSymbol[], ac: AnimalColor): LogicSymbol[] {
  switch (ac.effect_type) {
    case AnimalEffectType.REVERSE_ORDER:
      return [symbols[3], symbols[2], symbols[1], symbols[0]];
    case AnimalEffectType.SWAP: {
      const color = ac as AnimalColorSwap2;
      const idx1 = symbols.findIndex(s => s.id === color.symbol_1_id);
      const idx2 = symbols.findIndex(s => s.id === color.symbol_2_id);
      if (idx1 === -1 || idx2 === -1) throw new Error('Invalid swap identifiers');
      const s1 = symbols[idx1].value;
      const s2 = symbols[idx2].value;
      return symbols.map((s, idx) => ({
        ...s,
        value: idx === idx1 ? s2 : idx === idx2 ? s1 : s.value,
      }));
    }
    case AnimalEffectType.NOTHING:
    default:
      return symbols;
  }
}

function determineSymbolsAffectedByAnimal(symbols: LogicSymbol[], animal: Animal): string[] {
  const ids = symbols.filter(sym => animal.affects_symbol_ids.includes(sym.id)).map(a => a.id);
  return ids;
}

function applyBannerOp(symbol: LogicSymbol, op: { type: BannerColorEffectType; value: number }): LogicSymbol {
  switch (op.type) {
    case 'ADD':
      return {
        ...symbol,
        value: symbol.value + op.value,
      };
    case 'DIV': {
      const val = symbol.value / op.value;
      return {
        ...symbol,
        value: symbol.value === 0 && op.value === 2 ? 5 : val,
      };
    }
    case 'SUB': {
      return {
        ...symbol,
        value: symbol.value - op.value,
      };
    }
    default:
      return { ...symbol };
  }
}

function applyBannerEvenOdd(symbol: LogicSymbol, color: BannerColorOddEven) {
  switch (color.effect_type) {
    case 'EVEN': {
      const isEven = symbol.value % 2 === 0;
      return isEven ? color.ops.reduce((s, next) => applyBannerOp(s, next), symbol) : { ...symbol };
    }
    case 'ODD': {
      const isOdd = symbol.value % 2 !== 0;
      return isOdd ? color.ops.reduce((s, next) => applyBannerOp(s, next), symbol) : { ...symbol };
    }
    default:
      return { ...symbol };
  }
}

function applyBannerColor(symbols: LogicSymbol[], bannerColor: BannerColor, ids: string[]): LogicSymbol[] {
  return symbols.map(sym => {
    if (!ids.includes(sym.id)) return sym;

    switch (bannerColor.effect_type) {
      case 'ADD':
      case 'DIV':
      case 'SUB':
        return applyBannerOp(sym, { type: bannerColor.effect_type, value: bannerColor.value });
      case 'EVEN': {
        const isEven = sym.value % 2 === 0;
        const color = bannerColor as BannerColorOddEven;
        return isEven ? color.ops.reduce((s, next) => applyBannerOp(s, next), sym) : { ...sym };
      }
      case 'ODD': {
        const isOdd = sym.value % 2 !== 0;
        const color = bannerColor as BannerColorOddEven;
        return isOdd ? color.ops.reduce((s, next) => applyBannerOp(s, next), sym) : { ...sym };
      }
      case 'OR': {
        const compound = bannerColor as BannerColorCompound;
        return compound.ops
          .filter(op => {
            switch (op.effect_type) {
              case 'EVEN':
                return true;
              case 'ODD':
                return true;
              default:
                return false;
            }
          })
          .reduce((s, op) => applyBannerEvenOdd(s, op), sym);
      }
      default:
        return { ...sym };
    }
  });
}

function applyOrnament(
  symbols: LogicSymbol[],
  ornament: Ornament,
  animal: Animal,
  animalColor: AnimalColor,
  bannerColor: BannerColor,
): LogicSymbol[] {
  if (ornament.type === OrnamentType.TEXT) return symbols;

  switch (ornament.condition) {
    case 'EITHER_COLOR': {
      const hasAc = ornament.color_ids.includes(animalColor.id);
      const hasBc = ornament.color_ids.includes(bannerColor.id);
      if (hasAc || hasBc) {
        switch (ornament.op.type) {
          case 'ANY_ODD':
            return symbols.map(sym => ({
              ...sym,
              value: sym.value % 2 !== 0 ? ornament.op.value : sym.value,
            }));
          case 'CHANAGE':
            return symbols.map(sym => ({
              ...sym,
              value: sym.id === (ornament.op as OrnamentColorChangeOp).symbol_id ? ornament.op.value : sym.value,
            }));
          default:
            const _x = (ornament.op as any).type as unknown;
            throw new Error(`Unknown ornament value op: ${_x}`);
        }
      }

      return symbols;
    }
    // getting lazy, just copy/paste the logic
    case 'BANNER_COLOR': {
      const hasBc = ornament.color_ids.includes(bannerColor.id);
      if (hasBc) {
        switch (ornament.op.type) {
          case 'ANY_ODD':
            return symbols.map(sym => ({
              ...sym,
              value: sym.value % 2 !== 0 ? ornament.op.value : sym.value,
            }));
          case 'CHANAGE':
            return symbols.map(sym => ({
              ...sym,
              value: sym.id === (ornament.op as OrnamentColorChangeOp).symbol_id ? ornament.op.value : sym.value,
            }));
          default:
            const _x = (ornament.op as any).type as unknown;
            throw new Error(`Unknown ornament value op: ${_x}`);
        }
      }

      return symbols;
    }
    // getting lazy, just copy/paste the logic
    case 'ANIMAL_COLOR': {
      const hasAc = ornament.color_ids.includes(animalColor.id);
      if (hasAc) {
        switch (ornament.op.type) {
          case 'ANY_ODD':
            return symbols.map(sym => ({
              ...sym,
              value: sym.value % 2 !== 0 ? ornament.op.value : sym.value,
            }));
          case 'CHANAGE':
            return symbols.map(sym => ({
              ...sym,
              value: sym.id === (ornament.op as OrnamentColorChangeOp).symbol_id ? ornament.op.value : sym.value,
            }));
          default:
            const _x = (ornament.op as any).type as unknown;
            throw new Error(`Unknown ornament value op: ${_x}`);
        }
      }

      return symbols;
    }
    case 'ANIMAL': {
      switch (ornament.animal_condition) {
        case 'HAS_FEET': {
          if (!animal.has_feet) return symbols;
          return symbols.map(sym => ({
            ...sym,
            value: sym.id === ornament.symbol_id ? ornament.value : sym.value,
          }));
        }
      }
    }
  }
}
