# forEach() em JavaScript

O método `forEach()` é usado para executar uma função em cada elemento de um array em JavaScript.

## Sintaxe

```javascript
arrayOriginal.forEach(function(elemento, indice, array) {
  // lógica a ser executada para cada elemento
});
```

- `arrayOriginal`: O array no qual a função será executada.
- `elemento`: Cada item do array.
- `indice` (opcional): O índice do elemento atual.
- `array` (opcional): O próprio array original.

## Funcionamento

- `forEach()` percorre cada elemento do array.
- Executa a função callback para cada elemento.
- Não retorna um novo array.

## Exemplo

```javascript
const frutas = ['Maçã', 'Banana', 'Laranja'];
frutas.forEach(function(fruta, indice) {
  console.log(`Índice ${indice}: ${fruta}`);
});

// Saída:
// Índice 0: Maçã
// Índice 1: Banana
// Índice 2: Laranja
```

O `forEach()` é útil quando você quer executar uma ação para cada item de um array sem a necessidade de criar um novo array.
