const prompt = require('prompt-sync')();

// Pido al usuario que ingrese nombre, edad y peso.
let nombre = prompt('Por favor, ingresa tu nombre: ');  
let edad = prompt('Por favor, ingresa tu edad: ');
let peso = prompt('Por favor, ingresa tu peso: ');

// Mostramos los valores de las variables utilizando template literals.
console.log(`Bienvenid@ ${nombre}! Hoy tienes ${edad} años y pesas ${peso}kg. Cambiaremos eso con nuestro plan de dieta y ejercicios!`);
