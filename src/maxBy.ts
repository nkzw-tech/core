export default function maxBy<T>(
  array: ReadonlyArray<T>,
  fn: (a: T) => number,
) {
  let maxItem: T | undefined = undefined;
  let max: number = -Infinity;
  for (const item of array) {
    const value = fn(item);
    if (maxItem === undefined || value > max) {
      max = value;
      maxItem = item;
    }
  }
  return maxItem;
}
