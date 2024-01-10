export default class Order {
  #id_order;
  #data;
  #client;
  #product = [];

  constructor(client) {
    this.#data = new Date();
    this.#client = client;

    this.#randomId();
  }

  // gerar o id aleatorio da order
  #randomId() {
    const timestamp = new Date().getTime();
    const numberRandom = Math.floor(Math.random() * 100000);
    this.#id_order = `${timestamp}${numberRandom}`;
  }

  // Adcicionar produto
  #addProduct(product, quantity) {
    if (!product || typeof product !== "object") {
      throw new Error("Erro");
    }

    if (quantity > product.amount) {
      throw new Error("Sem estoque");
    }

    if (!quantity || typeof quantity !== "number" || quantity <= 0) {
      throw new Error("Quantidade inválida para o produto");
    }
    this.#product.push({ product, quantity });
  }
  addProduct(product, quantity) {
    this.#addProduct(product, quantity);
  }

  //Remover produto
  #removeProduct(id) {
    if (!id || typeof id !== "string") {
      throw new Error("erro no id");
    }

    const indexOfProduct = this.products.findIndex((item) => {
      return item.product.toObject.id === id;
    });

    if (indexOfProduct === -1) {
      throw new Error(`Produto com id ${id} não encontrado`);
    }

    const productRemoved = this.products.splice(indexOfProduct, 1);

    return productRemoved;
  }
  removeProduct(id) {
    return this.#removeProduct(id);
  }

  // Calcular o total do pedido
  calculateOrderTotal() {
    const total = this.products.reduce((ac, value) => {
      const { price } = value.product.toObject;
      const { quantity } = value;

      return ac + price * quantity;
    }, 0);

    return total;
  }

  // discount
  discount() {
    discountT: () => {};
    discount2: () => {};
  }

  get products() {
    return this.#product;
  }

  get orderId() {
    return this.#id_order;
  }

  //data
  get data() {
    return this.#data;
  }

  // getter para obter o cliente
  get client() {
    return this.#client.toObject;
  }

  // Resumo do pedido
  get toObject() {
    return {
      id: this.#id_order,
      data: this.#data,
      client: this.client,
      products: this.products,
    };
  }
}
