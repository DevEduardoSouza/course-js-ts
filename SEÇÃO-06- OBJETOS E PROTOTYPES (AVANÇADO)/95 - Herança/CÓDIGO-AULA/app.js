//Produto - aumento e desconto
// Camiseta e Caneca

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (percentual) {
  this.preco += this.preco * (percentual / 100);
};

Produto.prototype.desconto = function (percentual) {
  this.preco -= this.preco * (percentual / 100);
};

// Herança
function Camiseta(nome, preco, cor) {
  // Chamar o construtor
  Produto.call(this, nome, preco);
  this.cor = cor;
}
// Herda as metódos dessa maneira
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: false,
    get: () => {
      return estoque;
    },
    set: (valor) => {
      estoque = valor;
    },
  });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const c1 = new Camiseta("Camisa Branca", 15.8, "Branco");
c1.aumento(10);
console.log(c1);

const caneca = new Caneca("Caneca nome", 5, "Ouro", 5);
caneca.estoque = 1000;
console.log(caneca.estoque);
console.log(caneca);
