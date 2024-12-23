const prompt = require('prompt-sync')();

// Pido al usuario que ingrese su nombre
let nombre = prompt("Por favor, ingresa tu nombre: ");

// Verifico si el nombre que ingresó es igual
if (nombre === "Marta") {
    console.log("¡Hola, Marta tocaya! ¡Nos llamamos igual!");

else
    console.log(`No te llamas igual que yo, yo soy Marta, pero tu nombre ${nombre} también es muy bonito`);
}