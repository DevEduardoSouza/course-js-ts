/**
 * Exercício 3: Filtragem de Usuários Ativos
 *
 * Dado um array de objetos representando usuários, filtre apenas os usuários ativos:
 */

const usuarios = [
  { nome: "João", email: "joao@email.com", ativo: true },
  { nome: "Maria", email: "maria@email.com", ativo: false },
  { nome: "Carlos", email: "carlos@email.com", ativo: true },
  { nome: "Ana", email: "ana@email.com", ativo: false },
  { nome: "Pedro", email: "pedro@email.com", ativo: true },
];

const usuariosAtivos = (usuarios) =>
  usuarios.filter((user) => user.ativo === true);

console.log(usuariosAtivos(usuarios));
