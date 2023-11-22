# Funções Recursivas

- Se chama a si mesmo
- Pode ser poderosa para resolver problemas como árvores , problemas de divisão e conquista
- **Ter cuidado** o uso incorreto pode gerar erros de estouro de pilha (stack overflow)

## Exemplo de recursividade

```JavaScript
  // Fatoria
    function fatoria(fat) {
      if (fat === 0 || fat === 1) {
        return 1;
      } else {
        return fat * fatoria(fat - 1);
      }
    }

    let valorFat = fatoria(5);
    console.log(valorFat);
```
