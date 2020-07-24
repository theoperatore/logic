import { LogicSymbol } from '../logic-types';

export const blade: LogicSymbol = {
  id: 'logic-symbol-blade',
  display: 'Blade',
  value: -1, // gets populated at runtime.
};

export const tree: LogicSymbol = {
  id: 'logic-symbol-tree',
  display: 'Tree',
  value: -1,
};

export const crown: LogicSymbol = {
  id: 'logic-symbol-crown',
  display: 'Crown',
  value: -1,
};

export const sun: LogicSymbol = {
  id: 'logic-symbol-sun',
  display: 'Sun',
  value: -1,
};

export const logicSymbols: LogicSymbol[] = [blade, crown, sun, tree];
