import random from './random.ts';

export default function randomEntry<T>(array: ReadonlyArray<T>): T | null {
  return array.at(random(0, array.length - 1)) || null;
}
