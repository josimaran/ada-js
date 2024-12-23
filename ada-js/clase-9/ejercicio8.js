const prompt = require('prompt-sync')();

// Defino la constante PI 
const PI = 3.14159;

// Pido al usuario que ingrese el radio del círculo
let radio = parseFloat(prompt("Ingresa el radio del círculo: "));

// Calculo el área y el perímetro del círculo
let area = PI * radio * radio;
let perimetro = 2 * PI * radio;

// Muestro los resultados
console.log("El área del círculo es: " + area);
console.log("El perímetro del círculo es: " + perimetro);
