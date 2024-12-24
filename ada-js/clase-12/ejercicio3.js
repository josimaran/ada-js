// Ejercicio 3: Ciclo For
// Contamos cuántos números impares hay desde 0 hasta un número X (inclusive).

const prompt = require('prompt-sync')();

// Pedimos al usuario que ingrese un número X
let x = parseInt(prompt("Ingresa un número X: "));

// Inicializamos el contador de números impares
let contadorImpares = 0;

// Usamos un ciclo for para recorrer los números desde 0 hasta X
for (let i = 0; i <= x; i++) {
    // Verificamos si el número es impar
    if (i % 2 !== 0) {
        contadorImpares++;  // Incrementamos el contador de impares
    }
}

// Mostramos el resultado
console.log("La cantidad de números impares desde 0 hasta " + x + " es: " + contadorImpares);
