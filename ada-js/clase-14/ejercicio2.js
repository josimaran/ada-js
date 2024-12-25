// Ejercicio 2: Calcular promedio de calificaciones
// Solicita al usuario cinco calificaciones y usa una función flecha para calcular el promedio.

const prompt = require('prompt-sync')();

// Función flecha para calcular el promedio
const calcularPromedio = (calificaciones) => {
    let suma = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    return suma / calificaciones.length;
};

// Solicitar las calificaciones al usuario
let calificaciones = [];
for (let i = 0; i < 5; i++) {
    calificaciones[i] = parseFloat(prompt(`Ingresa la calificación ${i + 1}:`));
}

// Calcular el promedio
let promedio = calcularPromedio(calificaciones);

// Mostrar el resultado
console.log(`El promedio de las calificaciones es: ${promedio}`);
