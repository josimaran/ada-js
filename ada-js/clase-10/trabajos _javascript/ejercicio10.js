//Ejercicio 10 - Cálculo de Descuento:

const prompt = require('prompt-sync')();
// Pido el precio original
let precioOriginal = parseFloat(prompt("Ingresa el precio original del producto: "));

// Pido el porcentaje de descuento
let porcentajeDescuento = parseFloat(prompt("Ingresa el porcentaje de descuento: "));

// Calculo el monto del descuento
let montoDescuento = precioOriginal * (porcentajeDescuento / 100);

// Calculo el precio final
let precioFinal = precioOriginal - montoDescuento;

// Muestra el precio final
console.log("El precio final después del descuento es: " + precioFinal);
