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

test('maxBy works with iterators', () => {
  expect(
    maxBy(
      (function* () {
        yield 1;
        yield 2;
        yield 3;
      })(),
      (x) => x,
    ),
  ).toEqual(3);

  expect(
    maxBy(
      new Map([
        [1, 2],
        [2, 3],
        [3, 1],
      ]).values(),
      (x) => x,
    ),
  ).toEqual(3);

  expect(maxBy(new Set([1, 2, 3]), (x) => x)).toEqual(3);
});
