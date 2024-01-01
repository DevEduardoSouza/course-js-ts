// Map
// Map vai receber um array exatamente com tamanho do original, mas com os valores alterados
// Por padrão não altera o array original, mas eu posso querer alterar

const numbers = [1, 2, 5, 7, 8, 6, 44, 22, 445, 54];

// Dobrar os valores
const numbersDoubled = numbers.map((number) => number * 2);
console.log(numbersDoubled);

//
const pessoas = [
  { nome: "Eduardo", idade: 21 },
  { nome: "Maria", idade: 55 },
  { nome: "Geovana", idade: 25 },
  { nome: "Luiz", idade: 45 },
  { nome: "Isabela", idade: 27 },
];

// Retornar apenas a string com o nome da pessoa
const nomes = pessoas.map((pessoa) => pessoa.nome);
console.log(nomes);

// Remova apenas a chave "nome" do objeto
// const pessoaSemNome = pessoas.map((pessoa) => {
//   return {idade : pessoa.idade};
// });

// Retornando um obj literal na arrow function usando ()
const pessoaSemNome = pessoas.map((pessoa) => ({ idade: pessoa.idade }));
console.log(pessoaSemNome);

// Adicione um chave id
const pessoaComID = pessoas.map((pessoa, index) => {
  pessoa.id = index + 1;
  return pessoa;
});
console.log(pessoaComID);
