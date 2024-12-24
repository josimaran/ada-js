// Ejercicio 4: Ciclo For - Array
// Creamos un programa para registrar las notas de varios estudiantes usando arrays

const prompt = require('prompt-sync')();

// Creamos un array vacío para almacenar las notas
let notas = [];

// Pedimos al usuario cuántos estudiantes ingresarán sus notas
let cantidadEstudiantes = parseInt(prompt("¿Cuántos estudiantes hay? "));

console.log("Ingresa las notas de los estudiantes:");

// Usamos un ciclo for para pedir las notas una por una
for (let i = 0; i < cantidadEstudiantes; i++) {
    let nota = parseFloat(prompt(`Nota del estudiante ${i + 1}: `));
    notas.push(nota);  // Guardamos la nota en el array
}

// Mostramos todas las notas ingresadas
console.log("\nNotas ingresadas:");
for (let i = 0; i < notas.length; i++) {
    console.log(`Estudiante ${i + 1}: ${notas[i]}`);
}
