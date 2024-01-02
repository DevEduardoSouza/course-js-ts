/*
 * Exercícios de Funções Recursivas em JavaScript
 *
 * Intermediário:
 * 2. Crie uma função recursiva 'calcularFatorial' que retorna o fatorial de um número passado como  argumento.
 */

function calcularFatorial(valor) {
  if (valor === 0) {
    return 1;
  } else {
    return valor * calcularFatorial(valor - 1);
  }
}

console.log(calcularFatorial(5));
