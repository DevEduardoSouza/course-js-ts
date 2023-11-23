/**
 * 2. Função fábrica com métodos Modifique a função criarPessoa para incluir métodos, como
 * fazerAniversario que aumenta a idade e mudarProfissao que altera a profissão.
 */

function criarPessoa({ nome, idade, profissao }) {
  return {
    nome,
    idade,
    profissao,
    aprensentar() {
      return `Olá me chamo ${this.nome} tenho ${this.idade} anos e sou ${this.profissao}`;
    },
    fazerAniversario() {
      this.idade++;
    },
    mudarProfissao(newProfissao) {
      if (!newProfissao) {
        return;
      }

      this.profissao = newProfissao;
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

pessoa1.mudarProfissao("Developer");
pessoa1.fazerAniversario();

console.log(pessoa1.aprensentar());
