const prompt = require('prompt-sync')();
//Ejercicio 9: Cálculo del IMC
// Pido el peso y la altura
let peso = prompt("Ingresa tu peso en kilogramos: ");
let altura = prompt("Ingresa tu altura en metros: ");

// Convierto los valores a números decimales
peso = parseFloat(peso);
altura = parseFloat(altura);

// Calculo el IMC
let imc = peso / (altura * altura);

// Muestro el IMC en la consola
console.log("Tu IMC es: " + imc);
