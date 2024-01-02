/**
 * Exercício 2: Filtragem de Produtos Disponíveis
 *
 * Dado um array de objetos representando produtos, filtre apenas os produtos disponíveis em estoque:
 */

const produtos = [
  { nome: "Camiseta", preco: 29.99, estoque: 10 },
  { nome: "Calça Jeans", preco: 59.99, estoque: 5 },
  { nome: "Tênis", preco: 79.99, estoque: 0 },
  { nome: "Relógio", preco: 39.99, estoque: 3 },
  { nome: "Mochila", preco: 49.99, estoque: 0 },
];

const filterProdutosComEstoque = (produtos) =>
  produtos.filter((produto) => produto.estoque > 0);

console.log(filterProdutosComEstoque(produtos));
