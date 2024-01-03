// ========{ Como copiar objetos }========

const obj = { name: "Eduardo" };

// Assim é passado por referência
const obj2 = obj;
obj.name = "Souza";
console.log(obj2);

// Fazendo a cópia com spread ...
// E posso add outro atributo se eu quiser
const obj3 = { ...obj, sobrenome: "souza" };
obj3.name = "Cópia";
console.log(obj3);

// Fazendo cópia com Object.assign()
const obj4 = Object.assign({}, obj);
obj4.name = "Copiado via Object.assign";
console.log(obj4);

// ========{ Outros métodos }========

//Object.keys = vai retornar um array com as chaves do objeto
console.log(Object.keys(obj));

//Object.values = vai retornar um array com os valores do objeto
console.log(Object.values(obj));

//Object.values = vai retornar um array com as chaves e valores do objeto
console.log(Object.entries(obj));

// Object.getOwnPropertyDescriptor = vai pegar as configurações da proriedade, essas configurações da Object.defineProperty e Object.defineProperties
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
