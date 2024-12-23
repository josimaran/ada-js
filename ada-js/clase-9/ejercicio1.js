const prompt = require('prompt-sync')();

// Solicitar los dos números al usuario
let numero1 = parseFloat(prompt("Por favor, ingresa el primer número: "));
let numero2 = parseFloat(prompt("Por favor, ingresa el segundo número: "));

// Comparar los números y mostrar el resultado
if (numero1 > numero2) {
    console.log("El primer número es mayor.");
} else if (numero1 < numero2) {
    console.log("El segundo número es mayor.");
} else {
    console.log("Ambos números son iguales.");
}
