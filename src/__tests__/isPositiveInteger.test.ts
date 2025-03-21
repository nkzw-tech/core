import { expect, test } from 'vitest';
import isPositiveInteger from '../isPositiveInteger.ts';

test('isPositiveInteger', () => {
  expect(isPositiveInteger(1)).toBe(true);
  expect(isPositiveInteger(2)).toBe(true);
  expect(isPositiveInteger(1_832_923)).toBe(true);

  expect(isPositiveInteger(1.2)).toBe(false);
  expect(isPositiveInteger(Number.POSITIVE_INFINITY)).toBe(false);
  expect(isPositiveInteger(Number.NEGATIVE_INFINITY)).toBe(false);
  expect(isPositiveInteger(Number.NaN)).toBe(false);
  expect(isPositiveInteger('1')).toBe(false);
  expect(isPositiveInteger(0)).toBe(false);
  expect(isPositiveInteger(-1)).toBe(false);
});
