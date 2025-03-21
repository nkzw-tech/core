import { expect, test } from 'vitest';
import maxBy from '../maxBy.ts';

test('maxBy', () => {
  expect(maxBy([1, 2, 3], (x) => x)).toEqual(3);
  expect(maxBy([1, 2, 3], (x) => -x)).toEqual(1);
  expect(maxBy([], (x) => x)).toEqual(undefined);

  expect(maxBy(['a', 'ab', 'abc'], (x) => x.length)).toEqual('abc');
});

test('maxBy returns the first by insertion order', () => {
  const objectA = { value: 4 };
  const objectB = { value: 2 };
  const objectC = { value: 3 };
  const objectD = { value: 4 };

  expect(maxBy([objectA, objectB, objectC, objectD], (x) => x.value)).toBe(
    objectA,
  );
});
