# `@nkzw/core`

Lightweight core JavaScript functions useful in any project. It ensures type-safety, reduces mistakes and has no dependencies.

## Installation

```bash
npm install @nkzw/core
```

## Usage

### `getFirst<T>(iterable: Iterable<T>): T | null`

Returns the first item of an iterable or null if the iterable is empty. This function relies on insertion order, and works with any iterable.

```typescript
import getFirst from '@nkzw/core/getFirst.js';

const fruits = ['apple', 'banana', 'kiwi'];
const firstFruit = getFirst(fruits); // 'apple'
const emptyResult = getFirst([]); // null
```

### `getFirstOrThrow<T>(iterable: Iterable<T>): T`

Returns the first item of an iterable or throws an error if the iterable is empty.

```typescript
import getFirstOrThrow from '@nkzw/core/getFirstOrThrow.js';

const fruits = ['apple', 'banana', 'kiwi'];
const firstFruit = getFirstOrThrow(fruits); // 'apple'

// Throws an error if fruits is empty.
```

### `getOrThrow<T, K>(map: ReadonlyMap<K, T>, key: K): T`

Retrieves a value from a Map for a specific key or throws an error if the key is not found.

```typescript
import getOrThrow from '@nkzw/core/getOrThrow.js';

const fruitPrices = new Map([
  ['apple', 199],
  ['banana', 99],
]);
const applePrice = getOrThrow(fruitPrices, 'apple'); // 199

getOrThrow(fruitPrices, 'kiwi'); // Throws an error for 'kiwi' since it doesn't exist in the map.
```

### `groupBy<T, S>(iterable: Iterable<T>, fn: (item: T) => S): Map<S, Array<T>>`

Groups items from an iterable by a key derived from each item.

```typescript
import groupBy from '@nkzw/core/groupBy.js';

const fruits = [
  { name: 'apple', color: 'red' },
  { name: 'banana', color: 'yellow' },
  { name: 'kiwi', color: 'green' },
  { name: 'tomato', color: 'red' },
];
const fruitsByColor = groupBy(fruits, (fruit) => fruit.color);
// Map with keys 'red', 'yellow', 'green' mapping to arrays of fruits.

const redFruits = fruitsByColor.get('red'); // Will have the apple and tomato entries.
```

### `isPositiveInteger(number: unknown): boolean`

Checks if a value is a positive integer.

```typescript
import isPositiveInteger from '@nkzw/core/isPositiveInteger.js';

isPositiveInteger(3); // true
isPositiveInteger(0); // false
isPositiveInteger(-1); // false
isPositiveInteger('3'); // false
```

### `isPresent<T>(t: T | undefined | null | void): t is T`

Type guard that checks if a value is defined and not null.

```typescript
import isPresent from '@nkzw/core/isPresent.js';

const fruits = ['apple', null, 'banana', undefined];
const validFruits = fruits.filter(isPresent); // ['apple', 'banana']
```

### `maxBy<T>(iterable: Iterable<T>, fn: (a: T) => number): T | undefined`

Returns the item with the maximum value according to the provided function.

```typescript
import maxBy from '@nkzw/core/maxBy.js';

const fruits = [
  { name: 'apple', price: 199 },
  { name: 'banana', price: 99 },
  { name: 'melon', price: 399 },
];
const mostExpensive = maxBy(fruits, (fruit) => fruit.price); // { name: 'melon', price: 399 }
```

This function also works with iterables, like Maps, Sets, or generator functions.

```typescript
import maxBy from '@nkzw/core/maxBy.js';

const fruitPrices = new Map([
  ['apple', 199],
  ['banana', 99],
  ['melon', 399],
]);

const mostExpensive = maxBy(fruitPrices, ([, price]) => price); // ['melon', 399]

const numbers = function* () {
  yield 1;
  yield 2;
  yield 3;
};

const maxNumber = maxBy(numbers(), (n) => n); // 3
```

### `minBy<T>(iterable: Iterable<T>, fn: (a: T) => number): T | undefined`

Returns the item with the minimum value according to the provided function.

```typescript
import minBy from '@nkzw/core/minBy.js';

const fruits = [
  { name: 'apple', price: 199 },
  { name: 'banana', price: 99 },
  { name: 'melon', price: 399 },
];
const cheapest = minBy(fruits, (fruit) => fruit.price); // { name: 'banana', price: 99 }
```

Similar to `maxBy`, this function also works with iterables.

### `parseInteger(value: string): number | null`

Parses a string to an integer, returning null for invalid values. This prevents the developer from forgetting to handle `NaN`.

```typescript
import parseInteger from '@nkzw/core/parseInteger.js';

parseInteger('42'); // 42
parseInteger('3.14'); // 3
parseInteger('not a number'); // null
```

### `random(min: number, max: number): number`

Generates a random integer between min and max (inclusive).

```typescript
import random from '@nkzw/core/random.js';

const dice = random(1, 6); // Random number between 1 and 6.
```

### `randomEntry<T>(array: ReadonlyArray<T>): T | null`

Returns a random element from an array, or null if the array is empty.

```typescript
import randomEntry from '@nkzw/core/randomEntry.js';

const fruits = ['apple', 'banana', 'kiwi', 'melon'];
const randomFruit = randomEntry(fruits); // Random fruit from the array.
```

### `sortBy<T>(array: Array<T>, fn: (a: T) => number): Array<T>`

Sorts an array in ascending order based on values returned by the provided function.

```typescript
import sortBy from '@nkzw/core/sortBy.js';

const fruits = [
  { name: 'melon', price: 309 },
  { name: 'apple', price: 199 },
  { name: 'banana', price: 99 },
];
const sortedByPrice = sortBy(fruits, (fruit) => fruit.price);
// Sorted as banana, apple, melon.
```

### `UnknownTypeError`

Custom error class for handling unknown type scenarios, especially useful for exhaustive type checking.

```typescript
import isPresent from '@nkzw/core/isPresent.js';
import UnknownTypeError from '@nkzw/core/UnknownTypeError.js';

type Fruit = 'apple' | 'banana' | 'kiwi';

function getFruitColor(fruit: Fruit): string {
  switch (fruit) {
    case 'apple':
      return 'red';
    case 'banana':
      return 'yellow';
    case 'kiwi':
      return 'green';
    default: {
      fruit satisfies never;
      throw new UnknownTypeError('getFruitColor', fruit);
    }
  }
}
```
