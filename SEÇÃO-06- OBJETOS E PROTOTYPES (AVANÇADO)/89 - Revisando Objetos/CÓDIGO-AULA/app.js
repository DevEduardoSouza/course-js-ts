// Revisão obj

// Criando um objeto literal
const pessoa = {
  nome: "Eduardo",
  sobrenome: "Souza",
};

// formas de acessar
console.log(pessoa.nome); // mais usada
console.log(pessoa["nome"]); //pode ser usado de forma dinâmica

// Criando array com new
const pessoa2 = new Object();
pessoa2.nome = "Luiz";
pessoa2.sobrenome = "Otávio";
pessoa2.idade = 21;
console.log(pessoa2.nome, pessoa2.sobrenome);

pessoa2.falarNome = function () {
  console.log("Olá, meu nome é" + this.nome);
};

pessoa2.getDataNascimento = function () {
  let dataNas = new Date();
  return dataNas.getFullYear() - this.idade;
};

pessoa2.falarNome();
console.log(pessoa2.getDataNascimento());

// Forma corretas de trabalhar com objetos
// Factory functions / Constructor functions / Classes

// Factory functions
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const pessoa3 = criaPessoa("Eduardo", "Souza");
console.log(pessoa3.nomeCompleto);

//  Constructor functions
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  // Object.freeze(this); // Isso trava os valores ou seja não pode seer mudado
}

const pessoa4 = new Pessoa("João", "Cabral");
