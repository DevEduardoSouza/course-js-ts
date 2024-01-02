/**
 * Exercício 4: Organizando Dados de Usuários
 *
 * Crie um sistema para gerenciar dados de usuários:
 *
 * - Tenha um array userDatabase contendo objetos representando usuários.
 *
 * - Desenvolva funções para:
 *   - Adicionar um novo usuário à base de dados.✅
 *   - Remover um usuário com base no email ou em outro critério.✅
 *   - Atualizar informações de um usuário existente.✅
 *   - Encontrar usuários com idade acima de um valor específico.✅
 *   - Listar todos os usuários por ordem alfabética de nome.✅
 */

const userDatabase = [
  {
    id: 1,
    name: "Eduardo",
    lastname: "Souza",
    password: "123456",
    email: "eduardo@gmail.com",
    idade: 22,
  },
  {
    id: 2,
    name: "Ana",
    lastname: "Costa",
    password: "123456",
    email: "maria@gmail.com",
    idade: 35,
  },
  {
    id: 3,
    name: "Maisa",
    lastname: "Mara",
    password: "123456",
    email: "maisa@gmail.com",
    idade: 27,
  },
  {
    id: 4,
    name: "Maura",
    lastname: "Livia",
    password: "123456",
    email: "maura@gmail.com",
    idade: 55,
  },
];

// Add new user
const addUser = (user) => {
  userDatabase.push(user);
};

// Remove user by email
const removeUserByEmail = (email) => {
  const user = userDatabase.find((user, index) => {
    if (user.email.toLowerCase() === email.toLowerCase())
      return userDatabase.splice(index, 1);
  });

  return user;
};

// Update user
const updateUser = (userUpdate) => {
  const user = userDatabase.find((user, index) => {
    if (user.id === userUpdate.id) {
      return userDatabase.splice(index, 1, userUpdate);
    }
  });

  return user;
};

// Get by age
const getByAge = (age) => {
  return userDatabase.filter((user) => user.idade >= age);
};

// sort by alphabet
const sortByAlphabet = () => {
  return userDatabase.sort((a, b) => a.name.localeCompare(b.name));
};

const user = {
  id: 4,
  name: "MauraNovo",
  lastname: "Livia",
  password: "123456",
  email: "maura@gmail.com",
  idade: 19,
};

// addUser(user);

// console.log(removeUserByEmail("eduardo@gmail.com"));
updateUser(user);

// console.log(getByAge(25));
sortByAlphabet();
console.log(userDatabase);
