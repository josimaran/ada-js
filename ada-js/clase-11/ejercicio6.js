// Tabla de multiplicar
const prompt = require('prompt-sync')();

const numero = parseInt(prompt("Ingresa un número: "));

for (let contador = 1; contador <= 10; contador++) {
    console.log(`${numero} x ${contador} = ${numero * contador}`);
}
