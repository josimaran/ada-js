// Ejercicio 1: While
// Crea un programa que solicite al usuario ingresar números continuamente hasta que el usuario ingrese un número negativo.
// Luego, imprime la suma de todos los números ingresados.

const prompt = require('prompt-sync')();

// Declaro una variable para guardar la suma.
let suma = 0;

// Pido al usuario que ingrese el primer número.
let numero = parseInt(prompt("Ingresa un número (negativo para salir): "));

// Uso un bucle while para continuar mientras el número no sea negativo.
while (numero >= 0) {
    
    // Sumo el número a la variable suma.
    suma += numero;

    // Pido otro número al usuario.
    numero = parseInt(prompt("Ingresa otro número (negativo para salir): "));
}

// Muestro la suma total de los números ingresados.
console.log("La suma de todos los números ingresados es:", suma);
