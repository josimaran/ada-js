const prompt = require('prompt-sync')();

// Pido al usuario que ingrese un número del 1 al 7
let numero = parseInt(prompt("Ingresa un número del 1 al 7: "));

// Verifico el número ingresado y muestro el día de la semana correspondiente
if (numero === 1) {
    console.log("Lunes");
} else if (numero === 2) {
    console.log("Martes");
} else if (numero === 3) {
    console.log("Miércoles");
} else if (numero === 4) {
    console.log("Jueves");
} else if (numero === 5) {
    console.log("Viernes");
} else if (numero === 6) {
    console.log("Sábado");
} else if (numero === 7) {
    console.log("Domingo");
} else {
    console.log("Error: El número ingresado no es un n[umero del 1 al 7.");
}
