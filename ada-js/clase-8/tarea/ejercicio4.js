const prompt = require('prompt-sync')();

// Solicito al usuario que ingrese un número entero
let numero = parseInt(prompt("Ingresa un número entero:"));

// Verifico si el número es par o impar
if (numero % 2 === 0) {
    console.log("El número es par.");
} else {
    console.log("El número es impar.");
}