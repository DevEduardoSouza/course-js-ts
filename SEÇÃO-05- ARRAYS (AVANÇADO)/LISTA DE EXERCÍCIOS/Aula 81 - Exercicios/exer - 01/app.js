/**
 *
 *    Exercício 1: Gerenciamento de Lista de Tarefas
 *
 *     Crie um programa para gerenciar uma lista de tarefas:
 *
 *       - Inicialize um array vazio chamado taskList.
 *
 *       - Crie funções para:
 *        - Adicionar uma nova tarefa ao final da lista.
 *        - Remover a última tarefa da lista.
 *        - Adicionar uma tarefa no início da lista.
 *        - Remover a primeira tarefa da lista.
 *        - Listar todas as tarefas.
 *        - Encontrar uma tarefa específica na lista e marcá-la como concluída.
 *
 */

let taskList = [];

// Add task to the end
const addTaskEnd = (task) => taskList.push(task);

// Remove task to the end
const removeTaskEnd = () => taskList.pop();

// Add task to the start
const addTaskStart = (task) => taskList.unshift(task);

// Remove task to the start
const removeTaskStart = () => taskList.shift();

// Get all tasks
const getAllTask = () => {
  taskList.forEach((el) => console.log(el));
};

// Get one task
const getOneTask = ({ id: idTask }) => {
  const task = taskList.filter((task) => task.id === idTask);
  if (task) task[0].isDone = true;
  
  return task;
};

// Execute
const task = [
  {
    id: "1",
    name: "Student JavaScript today",
    isDone: false,
  },
  {
    id: "2",
    name: "Study CSS today",
    isDone: false,
  },
  {
    id: "3",
    name: "Study HTML today",
    isDone: false,
  },
];

addTaskEnd(task[0]);
addTaskEnd(task[1]);
addTaskStart(task[2]);
removeTaskEnd();
getAllTask();

console.log("\n");
console.log(getOneTask(task[0]));
