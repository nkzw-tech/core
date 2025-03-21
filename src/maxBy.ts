export default function maxBy<T>(
  array: ReadonlyArray<T>,
  fn: (a: T) => number,
) {
  let max: T | undefined = undefined;
  for (const item of array) {
    if (max === undefined || fn(item) > fn(max)) {
      max = item;
    }
  }
  return max;
}
