/*
 * Exercícios de Funções Recursivas em JavaScript
 *
 * Básico:
 * 1. Escreva uma função recursiva 'contagemRegressiva' que exibe os números de n a 1 no console.
 */

function contagemRegressiva(n) {
  if (n < 1) return;
  console.log(n);

  n--;
  contagemRegressiva(n);
}

contagemRegressiva(10);
