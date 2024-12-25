//Ejercicio 10 flores favoritas

const prompt = require('prompt-sync')();

// Paso 1: Inicializamos el array vacío para almacenar las flores favoritas
let floresFavoritas = [];

// Paso 2: Pedimos al usuario que ingrese sus flores favoritas
let flor1 = prompt("¿Cuál es tu flor favorita?"); 
floresFavoritas[0] = flor1;

let flor2 = prompt("¿Cuál es tu segunda flor favorita?");
floresFavoritas[1] = flor2;

let flor3 = prompt("¿Cuál es tu tercera flor favorita?");
floresFavoritas[2] = flor3;

// Paso 3: Preguntamos por una flor específica
let florEspecifica = prompt("¿Qué flor quieres buscar en tu lista de favoritas?");

// Paso 4: Verificamos cuántas veces aparece la flor específica
let contador = 0;
for (let i = 0; i < floresFavoritas.length; i++) {
    if (floresFavoritas[i] === florEspecifica) {
        contador++;
    }
}

// Mostramos el resultado
if (contador > 0) {
    console.log("La flor " + florEspecifica + " está en tu lista de flores favoritas " + contador + " vez/veces.");
} else {
    console.log("La flor " + florEspecifica + " no está en tu lista de flores favoritas.");
}
