//Ejercicio 6 Convertir a minutos
const prompt = require('prompt-sync')();

// Título: Función declarada para convertir horas a minutos
function convertirHorasAMinutos(horas) {
    let minutos = horas * 60; // Variable local
    return minutos; // Retorna el total en minutos
}

// Solicitar horas al usuario
let horas = parseFloat(prompt("Ingrese la cantidad de horas: "));
console.log("El equivalente en minutos es: " + convertirHorasAMinutos(horas) + "minutos");
