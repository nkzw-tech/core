export default function isPositiveInteger(number: unknown) {
  return Number.isInteger(number) && (number as number) > 0;
}
