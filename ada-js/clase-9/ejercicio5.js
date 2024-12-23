const prompt = require('prompt-sync')();


// Solicitar los 3 números al usuario
let numero1 = parseFloat(prompt("Por favor, ingresa el primer número: "));
let numero2 = parseFloat(prompt("Por favor, ingresa el segundo número: "));
let numero3 = parseFloat(prompt("Por favor, ingresa el segundo número: "));

// Comparar los números y mostrar el resultado
if (numero1 > numero2 && numero1 > numero3) {
    console.log("El mayor número es: " + numero1);
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log("El mayor número es: " + numero2);
} else {
    console.log("El mayor número es: " + numero3);
}