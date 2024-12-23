const prompt = require('prompt-sync')();

// Pedir al usuario que ingrese los valores booleanos
let condicion1 = prompt("Ingresa true o false para la primera condición: ");
let condicion2 = prompt("Ingresa true o false para la segunda condición: ");

// Convertir las entradas a booleanos
condicion1 = condicion1 === 'true';
condicion2 = condicion2 === 'true';

// Mostrar los resultados de las combinaciones lógicas
console.log("Resultados:");
console.log("condicion1 AND condicion2: " + (condicion1 && condicion2));
console.log("condicion1 OR condicion2: " + (condicion1 || condicion2));
console.log("NOT condicion1: " + (!condicion1));
console.log("NOT condicion2: " + (!condicion2));
