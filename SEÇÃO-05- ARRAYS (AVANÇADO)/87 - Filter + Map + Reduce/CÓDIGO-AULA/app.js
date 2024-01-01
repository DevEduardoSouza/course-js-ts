// Retorne a soma  do dobro de todos os pares

// Filter -> pares
// map -> dobra valores
// reduce -> soma total

const numbers = [1, 2, 5, 7, 8, 6, 44, 22, 445, 54];

const result = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2)
  .reduce((accumulator, currentValue) => (accumulator += currentValue), 0);

console.log(result);
