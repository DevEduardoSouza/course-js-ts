/**
 * 05
 *  Função fábrica com herança prototípica
 * Crie uma função criarAnimal que sirva como protótipo para outros objetos.
 * Esta função deve conter * propriedades e métodos comuns a todos os animais.
 */

function criarAnimal(nome, peso, tipo) {
  let animal = {};

  animal.nome = nome;
  animal.peso = peso;
  animal.tipo = tipo;

  animal.infos = function () {
    return `nome: ${this.nome}`;
  };
  return animal;
}

// Função fábrica para criar objetos Estudante que herdam de Pessoa
function criarCachoro(nome, peso, tipo, dono) {
  // Objeto base, criado usando a função fábrica Pessoa
  var cachorro = criarAnimal(nome, peso, tipo);

  // Adicionando propriedade específica do objeto Estudante
  cachorro.dono = dono;

  // Método específico do objeto Estudante
  cachorro.exibirCurso = function () {
    console.log("O cachoro é do " + this.dono + ".");
  };

  return cachorro;
}

const a1 = criarCachoro("Cachorro", 55, "Tipo a", "Ronaldo");
console.log(a1);
