// Polimorfismo
// Metodos que se comportam de formas diferentes nas classes  filhas

// Super Classe ou Classe mãe
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (valor > this.saldo) {
    this.verSaldo();
    console.log("Saldo insufuciente");
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(
    `Ag.: ${this.agencia} Conta:${this.conta} --- Seu saldo é R$${this.saldo
      .toFixed(2)
      .replace(".", ",")}`
  );
};

// Especializar conta

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite) {
    this.verSaldo();
    console.log("Saldo insufuciente");
    return;
  }

  // if (valor >= this.limite) {
  //   console.log(
  //     `O limite de saque é ${this.limite} e você tentou sacar ${valor}`
  //   );
  //   return;
  // }

  this.saldo -= valor;
  this.verSaldo();
};

const contaCorrente = new ContaCorrente(11, 22, 0, 100);
contaCorrente.depositar(20);
contaCorrente.sacar(120);

console.log();

//
function Cp(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

Cp.prototype = Object.create(Conta.prototype);
Cp.prototype.constructor = Cp;

const cp = new Cp(11, 23, 0);
cp.depositar(20);
cp.sacar(120);
