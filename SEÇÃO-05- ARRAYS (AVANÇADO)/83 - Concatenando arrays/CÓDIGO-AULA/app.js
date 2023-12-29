// Concatenando arrays

// Com concat
const a1 = [1, 2, 3];
const a2 = [5, 6, 7];
const a3 = a1.concat(a2);
console.log(a3);

// Com spread ...
const a4 = [...a1, ...a2];
console.log(a4);
