# Filter

- Função de filtrar o conteúdo de um array
- Faz a filtragrm com poucas linhas de código
- Retorna um novo array ou seja não modifiva o original
  **Array.prototype.filter()**

## Exemplos

- Retorne números maiores que 10

```js
const numeros = [10, 5, 8, 7, 4, 6, 31, 4, 5, 6, 7, 82];

const result = numeros.filter((numero) => numero > 10);
// filtered is [ 31, 82 ]
```

- Pessoas que tem o nome 7 com letras ou mais

```js
const pessoas = [
  { nome: "Eduardo", idade: 21 },
  { nome: "Maria", idade: 55 },
  { nome: "Geovana", idade: 25 },
  { nome: "Luiz", idade: 45 },
  { nome: "Isabela", idade: 27 },
];

const qtdLetra = pessoas.filter((pessoa) => pessoa.nome.length >= 7);
/* filtered is 

  { nome: 'Eduardo', idade: 21 },
  { nome: 'Geovana', idade: 25 },
  { nome: 'Isabela', idade: 27 } 

*/
```

- Pessoas com mais de 50 anos

```js
const pessoaMais50 = pessoas.filter((pessoa) => pessoa.idade > 50);
// filtered is  [ { nome: 'Maria', idade: 55 } ]
```
