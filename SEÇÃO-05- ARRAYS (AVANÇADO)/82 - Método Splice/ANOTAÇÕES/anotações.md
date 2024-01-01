# Splice

## Introdução

- Um metódo que pode remover, adicionar e subistituir elementos no array. Isso é umaótima ferramenta para manipular o início, meio e final de um array.

- Mudar o array atual, ele não faz a cópia.

- alternativa para **pop**, **shift**, **push** e **unshift**

- Syntax

  ```JS
  array.splice(start, deleteCount, item1, item2, ...)
  ```

  - `start`: Índice onde a alteração deve começar. Pode ser um valor negativo para indicar uma posição a partir do final do array;

  - `deleteCount`: Número opcional que indica quantos elementos devem ser removidos a partir do índice `start`;

  - `item1, item2, …`: Elementos opcionais que serão adicionados no lugar dos elementos removidos.

- `Array.prototype.splice()` retorna um novo array com os elementos removidos

## Remover

- Removendo com negativo

```js
const nomes = ["Eduardo", "Maria", "Sabrina", "Marcos"];

// Usando o negativo eu posso navegar no array do fim para o início
const namesDeleted = nomes.splice(-1, 1);
// o splice  retorna um array com os elementos deletados

console.log("Último Elemento deletado", namesDeleted);
// Expected output: Array ["Marcos"]
```

- Removendo do início

```js
const nomes = ["Eduardo", "Maria", "Sabrina", "Marcos"];

const namesDeleted = nomes.splice(0, 1);
console.log("Primeiro elemento deletado", namesDeleted);
// Expected output: Array ["Maria", "Sabrina", "Marcos"]
```

## Adicionar

- Adicionando no final

```js
const nomes = ["Eduardo", "Maria", "Sabrina", "Marcos"];

nomes.splice(nomes.length, 0, "Fernanda");

console.log(nomes);
// Expected output: Array ["Maria", "Sabrina", "Marcos", "Fernanda"]
```

- Adicionando no início

```js
const nomes = ["Eduardo", "Maria", "Sabrina", "Marcos"];

nomes.splice(0, 0, "Fernanda");

console.log(nomes);
// Expected output: Array [ "Fernanda" ,"Maria", "Sabrina", "Marcos"]
```

- Adicionar no meio sem remover

```js
// Definindo um array inicial

const frutas = ["maçã", "banana", "laranja"];

// Adicionando elementos usando splice

frutas.splice(1, 0, "uva", "pera"); // Adiciona 'uva' e 'pera' após 'maçã'

// Exibindo o array resultante

console.log(frutas); // Saída: ['maçã', 'uva', 'pera', 'banana', 'la
```

## Substituir

```js
const nomes = ["Eduardo", "Maria", "Sabrina", "Marcos"];

nomes.splice(0, 2, "Fernanda", "João");

console.log(nomes);
// Expected output: Array ["Fernanda", "João", "Sabrina", "Marcos"]
```

## Artigos sobre Splice

- https://refine.dev/blog/javascript-splice-method/#deleting-intermediary-items-with-js-arrayprototypesplice

- https://www.homehost.com.br/blog/javascript/javascript-splice/

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
