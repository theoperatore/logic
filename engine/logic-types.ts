/**
 * The only real unchanging element in this logical puzzle.
 * There should be 4 to start; Blade, Crown, Sun, Tree
 */
export type LogicSymbol = {
  id: string;
  display: string;
  value: number;
};

export enum AnimalEffectType {
  NOTHING = 'NOTHING',
  REVERSE_ORDER = 'REVERSE_ORDER',
  SWAP = 'VALUE_SWAP',
}

export type AnimalColorSwap2 = {
  id: string;
  display: string;
  effect_display: string;
  effect_type: AnimalEffectType.SWAP;
  symbol_1_id: string;
  symbol_2_id: string;
};

export type AnimalColorBasic = {
  id: string;
  display: string;
  effect_display: string;
  effect_type: AnimalEffectType;
};

/**
 * Use this discriminated union on effect_type: Animal_effect_type.
 */
export type AnimalColor = AnimalColorBasic | AnimalColorSwap2;

export type Animal = {
  id: string;
  display: string;
  /**
   * an array of ids that map to the LogicSymbol it affects.
   */
  affects_symbol_ids: string[];
  has_feet?: boolean;
};

export enum BannerColorEffectType {
  ADD = 'ADD',
  SUB = 'SUB',
  DIV = 'DIV',
  OR = 'OR',
  EVEN = 'EVEN',
  ODD = 'ODD',
}

export type BannerColorBasic = {
  id: string;
  effect_type: BannerColorEffectType;
  effect_display: string;
  display: string;
  value: number;
};

export type BannerColorOddEven = {
  id: string;
  effect_type: BannerColorEffectType.ODD | BannerColorEffectType.EVEN;
  effect_display: string;
  display: string;
  ops: { type: BannerColorEffectType; value: number }[];
};

export type BannerColorCompound = {
  id: string;
  effect_type: BannerColorEffectType.OR;
  effect_display: string;
  display: string;
  ops: [BannerColorOddEven, BannerColorOddEven];
};

/**
 * Main banner color entry point
 */
export type BannerColor = BannerColorBasic | BannerColorOddEven | BannerColorCompound;

/**
 * Don't think this is a real type, but need something to remember
 * to encode something like, if 0 / 2 => 5.
 */
export type BannerSpecialEffect = string;

export type OrnamentColorConditionType =
  | 'EITHER_COLOR' // an aspect about either of the colors
  | 'BANNER_COLOR' // aspect about banner color
  | 'ANIMAL_COLOR'; // an aspect about the animal

export type OrnamentAnimalConditionType =
  // not sure how to do this one generically...
  'ANIMAL'; // an aspect about the animal

export type OrnamentConditionType = OrnamentColorConditionType | OrnamentAnimalConditionType;

export enum OrnamentType {
  TEXT = 'TEXT',
  VALUE = 'VALUE',
}

export type OrnamentText = {
  id: string;
  type: OrnamentType.TEXT;
  display: string;
  text: string;
};

export type OrnamentColorOddOp = {
  type: 'ANY_ODD';
  value: number;
};

export type OrnamentColorChangeOp = {
  type: 'CHANAGE';
  symbol_id: string;
  value: number;
};

export type OrnamentColorOp = OrnamentColorOddOp | OrnamentColorChangeOp;

export type OrnamentValueColor = {
  id: string;
  type: OrnamentType.VALUE;
  display: string;
  text: string;
  condition: OrnamentColorConditionType;
  color_ids: string[];
  op: OrnamentColorOp;
};

export type OrnamentValueAnimal = {
  id: string;
  type: OrnamentType.VALUE;
  display: string;
  text: string;
  condition: OrnamentAnimalConditionType;
  animal_condition: 'HAS_FEET';
  symbol_id: string;
  value: number;
};

export type OrnamentValue = OrnamentValueColor | OrnamentValueAnimal;

export type Ornament = OrnamentText | OrnamentValue;
