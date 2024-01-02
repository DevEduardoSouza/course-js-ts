/*
 * Exercícios de Funções Construtoras em JavaScript
 *
 * Básico:
 * 1. Crie uma função construtora 'Pessoa' que receba nome e idade como parâmetros.
 *
 */

function Pessoa(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Pessoa("Eduardo", 22);
console.log(p1);
