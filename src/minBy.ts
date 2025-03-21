export default function minBy<T>(
  array: ReadonlyArray<T>,
  fn: (a: T) => number,
) {
  let min: T | undefined = undefined;
  for (const item of array) {
    if (min === undefined || fn(item) < fn(min)) {
      min = item;
    }
  }
  return min;
}
