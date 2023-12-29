// Splice : consegue fazer oq pop, push, shift e unshift fazem
//                  -4         -3       -2           -1
//                  0         1       2           3
const nomes = ["Eduardo", "Maria", "Sabrina", "Marcos"];
console.log(nomes);
// nomes.splice(index, quantos elemento a ser apagado, elementoAdd1, elementoAdd2, elementoAdd3 )

// pop com splice
const namesDeleted = nomes.splice(-1, 1); // o splice  reorna um array com os elementos deletados
console.log("Último Elemento deletado", namesDeleted);
console.log(nomes);

// shift
const removedLast = nomes.splice(0, 1);
console.log("Primeiro elemento deletado", removedLast);
console.log(nomes);

// Push
// Adicionando elementos com splice
// Ele adciona no index que for passado
nomes.splice(nomes.length, 0, "Fernanda");

// Unshift
nomes.splice(0, 0, "Lais");
console.log(nomes);

// Posso remover e adcionar ao mesmo tempo
const elementRemoved = nomes.splice(0, 1, "Fernanda"); // remove eduardo e add fernanda

console.log(nomes);
