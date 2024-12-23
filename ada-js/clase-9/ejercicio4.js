const prompt = require('prompt-sync')();

// Pedimos al usuario que ingrese su nombre
let nombre = prompt("Por favor, ingresa tu nombre: ");

// Verificamos si el nombre que ingresó es igual al mío (en este caso, 'Maria')
if (nombre === "Maria") {
    console.log("¡Hola, Maria! ¡Qué bien que coincida tu nombre con el mío!");
} else {
    console.log("Tu nombre no es Maria. ¡Pero igualmente, mucho gusto!");
}
