//
function* geradora1() {
  yield "Valor 1";
  yield "Valor 2";
  yield "Valor 3";
}

function* geradora2() {
  yield function () {
    console.log("Etapa 1");
  };
  yield function () {
    console.log("Etapa 2");
  };
  yield function () {
    console.log("Etapa 3");
  };
  return function () {
    console.log("Finalizando a função geradora");
  };
}

const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

const g2 = geradora2();
const fun1 = g2.next().value;
const fun2 = g2.next().value;
fun1();
fun2();
