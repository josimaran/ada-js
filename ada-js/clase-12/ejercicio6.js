// Ejercicio 6: Iguales a 10 pero menores de 1000
const prompt = require('prompt-sync')();

// Definimos una matriz con varios números
let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
];

// Inicializamos la variable suma en 0
let suma = 0;

// Recorremos cada fila de la matriz
for (let i = 0; i < matriz.length; i++) {
    // Recorremos cada valor en la fila actual
    for (let j = 0; j < matriz[i].length; j++) {
        let valor = matriz[i][j];  // Obtenemos el valor actual
        // Verificamos si el valor está entre 10 y 1000
        if (valor >= 10 && valor < 1000) {
            suma += valor;  // Sumamos el valor si cumple la condición
        }
    }
}

// Mostramos el resultado
console.log("La suma de los valores es:", suma);

