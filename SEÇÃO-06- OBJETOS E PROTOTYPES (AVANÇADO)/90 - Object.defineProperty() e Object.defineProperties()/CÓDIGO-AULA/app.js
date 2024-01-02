// Travar propriedades de objetos - onde essas propriedades vai ter o comportamento de um "const"
// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
  // this.nome = nome;
  // this.preco = preco;

  // Exemplo: a proriedade estoque sendo privada

  Object.defineProperty(this, "estoque", {
    value: estoque,
    writable: false, // Não pode ser modificado
    enumerable: true, // Pode ser iterado
    configurable: false, // Não pode ser reconfigurado ou removido
  });

  Object.defineProperties(this, {
    nome: {
      value: nome,
      writable: false, // Não pode ser modificado
      enumerable: true, // Pode ser iterado
      configurable: false, // Não pode ser reconfigurado ou removido
    },
    preco: {
      value: preco,
      writable: false, // Não pode ser modificado
      enumerable: true, // Pode ser iterado
      configurable: false, // Não pode ser reconfigurado ou removido
    },
  });
}

const p1 = new Produto("Camisa", 25, 50);

p1.estoque = 50000;
console.log(p1);

// Mostrando as chaves do meu obj
console.log(Object.keys(p1));
