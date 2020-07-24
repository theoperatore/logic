import { monkey } from './corpus/animals';
import { acWhite } from './corpus/animal-clolors';
import { bannerRed } from './corpus/banner-color';
import { club } from './corpus/ornaments';
import { solve, Inputs } from '.';

test('it solves a sample equation', () => {
  const inputs: Inputs = {
    // order will be [blade, crown, sun, tree]
    symbolNumbers: [8, 3, 2, 8],
    animal: monkey,
    animalColor: acWhite,
    bannerColor: bannerRed,
    ornament: club,
    debug: {
      shouldLog: true,
    },
  };

  const expected = [8, 3, 4, 5];

  expect(solve(inputs)).toStrictEqual(expected);
});
