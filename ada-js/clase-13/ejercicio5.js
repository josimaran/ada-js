const prompt = require('prompt-sync')();

// Título: Función expresada para concatenar nombres y apellidos
const concatenarNombres = function (nombre, apellido) {
    let nombreCompleto = nombre + " " + apellido; // Variable local
    return nombreCompleto; // Devuelve el nombre completo concatenado
};

// Solicitar nombres al usuario
let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");
console.log("Nombre completo: " + concatenarNombres(nombre, apellido)); // Mostrar el resultado
