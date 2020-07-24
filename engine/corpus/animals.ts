import { Animal } from '../logic-types';
import { tree, sun, crown, blade } from './logic-symbols';

export const bear: Animal = {
  id: 'animal-bear',
  display: 'Bear',
  affects_symbol_ids: [],
  has_feet: true,
};

export const eagle: Animal = {
  id: 'animal-eagle',
  display: 'Eagle',
  affects_symbol_ids: [tree.id],
  has_feet: true,
};

export const lion: Animal = {
  id: 'animal-lion',
  display: 'Lion',
  affects_symbol_ids: [sun.id],
  has_feet: true,
};

export const fish: Animal = {
  id: 'animal-fish',
  display: 'Fish',
  affects_symbol_ids: [sun.id, tree.id],
};

export const elephant: Animal = {
  id: 'animal-elephant',
  display: 'Elephant',
  affects_symbol_ids: [crown.id],
  has_feet: true,
};

export const snake: Animal = {
  id: 'animal-snake',
  display: 'Snake',
  affects_symbol_ids: [crown.id, tree.id],
};

export const monkey: Animal = {
  id: 'animal-monkey',
  display: 'Monkey',
  affects_symbol_ids: [crown.id, sun.id],
  has_feet: true,
};

export const turtle: Animal = {
  id: 'animal-turtle',
  display: 'Turtle',
  affects_symbol_ids: [crown.id, sun.id, tree.id],
  has_feet: true,
};

export const moose: Animal = {
  id: 'animal-moose',
  display: 'Moose',
  affects_symbol_ids: [blade.id],
  has_feet: true,
};

export const frog: Animal = {
  id: 'animal-frog',
  display: 'Frog',
  affects_symbol_ids: [blade.id, tree.id],
  has_feet: true,
};

export const wolf: Animal = {
  id: 'animal-wolf',
  display: 'Wolf',
  affects_symbol_ids: [blade.id, sun.id],
  has_feet: true,
};

export const chicken: Animal = {
  id: 'animal-chicken',
  display: 'Chicken',
  affects_symbol_ids: [blade.id, sun.id, tree.id],
  has_feet: true,
};

export const rat: Animal = {
  id: 'animal-rat',
  display: 'Rat',
  affects_symbol_ids: [blade.id, crown.id],
  has_feet: true,
};

export const horse: Animal = {
  id: 'animal-horse',
  display: 'Horse',
  affects_symbol_ids: [blade.id, crown.id, tree.id],
  has_feet: true,
};

export const pig: Animal = {
  id: 'animal-pig',
  display: 'Pig',
  affects_symbol_ids: [blade.id, crown.id, sun.id],
  has_feet: true,
};

export const dragon: Animal = {
  id: 'animal-dragon',
  display: 'Dragon',
  affects_symbol_ids: [blade.id, crown.id, sun.id, tree.id],
  has_feet: true,
};

export const animals: Animal[] = [
  bear,
  eagle,
  lion,
  fish,
  elephant,
  snake,
  monkey,
  turtle,
  moose,
  frog,
  wolf,
  chicken,
  rat,
  horse,
  pig,
  dragon,
];
