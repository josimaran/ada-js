const prompt = require('prompt-sync')(); 

// Solicitud de ingreso de número
let numero = parseFloat(prompt("Por favor ingresa un número: "));

// Calculo el doble
let doble = numero * 2;

// Muestro el resultado en la consola
console.log("El doble de tu número es: " + doble);