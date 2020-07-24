import { BannerColor, BannerColorEffectType } from '../logic-types';

export const bannerRed: BannerColor = {
  id: 'banner-color-red',
  display: 'Red',
  effect_display: 'Add 1',
  effect_type: BannerColorEffectType.ADD,
  value: 1,
};

export const bannerBlue: BannerColor = {
  id: 'banner-color-blue',
  display: 'Blue',
  effect_display: 'Add 2',
  effect_type: BannerColorEffectType.ADD,
  value: 2,
};

export const bannerYellow: BannerColor = {
  id: 'banner-color-yellow',
  display: 'Yellow',
  effect_display: 'Add 3',
  effect_type: BannerColorEffectType.ADD,
  value: 3,
};

export const bannerGreen: BannerColor = {
  id: 'banner-color-green',
  display: 'Green',
  effect_display: 'Subtract 1',
  effect_type: BannerColorEffectType.SUB,
  value: 1,
};

export const bannerPurple: BannerColor = {
  id: 'banner-color-purple',
  display: 'Purple',
  effect_display: 'Subtract 2',
  effect_type: BannerColorEffectType.SUB,
  value: 2,
};

export const bannerOrange: BannerColor = {
  id: 'banner-color-orange',
  display: 'Orange',
  effect_display: 'Subtract 3',
  effect_type: BannerColorEffectType.SUB,
  value: 3,
};

export const bannerBlack: BannerColor = {
  id: 'banner-color-black',
  display: 'Black',
  effect_display: 'If even, divide by 2',
  effect_type: BannerColorEffectType.EVEN,
  ops: [{ type: BannerColorEffectType.DIV, value: 2 }],
};

export const bannerWhite: BannerColor = {
  id: 'banner-color-white',
  display: 'White',
  effect_display: 'If odd, subtract by 1',
  effect_type: BannerColorEffectType.ODD,
  ops: [{ type: BannerColorEffectType.SUB, value: 1 }],
};

export const bannerGray: BannerColor = {
  id: 'banner-color-gray',
  display: 'Gray',
  effect_display: 'If odd, subtract 1 then divide by 2; if even, divide by 2',
  effect_type: BannerColorEffectType.OR,
  ops: [
    {
      id: 'gray-odd',
      display: 'gray-odd',
      effect_display: 'gray-odd',
      effect_type: BannerColorEffectType.ODD,
      ops: [
        { type: BannerColorEffectType.SUB, value: 1 },
        { type: BannerColorEffectType.DIV, value: 2 },
      ],
    },
    {
      id: 'gray-even',
      display: 'gray-even',
      effect_display: 'gray-even',
      effect_type: BannerColorEffectType.EVEN,
      ops: [{ type: BannerColorEffectType.DIV, value: 2 }],
    },
  ],
};

export const bannerPink: BannerColor = {
  id: 'banner-color-pink',
  display: 'Pink',
  effect_display: 'Add 5',
  effect_type: BannerColorEffectType.ADD,
  value: 5,
};

export const banners: BannerColor[] = [
  bannerRed,
  bannerBlue,
  bannerYellow,
  bannerGreen,
  bannerPurple,
  bannerOrange,
  bannerBlack,
  bannerWhite,
  bannerGray,
  bannerPink,
];
