export default class Client {
  #name;
  #age;
  #address;

  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
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
   * get and set age
   */
  get age() {
    return this.#age;
  }

  set age(newAge) {
    if (typeof newAge !== "number") {
      throw new Error("error when changing age");
    }
    if (newAge > 150 || newAge < 16) {
      throw new Error("You are not old enough to access the system");
    }
    this.#age = newAge;
  }

  /**
   * get and set address
   */
  get address() {
    return this.#address;
  }

  set address(newAddress) {
    if (typeof newAddress !== "string" || newAddress === "") {
      throw new Error("error when changing address");
    }
    this.#address = newAddress;
  }

  /**
   * get and set client
   */
  get toObject() {
    return {
      name: this.#name,
      age: this.#age,
      address: this.#address,
    };
  }

  set client(client) {
    if (typeof client !== "object") {
      throw new Error("error when changing client");
    }

    const { name, age, address } = client;

    this.name = name;
    this.age = age;
    this.address = address;
  }
}
