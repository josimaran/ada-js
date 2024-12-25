// Ejercicio 7: Matriz 5x5
const prompt = require('prompt-sync')();

// Declara una matriz de 5x5 llena de números enteros y positivos.
// Suma todos los números de la matriz y muestra el resultado.
// Matriz 5x5 con números enteros y positivos
let matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

// Variable para acumular la suma
let suma = 0;

// Recorrer la matriz y sumar los números
for (let fila of matriz) {
    for (let numero of fila) {
        suma += numero;
    }
}

// Mostrar el resultado
console.log("La suma total de la matriz es:", suma);
