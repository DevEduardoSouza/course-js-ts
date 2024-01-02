/*
 * Exercícios de Funções Construtoras em JavaScript
 *
 * Básico:
 * 1. Crie uma função construtora 'Pessoa' que receba nome e idade como parâmetros.
 *
 * Intermediário:
 * 2. Modifique a função 'Pessoa' para incluir um método 'apresentar' que exibe "Nome: [nome], Idade: [idade]".
 *
 */

function Pessoa(name, age) {
  this.name = name;
  this.age = age;
  
  this.present = () => {
    return `Óla meu nome é ${this.name} e tenho ${this.age} anos`;
  };
}

const p1 = new Pessoa("Eduardo", 22);
console.log(p1.present());
