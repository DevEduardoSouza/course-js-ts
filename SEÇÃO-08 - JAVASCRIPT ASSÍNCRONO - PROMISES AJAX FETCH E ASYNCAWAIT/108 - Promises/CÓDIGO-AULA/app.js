// Promise
// Promise é em paralelo, ou seja vai ser resolvido mais o código não para

function rand(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

/**
  Como essa função tem um tempo aleatória 
  para dar o resultado preciso controlar com Promise
*/

function connectDB(msg, tempo) {
  // Resolve  -> Executou com sucesso
  // Reject   -> Deu erro
  return new Promise((resolve, reject) => {
    if (typeof msg != "string") {
      reject("Erro msg deve ser string");
    }

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

// then -> pegar o resultado da promise
// catch -> capturar erros
connectDB("Opa1", rand(1, 3))
  .then((result) => {
    console.log(result);
  })
  .catch((er) => {
    console.log(er);
  });
