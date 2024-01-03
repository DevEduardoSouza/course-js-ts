// new Object tem prototype = Object.prototype
const obj = { teste: "opa" };

const obj2 = { teste2: "opa2" };
// Mudar o proto do obj2 para obj
// com isso meu obj2 herda de obj, atributos e métdos e como obj herda de Object, meu obj2 tbm herda de Objetc
Object.setPrototypeOf(obj2, obj);

// Não é reomendado acessar a propriedade __proto__
// Forma certa
Object.getPrototypeOf(obj);

console.log(obj2.teste);

// Exemplos

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (desconto) {
  this.preco = this.preco - this.preco * (desconto / 100);
};

const p1 = new Produto("Sapato", 25);
p1.desconto(10);
console.log(p1);

const p2 = {
  nome: "Roupa",
  preco: 50,
};

Object.setPrototypeOf(p2, Produto.prototype);
p2.desconto(10);
console.log(p2);

// Outra forma de criar
const p3 = Object.create(Produto.prototype, {
  tamnaho: {
    configurable: true,
    enumerable: true,
    value: "M",
  },
});
p3.preco = 100;
console.log(p3);
