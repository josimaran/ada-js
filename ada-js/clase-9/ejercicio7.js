const prompt = require('prompt-sync')();
// Pedimos al usuario que ingrese su peso en kilogramos
let pesoEnKilogramos = parseFloat(prompt("Ingresa tu peso en kilogramos y descubre cuanto pesas en libras: "));

// Convertimos el peso de kilogramos a libras
let pesoEnLibras = pesoEnKilogramos * 2.20462;

// Mostramos el resultado
console.log("Excelente, tu peso en libras es: " + pesoEnLibras.toFixed(2));
