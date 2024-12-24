const prompt = require('prompt-sync')();
// ARRAYS

let colores = ["Rojo", "Verde", "Azul"]; // con strings
let numeros = [23, 56, 78, 90]; // de numeros
let booleanos = [true, false, true, true]; // de booleanos
let mezcla = ["Berni", 26, true, colores]; //con distintos tipos de datos

// Mostramos un array completo
console.log(numeros);

// Acceder a un dato especifico dentro de un array
console.log(colores[1]);

// Array dentro de array
console.log(mezcla[3][0]);
