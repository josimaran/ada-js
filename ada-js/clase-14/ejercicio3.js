// Ejercicio 3: Clasificación de edades
// Solicita al usuario una edad y usa una función flecha para 
// clasificarla en niño, adolescente, adulto o adulto mayor.

const prompt = require('prompt-sync')();

// Función flecha para clasificar la edad
const clasificarEdad = (edad) => {
    if (edad < 13) return "Niño";
    else if (edad < 18) return "Adolescente";
    else if (edad < 65) return "Adulto";
    else return "Adulto mayor";
};

// Solicitar la edad al usuario
let edad = parseInt(prompt("Ingresa una edad:"));

// Clasificar la edad
let clasificacion = clasificarEdad(edad);

// Mostrar el resultado
console.log(`La clasificación de la edad es: ${clasificacion}`);
