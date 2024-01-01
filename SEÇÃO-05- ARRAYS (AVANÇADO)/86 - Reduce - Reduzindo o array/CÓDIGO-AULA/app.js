// Reduce
// Reduzir um array

const numbers = [1, 2, 5, 7, 8, 6, 44, 22, 445, 54];

// elementos que reduce tem por padrão
// Posso dar o valor do acumulador
const soma = numbers.reduce((acumulador, valorAtual, index, array) => {
  return (acumulador += valorAtual);
}, 0);
console.log("Soma", soma);

// USando como array: retornando um array com número pares
// Mais para esse caso seria bom usar FILTER
const numerosPares = numbers.reduce((acumulador, valorAtual) => {
  if (valorAtual % 2 === 0) acumulador.push(valorAtual);
  return acumulador;
}, []);

console.log("Números pares", numerosPares);

// Retorna a pessoa mais velha
const pessoas = [
  { nome: "Eduardo", idade: 21 },
  { nome: "Maria", idade: 55 },
  { nome: "Geovana", idade: 25 },
  { nome: "Luiz", idade: 45 },
  { nome: "Isabela", idade: 27 },
];

const pessoaMaisVelha = pessoas.reduce((acumulador, valorAtual) => {
  if (acumulador.idade > valorAtual.idade) return acumulador;
  return valorAtual;
});

console.log(pessoaMaisVelha);
