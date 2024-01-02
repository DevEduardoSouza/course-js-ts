# defineProperty() e defineProperties() em JavaScript

`defineProperty()` e `defineProperties()` são métodos usados para adicionar ou modificar propriedades de um objeto em JavaScript.

## defineProperty()

O método `defineProperty()` permite definir uma propriedade específica em um objeto ou modificar suas características.

### Sintaxe

```javascript
const objeto = {};

Object.defineProperty(objeto, 'nomePropriedade', {
  value: valorPropriedade,
  writable: true,
  enumerable: true,
  configurable: true
});
```

- `objeto`: O objeto no qual a propriedade será definida.
- `nomePropriedade`: O nome da propriedade a ser definida.
- `valorPropriedade`: O valor a ser atribuído à propriedade.
- `writable`, `enumerable` e `configurable`: Propriedades opcionais que definem se a propriedade pode ser alterada, se será listada em loops e se pode ser redefinida ou excluída.

## defineProperties()

O método `defineProperties()` permite definir várias propriedades de um objeto ao mesmo tempo.

### Sintaxe

```javascript
const objeto = {};

Object.defineProperties(objeto, {
  'nomePropriedade1': {
    value: valorPropriedade1,
    writable: true,
    enumerable: true,
    configurable: true
  },
  'nomePropriedade2': {
    value: valorPropriedade2,
    writable: false,
    enumerable: false,
    configurable: true
  },
  // ...mais propriedades
});
```

- `objeto`: O objeto no qual as propriedades serão definidas.
- `nomePropriedadeX`: Os nomes das propriedades a serem definidas.
- `valorPropriedadeX`: Os valores a serem atribuídos às propriedades.
- `writable`, `enumerable` e `configurable`: Propriedades opcionais que definem as características das propriedades.

## Exemplo

```javascript
const pessoa = {};

Object.defineProperty(pessoa, 'nome', {
  value: 'João',
  writable: true,
  enumerable: true,
  configurable: true
});

Object.defineProperties(pessoa, {
  'idade': {
    value: 30,
    writable: false,
    enumerable: true,
    configurable: false
  },
  'profissao': {
    value: 'Programador',
    writable: true,
    enumerable: true,
    configurable: true
  }
});
```

Os métodos `defineProperty()` e `defineProperties()` são úteis para controlar as propriedades de um objeto, definindo se elas são editáveis, listáveis em loops ou configuráveis.
