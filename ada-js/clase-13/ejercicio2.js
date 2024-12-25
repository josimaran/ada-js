// Título: Función expresada para encontrar el número mayor
const prompt = require('prompt-sync')();
// Declaración de la función expresada
const encontrarMayor = function (numero1, numero2) {
    // Evaluar cuál número es mayor
    if (numero1 > numero2) {
        return numero1; // Devuelve numero1 si es mayor
    } else {
        return numero2; // Devuelve numero2 si es mayor o igual
    }
};

// Invocación de la función
console.log(encontrarMayor(8, 15)); 
