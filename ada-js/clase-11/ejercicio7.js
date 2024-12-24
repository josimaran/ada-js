// Ejercicio 7: Calculadora simple
const prompt = require('prompt-sync')();

const numero1 = parseFloat(prompt("Ingresa el primer número: "));
const numero2 = parseFloat(prompt("Ingresa el segundo número: "));
const operacion = prompt("Ingresa la operación (suma, resta, multiplicación, división): ").toLowerCase();

switch (operacion) {
    case "suma":
        console.log("El resultado es: " + (numero1 + numero2));
        break;
    case "resta":
        console.log("El resultado es: " + (numero1 - numero2));
        break;
    case "multiplicación":
    case "multiplicacion": // Incluye ambas variantes con o sin tilde
        console.log("El resultado es: " + (numero1 * numero2));
        break;
    case "división":
    case "division": // Incluye ambas variantes con o sin tilde
        if (numero2 === 0) {
            console.log("Error: No se puede dividir entre cero.");
        } else {
            console.log("El resultado es: " + (numero1 / numero2));
        }
        break;
    default:
        console.log("Operación no válida. Ingresa suma, resta, multiplicación o división.");
}
