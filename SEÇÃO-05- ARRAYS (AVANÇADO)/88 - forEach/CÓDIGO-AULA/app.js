// Foreach
// Apenas imprimir os valores de um array
const numbers = [1, 2, 5, 7, 8, 6, 44, 22, 445, 54];

console.log("\nCom foron")
// Com for of
for (const number of numbers) {
  console.log(number);
}

// Com foreach
console.log("\nCom foreach")
numbers.forEach((value) => console.log(value));
