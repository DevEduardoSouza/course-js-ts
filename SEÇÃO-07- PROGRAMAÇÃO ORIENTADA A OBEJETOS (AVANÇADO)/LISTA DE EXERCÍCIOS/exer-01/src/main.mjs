import Order from "./models/Order.mjs";
import Client from "./models/Client.mjs";
import Product from "./models/Produto.mjs";

// Clientes
const cliente = new Client("João", 22, "Rua b.");

// Produtos
const produto1 = new Product("camisa", 10, 5);
const produto2 = new Product("Tênis Nike", 500, 15);

// Pedido
const pedido = new Order(cliente);

// Add produto no pedito, e quantidade de compra
pedido.addProduct(produto1, 2);
pedido.addProduct(produto2, 2);

// Removendo um produto do pedido
// Pegar o id do produto1 para ser removido
// let id = produto1.toObject.id;

try {
  // const pr = pedido.removeProduct(id);
  // console.log("Produto removido", pr);
  // console.log(pedido.toObject);

  // console.log(pedido.products);
  console.log("\n----------Função total do pedido----------\n");
  console.log(pedido.calculateOrderTotal());
} catch (error) {
  console.log(error);
}
