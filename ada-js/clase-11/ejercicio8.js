// Ejercicio 8: Encuentra los múltiplos de un número

const prompt = require('prompt-sync')();

//Solicito que ingresen numero
const numero = parseInt(prompt("Ingresa un número entero positivo: "));

if (numero > 0) {
    console.log("Los múltiplos de " + numero + " entre 1 y 100 son:");
    for (let actual = 1; actual <= 100; actual++) {
        if (actual % numero === 0) {
            console.log(actual);
        }
    }
} else {
    console.log("El número debe ser un entero positivo.");
}
