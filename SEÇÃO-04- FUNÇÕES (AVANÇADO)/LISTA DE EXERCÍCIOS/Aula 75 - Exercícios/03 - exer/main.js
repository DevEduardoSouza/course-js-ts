/**
 * 03
 * Função fábrica com encapsulamento Crie uma função criarContaBancaria que retorna um objeto com métodos * para depositar, sacar e verificar saldo. Garanta que o saldo não seja acessível diretamente.
 */

function criarContaBancaria({ nome, cpf, senha }) {
  let saldo = 0;

  return {
    depositar: (valor) => {
      if (typeof valor != "number") {
        return "Erro na operação";
      }
      if (valor <= 0) return "Erro na operação: valor menor que 0";

      saldo += valor;
      return "Depósito feito com sucesso";
    },
    sacar: (valor) => {
      if (typeof valor !== "number") return "Erro na operação";
      if (valor > saldo || valor <= 0) return "Saldo insuficiente";

      saldo -= valor;
      return "Saque feito com sucesso";
    },
    verificarSaldo: () => {
      let text = `
      Nome: ${nome} \n 
      Cpf: ${cpf} \n
      Saldo: ${saldo.toFixed(2)} R$ \n
      `;
      return text;
    },
  };
}

const user01 = {
  nome: "Teste",
  cpf: "12345678910",
  senha: "teste1234",
};

const conta1 = criarContaBancaria(user01);

console.log(conta1.depositar(1000));
console.log(conta1.sacar(1001));
console.log(conta1.sacar(899.8));

console.log(conta1.verificarSaldo());
