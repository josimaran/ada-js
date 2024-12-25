//Ejercicio 8 Convertir grados a fahrenheit
const prompt = require('prompt-sync')(); 

// Función expresada para convertir Celsius a Fahrenheit
const convertirCelsiusAFahrenheit = function(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32; // Fórmula de conversión
    return fahrenheit;
};

// Pedir al usuario que ingrese la temperatura en grados Celsius
let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));

// Mostrar el resultado de la conversión
console.log("La temperatura en Fahrenheit es: " + convertirCelsiusAFahrenheit(celsius));
