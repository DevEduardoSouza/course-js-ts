// Função Fábrica -> muito ralacionada a POO
function criarPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    // This -> refênrencia mina instância
    fala(assunto) {
      return `${this.nome} está falando sobre ${assunto}`;
    },
    altura,
    peso,
    // Usando o get/gatter -> minha função se torna um atributo do obj
    get imc() {
      return (this.peso / this.altura ** 2).toFixed(2);
    },
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    // Setter -> modifcar um atributo
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },
  };
}

// 'Instânciando meu Objeto'
const pessoa1 = criarPessoa("Eduardo", "Souza", 1.81, 86);
const pessoa2 = criarPessoa("Luiz", "Souza", 1.81, 86);

// Mostrando o resultados
console.log(pessoa1);
console.log(pessoa1.fala("Programação"));
console.log(pessoa1.imc);
console.log(pessoa1.nomeCompleto);

console.log("\n");

pessoa2.nomeCompleto = "Maria Souza Silva";
console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
