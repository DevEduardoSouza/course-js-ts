# Concat

## Introdução

- concat usando para unir dois o mais arrays
- Retorna um novo array
- Posso usar o **concat()** ou **spread ...**

## Exemplos

```js
// With concat
const a1 = [1, 2, 3];
const a2 = [5, 6, 7];
const a3 = a1.concat(a2);
console.log(a3);

// With spread ...
const a4 = [...a1, ...a2];
console.log(a4);
```

```JS
// 2 Ways to Merge Arrays

const cars = ['🚗', '🚙'];
const trucks = ['🚚', '🚛'];

// Method 1: Concat
const combined1 = [].concat(cars, trucks);

// Method 2: Spread
const combined2 = [...cars, ...trucks];

// Result
// [ '🚗', '🚙', '🚚', '🚛' ]
```

## Artigos sobre concat

- https://www.samanthaming.com/tidbits/49-2-ways-to-merge-arrays/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
