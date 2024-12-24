const prompt = require('prompt-sync')();

//Ejercicio 4: ¿Es par o impar? 

// Pido al usuario un número
let numero = parseInt(prompt("Ingresa un número:"));

// Uso el if ternario para determinar si es par o impar
let resultado = (numero % 2 === 0) ? "El número es par." : "El número es impar.";

console.log(resultado); 
