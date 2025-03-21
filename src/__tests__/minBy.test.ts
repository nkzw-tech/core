import { expect, test } from 'vitest';
import minBy from '../minBy.ts';

test('minBy', () => {
  expect(minBy([1, 2, 3], (x) => x)).toEqual(1);
  expect(minBy([1, 2, 3], (x) => -x)).toEqual(3);
  expect(minBy([], (x) => x)).toEqual(undefined);

  expect(minBy(['a', 'ab', 'abc'], (x) => x.length)).toEqual('a');
});

test('minBy returns the first by insertion order', () => {
  const objectA = { value: 1 };
  const objectB = { value: 2 };
  const objectC = { value: 3 };
  const objectD = { value: 1 };

  expect(minBy([objectA, objectB, objectC, objectD], (x) => x.value)).toBe(
    objectA,
  );
});

test('minBy works with iterators', () => {
  expect(
    minBy(
      (function* () {
        yield 1;
        yield 2;
        yield 3;
      })(),
      (x) => x,
    ),
  ).toEqual(1);

  expect(
    minBy(
      new Map([
        [1, 2],
        [2, 3],
        [3, 1],
      ]).values(),
      (x) => x,
    ),
  ).toEqual(1);

  expect(minBy(new Set([1, 2, 3]), (x) => x)).toEqual(1);
});
