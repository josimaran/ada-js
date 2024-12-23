const prompt = require('prompt-sync')();
//• Ejercicio 8 - Conversión de Temperaturas: E


// Pido la temperatura en grados Celsius
let celsius = prompt("Ingresa la temperatura en grados Celsius: ");

// Convierto el valor ingresado a un número decimal usando parseFloat
celsius = parseFloat(celsius);

// Aplico la fórmula 
let fahrenheit = celsius * 9 / 5 + 32;

// Muestro el resultado 
console.log(celsius + " grados Celsius son " + fahrenheit + " grados Fahrenheit.");
