const prompt = require ('prompt sync')();

//Solicitud de ingreso de numero
let numero = parseFloat (prompt ("Por favor ingresa un numero"));

//Calculo el doble
let doble = numero * 2;

//Muestro el resultado de la consola
console.log ("El doble de tu numero es: " + doble);
