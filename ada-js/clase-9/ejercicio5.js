const prompt = require('prompt-sync')();


// Pedimos al usuario que ingrese su nombre
let nombre = prompt("Ingresa tu nombre: ");

// Comparamos el nombre ingresado con el nombre "Maria"
if (nombre === "Maria") {
    console.log("¡Hola, Maria!");
} else {
    console.log("Tu nombre no es Maria.");
}
