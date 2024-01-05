function ValidarCpf(cpfEnviado) {
  Object.defineProperty(this, "cpfLimpo", {
    get: () => {
      return cpfEnviado.replace(/\D+/g, "");
    },
  });
}

ValidarCpf.prototype.valida = function () {
  if (
    typeof this.cpfLimpo === "undefined" ||
    this.cpfLimpo.length !== 11 ||
    this.isSequencial()
  )
    return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);

  const novoCpf = cpfParcial + digito1 + digito2;

  return novoCpf === this.cpfLimpo;
};

ValidarCpf.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);
  let regressivo = cpfArray.length + 1;
  const total = cpfArray.reduce((ac, valor) => {
    ac += regressivo * Number(valor);

    regressivo--;
    return ac;
  }, 0);

  const digito = 11 - (total % 11);

  return digito > 9 ? "0" : String(digito);
};

ValidarCpf.prototype.isSequencial = function () {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo;
};

const cpf = new ValidarCpf("070.987.720-03");

if (cpf.valida()) {
  console.log("CPF válido");
} else {
  console.log("CPF Inválido");
}
