# Reduce() em JavaScript

O método `reduce()` em JavaScript é usado para reduzir os elementos de um array a um único valor. Ele executa uma função callback em cada elemento do array, resultando em um único valor de retorno.

## Sintaxe

```javascript
const resultado = arrayOriginal.reduce(function(acumulador, elementoAtual) {
  // lógica para combinar/acumular valores
  return novoValorAcumulado;
}, valorInicial);
```

- `arrayOriginal`: O array que será reduzido.
- `acumulador`: Valor acumulado/resultante após cada iteração.
- `elementoAtual`: O elemento atual sendo processado no array.
- `resultado`: Valor final resultante da redução.
- `valorInicial` (opcional): Valor inicial para o acumulador.

## Funcionamento

- `reduce()` executa a função callback para cada elemento do array.
- O valor retornado é acumulado a partir de cada iteração.
- Retorna o valor acumulado final.

## Exemplo

```javascript
const numeros = [1, 2, 3, 4];
const soma = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero;
}, 0);

// Resultado: soma é 10
```

O `reduce()` é útil para operações como somar todos os valores de um array ou concatenar elementos, produzindo um único resultado.
