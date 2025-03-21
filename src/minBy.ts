export default function minBy<T>(
  array: ReadonlyArray<T>,
  fn: (a: T) => number,
) {
  let minItem: T | undefined = undefined;
  let min: number = Infinity;
  for (const item of array) {
    const value = fn(item);
    if (minItem === undefined || value < min) {
      min = value;
      minItem = item;
    }
  }
  return minItem;
}
