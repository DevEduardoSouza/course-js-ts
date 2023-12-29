/**
 * Exercício 2: Manipulação de Dados de Estoque
 *
 * Simule um sistema de gerenciamento de estoque:
 *
 * - Crie um array chamado inventory contendo objetos que representem itens do estoque.
 *
 * - Implemente funções para:
 *   - Adicionar um novo item ao estoque. ✅
 *   - Remover um item do estoque com base no nome. ✅
 *   - Atualizar a quantidade de um item no estoque. ✅
 *   - Calcular o valor total do estoque (quantidade * preço para cada item). ✅
 *   - Listar todos os itens no estoque.✅
 */

let inventoryList = [];

// Add inventory
const addInventory = (inventory) => inventoryList.push(inventory);

// Remove inventory by name
const removeInventoryByName = (name) => {
  const item = inventoryList.find((item) => item.name === name);
  const index = inventoryList.indexOf(item);

  if (index !== -1) {
    inventoryList.splice(index, 1);
  }
};

// Update quantity by id
const updateQuantityById = (idItem = id, newQuantity) => {
  const item = inventoryList.find((el) => el.id === idItem);
  if (!item) {
    throw new `Item with ${id} doesn't exist`();
  }

  if (newQuantity >= 0) item.quantity = newQuantity;
};

// total stock price
const totalStockPrice = () => {
  return inventoryList.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.quantity * currentValue.price,
    0
  );
};

// Get all inventorys
const getAllInventory = () => {
  inventoryList.forEach((el) => console.log(el));
};

let itens = [
  {
    id: 1,
    name: "Beans",
    quantity: 5,
    price: 10.5,
  },
  {
    id: 2,
    name: "Rice",
    quantity: 10,
    price: 5.5,
  },
];

// Add
addInventory(itens[0]);
addInventory(itens[1]);

// remove by name
removeInventoryByName("Beans");
console.log(inventoryList);

// Update by id
updateQuantityById(2, 50);

// Total price * quantity
console.log(totalStockPrice());

// All Inventory
getAllInventory();
