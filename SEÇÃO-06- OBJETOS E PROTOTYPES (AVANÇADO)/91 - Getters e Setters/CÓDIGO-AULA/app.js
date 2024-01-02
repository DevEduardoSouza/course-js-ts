// defineProperty -> Getter e Setters
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    // value: estoque,
    // writable: false,
    enumerable: true,
    configurable: false,
    get: () => {
      return estoque;
    },
    set: (estoque) => {
      
    },
  });
}

const p1 = new Produto("Camisa", 65, 10);
console.log(p1);
