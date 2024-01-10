export default class Product {
  #id_product;
  #name;
  #price;
  #amount;

  constructor(name, price, amount) {
    this.#name = name;
    this.#price = price;
    this.#amount = amount;
    this.#id_product = Math.floor(Math.random() * 10);
  }

  /**
   * get and set name
   */
  get name() {
    return this.#name;
  }

  set name(newName) {
    if (typeof newName !== "string" || newName === "") {
      throw new Error("error when changing name");
    }
    this.#name = newName;
  }

  /**
   * get and set price
   */
  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (typeof newPrice !== "number" || newPrice <= 0) {
      throw new Error("error when changing price");
    }

    this.#price = newPrice;
  }

  /**
   * get and set amount
   */
  get amount() {
    return this.#amount;
  }

  set amount(newAmount) {
    if (typeof newAmount !== "number" || newAmount <= 0) {
      throw new Error("error when changing amount");
    }
    this.#amount = newAmount;
  }

  // id
  get id() {
    return this.#id_product;
  }

  /**
   * get and set product
   */
  get toObject() {
    return {
      id: this.#id_product,
      name: this.#name,
      price: this.#price,
      amount: this.#amount,
    };
  }

  set product(product) {
    if (typeof product !== "object") {
      throw new Error("error when changing product");
    }

    const { name, price, amount } = product;

    this.name = name;
    this.price = price;
    this.amount = amount;
  }
}
