// Ejercicio 7 - Intercambio de Valores:
const prompt = require('prompt-sync')();

// 1. Declaro dos variables con valores iniciales
let valor1 = 5;
let valor2 = 10;

// 2. Muestro los valores antes del intercambio
console.log("Antes del intercambio:");
console.log("valor1:", valor1);
console.log("valor2:", valor2);

// 3. Intercambio los valores usando una variable temporal
let temp = valor1;  // Guardamos el valor de valor1 en temp
valor1 = valor2;    // Asignamos a valor1 el valor de valor2
valor2 = temp;      // Asignamos a valor2 el valor guardado en temp

// 4. Muestro los valores después del intercambio
console.log("Después del intercambio:");
console.log("valor1:", valor1);
console.log("valor2:", valor2);
