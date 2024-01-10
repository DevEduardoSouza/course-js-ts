import Order from "./models/Order.mjs";
import Client from "./models/Client.mjs";
import Product from "./models/Produto.mjs";

const cliente = new Client("João", 22, "Rua b.");
const produto = new Product("camisa", 10, 5);
const produto2 = new Product("Tênis Nike", 500, 15);

const pedido = new Order(cliente);

pedido.addProduct(produto, 2);
pedido.addProduct(produto2, 10);

console.log(pedido.toObject);

let id = produto.toObject.id;
pedido.removeProduct(String(id));
console.log(id);
