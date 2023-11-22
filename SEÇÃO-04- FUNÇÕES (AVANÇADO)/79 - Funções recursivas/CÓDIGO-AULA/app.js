// Recursividade é uma função que se chama de volta
function recursiva(max) {
  if (max >= 10) return;
  max++;
  console.log(max);
  recursiva(max);
}
recursiva(0);

// Fatoria
function fatoria(fat) {
  if (fat === 0 || fat === 1) {
    return 1;
  } else {
    return fat * fatoria(fat - 1);
  }
}

let valorFat = fatoria(5);
console.log(valorFat);
