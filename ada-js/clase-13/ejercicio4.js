// Título: Función declarada para determinar si un número es par o impar
const prompt = require('prompt-sync')();
// Función declarada
function esPar(numero) {
    let resultado; // Variable local para guardar el resultado
    if (numero % 2 === 0) {
        resultado = "Es par";
    } else {
        resultado = "Es impar";
    }
    return resultado; // Devolver el resultado
}

// Ejemplos predefinidos
console.log(esPar(4)); // Resultado esperado: "Es par"
console.log(esPar(7)); // Resultado esperado: "Es impar"
