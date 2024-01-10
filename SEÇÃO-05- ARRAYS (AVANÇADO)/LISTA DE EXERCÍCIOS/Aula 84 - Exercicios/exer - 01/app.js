/**
 * Exercício 1: Filtragem de Números Ímpares
 *
 * Dado um array de números, filtre apenas os números ímpares:
 */

const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const valImpares = valores.filter((valor) => valor % 2 !== 0);
console.log(valImpares); //valor esperado: [ 1, 3, 5, 7, 9 ]
