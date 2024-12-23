const prompt = require('prompt-sync')();

// Pedimos al usuario que ingrese dos valores booleanos (true o false)
let condicion1 = prompt("Ingresa el primer valor (true o false): ");
let condicion2 = prompt("Ingresa el segundo valor (true o false): ");

// Convertimos los valores ingresados en verdaderos booleanos
condicion1 = (condicion1 === "true");
condicion2 = (condicion2 === "true");

// Mostramos los resultados de las combinaciones lógicas
console.log("El resultado de AND (condicion1 && condicion2) es: " + (condicion1 && condicion2));
console.log("El resultado de OR (condicion1 || condicion2) es: " + (condicion1 || condicion2));
console.log("El resultado de NOT en condicion1 (!condicion1) es: " + !condicion1);
