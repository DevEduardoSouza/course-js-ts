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

  // gerar o id order aleatorio
  #randomId() {
    const timestamp = new Date().getTime();
    const numberRandom = Math.floor(Math.random() * 100000);
    this.#id_order = `${timestamp}${numberRandom}`;
  }

  // Add product
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

  //remove product

  #removeProduct(id) {
    if (!id || typeof id !== "string") {
      throw new Error("erro no id");
    }

    // console.log(this.products[0].product.toObject.id);

    const products = this.products;
    const product = products.find((item) => {
      const idObj = item.product.toObject.id;

      console.log(idObj, id);
      return idObj === id;
    });
    console.log("opa", product);
  }

  removeProduct(id) {
    this.#removeProduct(id);
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

  // Retornar o pedido em forma de object
  get toObject() {
    return {
      id: this.#id_order,
      data: this.#data,
      client: this.client,
      products: this.products,
    };
  }
}
