const prompt = require('prompt-sync')();

// Pedimos al usuario que ingrese su edad
let edad = parseInt(prompt("Ingresa tu edad: "));

// Verificamos si la edad es mayor o menor de 18 años
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}