// Ejercicio 1: Calcular el precio final con IVA
// Solicita al usuario el precio de un producto y el porcentaje de IVA.
// Usa una función flecha para calcular el precio final.

const prompt = require('prompt-sync')(); 

// Función flecha para calcular el precio con IVA
const calcularPrecioIva = (precio, iva) => precio + (precio * iva / 100);

// Solicitar al usuario el precio del producto y el porcentaje de IVA
let precio = parseFloat(prompt("Ingresa el precio del producto: "));
let iva = parseFloat(prompt("Ingrese el porcentaje de IVA (solo número): "));

// Calcular el precio final con IVA
let precioFinal = calcularPrecioIva(precio, iva);

// Mostrar el resultado
console.log(`El precio final con IVA es: ${precioFinal}`);
