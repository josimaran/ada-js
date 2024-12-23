const prompt = require('prompt-sync')();

// Pedimos al usuario que ingrese su edad
let edad = parseInt(prompt("Ingresa tu edad: "));

// Verificamos si la edad es mayor o menor de 18 años
if (edad >= 18) {
    console.log("Puedes ingresar");
} else {
    console.log("Lo siento no puedes ingresar, eres menor de edad");
}