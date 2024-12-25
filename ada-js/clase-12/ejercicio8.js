// Ejercicio 8: Rojo y Verde
// Para este ejercicio vamos a generar dos funciones:
// a) Una va a sumar los valores en la diagonal marcada en rojo.
// b) La otra va a marcar los valores de la diagonal marcada en verde.
// Ambas funciones deben devolver un resultado único. Rojo: 505, Verde: 505.

// Definimos una matriz de 5x5 con números enteros
let matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

// Inicializamos la variable para la suma de la diagonal roja
let sumaRoja = 0;
// Inicializamos la variable para la diagonal verde
let diagonalVerde = [];

// Recorremos la matriz para sumar los valores de la diagonal roja
for (let i = 0; i < matriz.length; i++) {
    sumaRoja += matriz[i][i];  // Diagonal roja (índice [i][i])
    diagonalVerde.push(matriz[i][matriz.length - 1 - i]); // Diagonal verde (índice [i][5-i-1])
}

// Mostramos el resultado de la suma de la diagonal roja
console.log("La suma de la diagonal roja es:", sumaRoja); // Resultado esperado: 505
// Mostramos los valores de la diagonal verde
console.log("Los valores de la diagonal verde son:", diagonalVerde); // Resultado esperado: [5, 9, 13, 17, 21]
