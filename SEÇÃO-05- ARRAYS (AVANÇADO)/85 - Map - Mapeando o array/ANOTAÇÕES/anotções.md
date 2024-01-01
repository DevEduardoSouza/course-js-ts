# Map() em JavaScript

O método `map()` é uma função de array em JavaScript que itera sobre cada elemento de um array e cria um novo array com resultados de uma função aplicada a cada elemento.

## Sintaxe

```javascript
const novoArray = arrayOriginal.map(function(elemento) {
  // lógica de transformação do elemento
  return novoElemento;
});
```

- `arrayOriginal`: O array que será percorrido.
- `elemento`: Cada item do array original.
- `novoArray`: Novo array resultante após a aplicação da função em cada elemento.

## Funcionamento

- `map()` percorre cada item do array.
- Aplica uma função a cada item.
- Retorna um novo array com os resultados da função.

## Exemplo

```javascript
const numeros = [1, 2, 3, 4];
const dobrados = numeros.map(function(numero) {
  return numero * 2;
});

// Resultado: dobrados é [2, 4, 6, 8]
```

O `map()` é útil para transformar cada item de um array de acordo com a lógica desejada, sem modificar o array original.
