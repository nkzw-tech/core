import { expect, test } from 'vitest';
import getFirst from '../getFirst.ts';

test('getFirst', () => {
  expect(getFirst(new Set(['2', '3']))).toEqual('2');

  expect(getFirst(new Set())).toEqual(null);
});
