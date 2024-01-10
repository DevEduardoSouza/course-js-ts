/**
 * Exercício 4: Filtragem de Tarefas Concluídas
 *
 * Dado um array de objetos representando tarefas, filtre apenas as tarefas concluídas:
 */

const tarefas = [
  { nome: "Estudar JS", data: "15/02", concluida: true },
  { nome: "Estudar CSS", data: "15/02", concluida: true },
  { nome: "Estudar HTML", data: "16/02", concluida: false },
];

const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.concluida === true);
console.log(tarefasConcluidas);
