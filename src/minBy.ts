export default function minBy<T>(iterable: Iterable<T>, fn: (a: T) => number) {
  let minItem: T | undefined = undefined;
  let min: number = Infinity;
  for (const item of iterable) {
    const value = fn(item);
    if (minItem === undefined || value < min) {
      min = value;
      minItem = item;
    }
  }
  return minItem;
}
