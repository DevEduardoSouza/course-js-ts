/**
 * 01
 * Crie uma função criarPessoa que retorne um objeto com propriedades de uma pessoa
 * (nome, idade,  profissão). Teste a função com    diferentes conjuntos de valores.
 *
 */

function criarPessoa({ nome, idade, profissao }) {
  return {
    nome,
    idade,
    profissao,
    aprensentar() {
      return `Olá me chamo ${this.nome} tenho ${this.idade} anos e sou ${this.profissao}`;
    },
  };
}

const pessoa = {
  nome: "Eduardo Souza",
  idade: 21,
  profissao: "Programador",
};

const pessoa1 = criarPessoa(pessoa);

console.log(pessoa1.aprensentar());
