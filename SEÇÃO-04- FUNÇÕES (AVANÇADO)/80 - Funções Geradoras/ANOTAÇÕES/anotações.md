# Funções Geradoras

- Permite a criação de iteradores customizados

## Um exemplo simples de uma função geradora seria:

```JavaScript
function* contador() {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
}

const iterador = contador();
console.log(iterador.next().value); // Saída: 0
console.log(iterador.next().value); // Saída: 1
console.log(iterador.next().value); // Saída: 2


```

## útil em situações

- Iteração Lazy: Permite gerar valores apenas quando são necessários, economizando memória e processamento.

- Operações Assíncronas: Podem ser utilizadas para controlar a execução de operações assíncronas, - facilitando o código que lida com promessas.

- Iteração Sobre Estruturas de Dados Complexas: Facilitam a iteração sobre estruturas de dados complexas, como árvores ou grafos.

- Controle de Fluxo: Permitem pausar e retomar a execução de uma função, o que pode ser útil para controlar o fluxo de um programa.

