// Função construtora e função fábrica retornam um OBJETO

// Função construtora
/**
 * Sempre inicia o nome com letra maiuscula = ex "Pessoa" (new)
 *
 */

function Pessoa(nome, sobrenome) {
  // Criar atributos e métodos privados
  const ID = 1501;

  const validarId = () => {
    if (typeof ID === Number) {
      return true;
    }
  };

  //Forma de acessar um atributo privado por um método

  // Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.fullName = () => {
    return `${this.nome} ${this.sobrenome}`;
  };
}

const p1 = new Pessoa("Eduardo", "Souza");
const p2 = new Pessoa("Maria", "Silva");

console.log(p1.nome);
console.log(p1.fullName());
console.log(p2.nome);
