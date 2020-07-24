import { AnimalColor, AnimalEffectType } from '../logic-types';
import { crown, blade, tree, sun } from './logic-symbols';

export const acRed: AnimalColor = {
  id: 'animal-color-red',
  display: 'Red',
  effect_type: AnimalEffectType.NOTHING,
  effect_display: 'Nothing changes',
};

export const acBlue: AnimalColor = {
  id: 'animal-color-blue',
  display: 'Blue',
  effect_type: AnimalEffectType.NOTHING,
  effect_display: 'Nothing changes',
};

export const acYellow: AnimalColor = {
  id: 'animal-color-yellow',
  display: 'Yellow',
  effect_type: AnimalEffectType.NOTHING,
  effect_display: 'Nothing changes',
};

export const acGreen: AnimalColor = {
  id: 'animal-color-green',
  display: 'Green',
  effect_type: AnimalEffectType.REVERSE_ORDER,
  effect_display: 'Reverse order',
};

export const acPurple: AnimalColor = {
  id: 'animal-color-purple',
  display: 'Purple',
  effect_type: AnimalEffectType.REVERSE_ORDER,
  effect_display: 'Reverse order',
};

export const acOrange: AnimalColor = {
  id: 'animal-color-orange',
  display: 'Orange',
  effect_type: AnimalEffectType.REVERSE_ORDER,
  effect_display: 'Reverse order',
};

export const acBlack: AnimalColor = {
  id: 'animal-color-black',
  display: 'Black',
  effect_type: AnimalEffectType.SWAP,
  effect_display: 'Blade and Tree swap numbers',
  symbol_1_id: blade.id,
  symbol_2_id: tree.id,
};

export const acWhite: AnimalColor = {
  id: 'animal-color-white',
  display: 'White',
  effect_type: AnimalEffectType.SWAP,
  effect_display: 'Crown and Sun swap numbers',
  symbol_1_id: crown.id,
  symbol_2_id: sun.id,
};

export const acGray: AnimalColor = {
  id: 'animal-color-gray',
  display: 'Gray',
  effect_type: AnimalEffectType.SWAP,
  effect_display: 'Blade and Sun swap numbers',
  symbol_1_id: blade.id,
  symbol_2_id: sun.id,
};

export const acPink: AnimalColor = {
  id: 'animal-color-ping',
  display: 'Pink',
  effect_type: AnimalEffectType.SWAP,
  effect_display: 'Crown and Tree swap numbers',
  symbol_1_id: crown.id,
  symbol_2_id: tree.id,
};

export const animalColors: AnimalColor[] = [
  acRed,
  acBlue,
  acYellow,
  acGreen,
  acPurple,
  acOrange,
  acBlack,
  acWhite,
  acGray,
  acPink,
];
