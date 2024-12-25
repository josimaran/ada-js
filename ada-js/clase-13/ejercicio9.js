//Ejercicio 9: Contar hasta un numero
const prompt = require('prompt-sync')(); 

// Función declarada para contar hasta un número
function contarHasta(numero) {
    for (let i = 1; i <= numero; i++) {
        console.log(i); // Imprime los números desde 1 hasta el número ingresado
    }
}

// Pedir al usuario que ingrese el número hasta el cual contar
let numero = parseInt(prompt("Ingresa un número para contar hasta él: "));

// Llamar a la función con el número ingresado
contarHasta(numero);
