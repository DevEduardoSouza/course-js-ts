# Revisão Objetos

## Introdução

- Criando objetos literais simples

```js
const pessoa = {
  nome: "Eduardo",
  sobrenome: "Souza",
};
```

- Formas de acessar

```js
console.log(pessoa.nome); // mais usada
console.log(pessoa["nome"]); //pode ser usado de forma dinâmica
```

## Factory Function

- Essa função tem como objetivo criar um objeto

```js
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const p1 = criaPessoa("Eduardo", "Souza");
console.log(p1.nomeCompleto);
```

## Constructor functions

- Um construtor é basicamente uma função. Ela pode ser executada como uma função ou pode ser utilizada para instanciar um objeto utilizando a palavra reservada new.

- this faz referencia ao objeto criado pelo new

```js
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  // Object.freeze(this); // Isso trava os valores ou seja não pode seer mudado
}

const pessoa4 = new Pessoa("João", "Cabral");
```
