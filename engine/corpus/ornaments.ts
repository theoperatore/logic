import { Ornament, OrnamentType } from '../logic-types';
import { acBlack, acOrange, acGreen, acPurple } from './animal-clolors';
import { bannerBlack, bannerRed, bannerBlue, bannerYellow } from './banner-color';
import { tree, blade, crown } from './logic-symbols';

export const spade: Ornament = {
  id: 'ornament-spade',
  display: 'Spade',
  type: OrnamentType.VALUE,
  text: 'If either color is Black, change any odd number to 1',
  condition: 'EITHER_COLOR',
  op: {
    type: 'ANY_ODD',
    value: 1,
  },
  color_ids: [acBlack.id, bannerBlack.id],
};

export const club: Ornament = {
  id: 'ornament-club',
  display: 'Club',
  type: OrnamentType.VALUE,
  text: 'If Animal has feet, then change Tree to 5',
  condition: 'ANIMAL',
  animal_condition: 'HAS_FEET',
  symbol_id: tree.id,
  value: 5,
};

export const heart: Ornament = {
  id: 'ornament-heart',
  display: 'Heart',
  type: OrnamentType.VALUE,
  text: 'If Banner Color is Red, Blue, or Yellow, then change Blade to 0',
  condition: 'BANNER_COLOR',
  color_ids: [bannerRed.id, bannerBlue.id, bannerYellow.id],
  op: {
    type: 'CHANAGE',
    symbol_id: blade.id,
    value: 0,
  },
};

export const diamond: Ornament = {
  id: 'ornament-diamond',
  display: 'Diamond',
  type: OrnamentType.VALUE,
  text: 'If Animal Color is Orange, Green, or Purple, then change Crown to 7',
  condition: 'ANIMAL_COLOR',
  color_ids: [acOrange.id, acGreen.id, acPurple.id],
  op: {
    type: 'CHANAGE',
    symbol_id: crown.id,
    value: 7,
  },
};

export const skull: Ornament = {
  id: 'ornament-skull',
  display: 'Skull',
  type: OrnamentType.TEXT,
  text:
    'Use the starting numbers and ignore all other rules. The answer will be incorrect unless the party is laughing maniacally when hitting the button',
};

export const cup: Ornament = {
  id: 'ornament-cup',
  display: 'Cup',
  type: OrnamentType.TEXT,
  text: 'The answer will be incorrect unless the last word said by a party member is "Cheers!"',
};

export const moon: Ornament = {
  id: 'ornament-moon',
  display: 'Moon',
  type: OrnamentType.TEXT,
  text: 'The answer will be incorrect unless the party is howling like wolves when hitting the button',
};

export const key: Ornament = {
  id: 'ornament-key',
  display: 'Key',
  type: OrnamentType.TEXT,
  text: 'The answer will be incorrect unless the banner is lit on fire when hitting the button',
};

export const ornaments = [spade, club, heart, diamond, skull, cup, moon, key];
