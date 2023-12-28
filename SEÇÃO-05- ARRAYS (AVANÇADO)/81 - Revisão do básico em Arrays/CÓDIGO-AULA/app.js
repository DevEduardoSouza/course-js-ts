// Básico de arrays

// forma literal de criar um array
const names = ["Fernando", "Maria", "Eduardo", "Camillo"];

// Atribuir um novo valor
names[0] = "Marcos";

// delete
//  remover itens do array preservando o index
// delete names[2]; //log [ 'Marcos', 'Maria', <1 empty item> ]

console.log(names);

// Usando o construtor para criar um array
const names2 = new Array("Maura", "Ana", "Camilla");
console.log(names2);

/*
  Array sendo um estrutura de dados possui referência
  então ao mudar o dado do elemento que recebeu essa referência, o elemento original será mudado
*/

// Exemplo
// Os dois apotam para o mesmo valor na memória
const namesRefe = names;

//pop() : remove o último elemento do array
namesRefe.pop();

console.log("inicial [names]:  ", names); // log :  inicias [names]:   [ 'Marcos', 'Maria' ]
console.log("referência [namesRefe]:  ", namesRefe); //log :  referência [namesRefe]:   [ 'Marcos', 'Maria' ]

// Copiando um array usando o spread, ELIMINAR o fator referência
const namesSpread = [...names];

namesSpread.pop();

console.log("\n\nInicial [names] : ", names); //log : [ 'Marcos', 'Maria' ]
console.log("novo [namesSpread] : ", namesSpread); //log: [ 'Marcos' ]

// Tamanho do Array : length
console.log("Tamanho do Array", names.length);

// Alterando o Array: pop(), push()
// pop() = Remove o último elemento do array e retorna o elemento removido
// shift() = Remove o primeiro elemento do array e retorna o elemento removido

// push() = Adiciona um elemento no fim do array e retorno o novo tamanho do array
// unshitf() = Adiciona um elemento no inicio do array e retorno o novo tamanho do array

// pop()
const elementRemovedEnd = names.pop();
console.log("Elemento removido do fim Array: ", elementRemovedEnd);
console.log(names);

// shift()
const elementRemovedFirst = names.shift();
console.log("Elemento removido do inicio Array: ", elementRemovedFirst);
console.log(names);

// push()
const returnEl = names.push("José");
console.log(names);
console.log(returnEl);

// unshift()
names.unshift("Paulo");
console.log(names);
console.log(returnEl);

// Performa:
// shift e unshift ao deslocar index para seu objetivo tem um custo de memória maior que pop e push

// Slice : fatiar o array ou "pegar um parte dele" e retornar uma copia
//                  0         1           2       3
const brandCars = ["BMW", "Mclaren", "Porsche", "Ferrari"];

const partBrandCars = brandCars.slice(1, 3); //log: [ 'Mclaren', 'Porsche' ]
console.log(partBrandCars);

// Posso remover usando numero negativos

// -1 removendo o último elemnto
const partBrandCarsNew = brandCars.slice(0, -1); //log: ["BMW", "Mclaren", "Porsche"];
console.log(partBrandCarsNew);

// Split: STRING -> ARRAY Transformar uma string em um array
// precisa de um separador, " " ou "," ou outra coisa

const stack = "JavaScript HTML CSS";
const stacks = stack.split(" ");
console.log(stacks);

const job = "front-end, back-end, full-stack";
const jobs = job.split(",");
console.log(jobs);

// Join: ARRAY -> STRING, Transformar uma array em um string
// join(separador) a forma de escolha para separar os itens

const ages = [20, 28, 56];
const age = ages.join(",");

console.log(age);
