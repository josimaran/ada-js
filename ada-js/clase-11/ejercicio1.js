const prompt = require('prompt-sync')();

//Ejercicio 1: ¿Positivo, negativo o cero?

// Pido al usuario que ingrese un número
let numero = parseFloat(prompt("Ingresa un número: "));

// Uso el if ternario para verificar si es positivo, negativo o cero
let mensaje = numero > 0 ? "El número es positivo." :
             numero < 0 ? "El número es negativo." :
             "El número es cero.";

// Muestra el mensaje
console.log(mensaje);
