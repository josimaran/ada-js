// Ejercicio 4: Calcular descuento por cantidad
// Solicita al usuario la cantidad de productos comprados y el precio unitario. 
// Usa una función flecha para calcular el total con descuento según la cantidad.

const prompt = require('prompt-sync')();

const calcularTotalConDescuento = (cantidad, precio) => {
    let descuento = 0;
    if (cantidad > 10) descuento = 0.15;
    else if (cantidad > 5) descuento = 0.10;
    return (cantidad * precio) * (1 - descuento);
};

let cantidad = parseInt(prompt("¿Cuántos productos compraste? "));
let precio = parseFloat(prompt("¿Cuánto cuesta cada producto? "));
let total = calcularTotalConDescuento(cantidad, precio);

console.log(`El total a pagar con descuento es: ${total}`);
