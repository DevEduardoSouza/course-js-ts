// Validar cpf

// 966.042.450-71

// Mutiplica cada um dos primeiros 9 digitos por um regresiva começando com 10
/*
  9 x 10 
  6 x 9
  6 x 8
  0 x 7
  4 x 6
  2 x 5
  4 x 4
  5 x 3
  0 x 2
  resultado total = somaTotal

  2° pegar o primeiro digito
  primeiroDigito = 11 - (somaTotal % 11) 

  primeiroDigito > 9; primeiroDigito = 0
  
  primeiroDigito não pode ser maior que 9, se for primeiro digito é 0


  3ª pegar o 2 digito

  9 x 11 
  6 x 10 
  6 x 9
  0 x 8
  4 x 7
  2 x 6
  4 x 5
  5 x 4
  0 x 3
  primeiroDigito x 2

  segundoDigito = 11 - (somaTotal % 11) 
  segundoDigito não pode ser maior que 9, se for  digito é 0

  comparar o cpf que entro com oq saiu

*/

const cpf = "966.042.450-71";

function validarCpf(cpf) {
  const cpfInicial = cpf.replace(/\D+/g, "");

  let cpfSemPontos = Array.from(cpf.replace(/\D+/g, "")).reverse();
  cpfSemPontos.splice(0, 2);

  const somaTotalPrimeiro = somaTotal(cpfSemPontos);
  let primeiroDigito = calculoDigitoCpf(somaTotalPrimeiro);
  cpfSemPontos.unshift(String(primeiroDigito));

  // pegar segundo digito
  const somaTotalSegundo = somaTotal(cpfSemPontos);
  let segundoDigito = calculoDigitoCpf(somaTotalSegundo);
  cpfSemPontos.unshift(String(segundoDigito));

  // Comparar os cpf de entrada e de saida
  const cpfFinal = cpfSemPontos.reverse().join("");

  return cpfInicial === cpfFinal;
}

function somaTotal(cpf) {
  return cpf.reduce((ac, valor, index) => {
    index += 2;
    return ac + valor * index;
  }, 0);
}

function calculoDigitoCpf(somaTotal) {
  let valor = 11 - (somaTotal % 11);
  if (valor > 9) return 0;
  return valor;
}

if (validarCpf(cpf)) {
  console.log("CPF válido");
} else {
  console.log("CPF inválido");
}
