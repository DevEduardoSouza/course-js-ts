/**
 * Exercício 1: Atualização de Preços de Produtos
 *
 * Dado um array de objetos representando produtos, aplique um aumento de preço de 10% a cada produto usando map():
 */

const produtos = [
  { nome: "Smartphone", preco: 999.99, estoque: 20, categoria: "Eletrônicos" },
  { nome: "Notebook", preco: 1999.99, estoque: 10, categoria: "Informática" },
  { nome: "TV 4K", preco: 1499.99, estoque: 15, categoria: "Eletrônicos" },
  {
    nome: "Fones de Ouvido",
    preco: 79.99,
    estoque: 30,
    categoria: "Acessórios",
  },
  {
    nome: "Câmera Digital",
    preco: 499.99,
    estoque: 8,
    categoria: "Fotografia",
  },
];

const aumentoPreco = (produtos, aumento) =>
  produtos.map((produto) => {
    let valor = produto.preco * aumento;

    return Math.floor((produto.preco += valor).toFixed(2));
  });

console.log(aumentoPreco(produtos, 0.1));

console.log(produtos);
