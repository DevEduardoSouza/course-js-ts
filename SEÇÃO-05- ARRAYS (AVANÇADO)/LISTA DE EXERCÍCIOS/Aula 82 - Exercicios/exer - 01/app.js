/**
 * Exercício 1: Gestão de Pedidos
 *
 * Crie um sistema para gestão de pedidos de uma loja online:
 *
 * 1. Tenha um array chamado orders contendo objetos representando pedidos.
 * 2. Implemente as seguintes funcionalidades:
 *    - Remover um pedido com base no ID do pedido utilizando splice().
 *    - Adicionar pedidos cancelados a um novo array usando concat().
 */

const orders = [
  { id: 1, pedido: "Pizza", cancelado: false },
  { id: 2, pedido: "Hamburge", cancelado: true },
  { id: 3, pedido: "Lasanha", cancelado: false },
  { id: 4, pedido: "HotDog", cancelado: false },
  { id: 5, pedido: "Arroz ao molho", cancelado: true },
];

const removePedido = (orders, id) => {
  const pedidoRemovido = orders.find((order, index) => {
    if (order.id === id) {
      return orders.splice(index, 1);
    }
  });

  return pedidoRemovido;
};

const pedidosCancelados = (orders) => {
  const removidos = orders.filter((order) => order.cancelado === true);

  return [].concat(...removidos);
};

console.log(pedidosCancelados(orders));
console.log("\n", orders);
