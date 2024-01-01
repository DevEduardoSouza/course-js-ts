// Filter
// Filter retorna um novo array filtrado,
// Ele não modifica o array principal
const numeros = [10, 5, 8, 7, 4, 6, 31, 4, 5, 6, 7, 82];

// Forma menos usada mais importante para aprender

// Craindo callback
// Por padrão o filter tem esses elemetos: value, index, array
// value = vaor interado
// index = posição do elemento no array
// arry = conjuto dos elementos
function callbackFilter(value, index, array) {
  return value > 10;
}
const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);

// Forma reduzida
// Retorne números maiores que 10
const result = numeros.filter((numero) => numero > 10);
console.log(result);

// Outros exemplos
//
const pessoas = [
  { nome: "Eduardo", idade: 21 },
  { nome: "Maria", idade: 55 },
  { nome: "Geovana", idade: 25 },
  { nome: "Luiz", idade: 45 },
  { nome: "Isabela", idade: 27 },
];

// Pessoas que tem o nome 5 letras ou mais
const qtdNome = pessoas.filter((pessoa) => pessoa.nome.length >= 5);
console.log("Pessoas que tem o nome 5 letras ou mais", qtdNome);

// Pessoas com mais de 50 anos
const pessoaMais50 = pessoas.filter((pessoa) => pessoa.idade > 50);
console.log("Pessoas que tem mais de 50 anos", pessoaMais50);

// Pessoas cujo o nome termina com a letra a

// const pessoaA = pessoas.filter((pessoa) => pessoa.nome.split("").pop() === "a");
const pessoaA = pessoas.filter((pessoa) =>
  pessoa.nome.toLowerCase().endsWith("a")
);

console.log(pessoaA);
