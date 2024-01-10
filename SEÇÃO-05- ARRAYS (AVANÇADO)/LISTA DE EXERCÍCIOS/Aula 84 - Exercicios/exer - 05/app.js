/**
 * Exercício 5: Filtragem de Livros por Gênero
 *
 * Dado um array de objetos representando livros, filtre apenas os livros de um gênero específico:
 */

const biblioteca = [
  {
    titulo: "Aprendendo JavaScript",
    autor: "João Silva",
    genero: "Programação",
  },
  { titulo: "Aprendendo HTML", autor: "João Silva", genero: "Programação" },
  {
    titulo: "História do Mundo Antigo",
    autor: "Maria Oliveira",
    genero: "História",
  },
  {
    titulo: "O Guia do Mochileiro das Galáxias",
    autor: "Douglas Adams",
    genero: "Ficção Científica",
  },
  { titulo: "Culinária Italiana", autor: "Ana Souza", genero: "Culinária" },
];

const livros = (genero) =>
  biblioteca.filter(
    (livro) => livro.genero.toLowerCase() === genero.toLowerCase()
  );

console.log(livros("programação"));
