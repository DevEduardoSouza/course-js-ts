/**
 * É possivel ter metodos e atrbutos privados em JS
 * Ha formas diferentes de fazer isso, uma oficial e outra convecional
 * a ofical usa # para definir a proteção privada
 * e _ é a conversão da comunidade ou seja não muda o comportamento , mas indica que aquele atributo não pode ser alterado diretamente
 * usa get para acessar e set pra alterar atributos
 */

class Pessoa {
  nome;
  #idade;
  #peso;
  #altura;
  #imc;

  constructor(nome, idade, peso, altura) {
    this.nome = nome;
    this.#idade = idade;
    this.#peso = peso;
    this.#altura = altura;
  }

  // metodo privados
  #calculoIMC() {
    return (this.#peso / Math.pow(this.#altura, 2)).toFixed(2);
  }

  // Metodos publicos
  get imc() {
    return this.#calculoIMC();
  }

  get peso() {
    return this.#peso;
  }

  set peso(peso) {
    if (typeof peso !== "number") return;
    this.#peso = peso;
  }
}

const pessoa = new Pessoa("Eduardo", 21, 85.1, 1.82);

console.log(pessoa.peso);
console.log(pessoa.imc);

console.log((pessoa.peso = 90));
console.log(pessoa.imc);
