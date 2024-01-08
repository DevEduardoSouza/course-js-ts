// 100. Factory Functions + Prototypes
function criarPessoa(nome, sobrenome) {
  const pessoaPrototype = {
    falar() {
      console.log(`${this.nome} está falando`);
    },
    comer() {
      console.log(`${this.nome} está comendo`);
    },
    beber() {
      console.log(`${this.nome} está bebendo`);
    },
  };

  return Object.create(pessoaPrototype, {
    nome: { value: nome, writable: true, enumerable: true },
    sobrenome: { value: sobrenome, writable: true, enumerable: true },
  });
}

const pessoa = criarPessoa("Eduardo", "Souza");
console.log(pessoa);
