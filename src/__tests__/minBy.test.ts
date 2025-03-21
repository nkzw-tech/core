import { expect, test } from 'vitest';
import minBy from '../minBy.ts';

test('minBy', () => {
  expect(minBy([1, 2, 3], (x) => x)).toEqual(1);
  expect(minBy([1, 2, 3], (x) => -x)).toEqual(3);
  expect(minBy([], (x) => x)).toEqual(undefined);

  expect(minBy(['a', 'ab', 'abc'], (x) => x.length)).toEqual('a');
});
