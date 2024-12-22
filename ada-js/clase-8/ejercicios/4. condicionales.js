const prompt = require('prompt-sync')();
// Ejercicio condicionales
let nota = 95;

if (nota < 70) {
    console.log("Reprobado");
} else if (nota >= 70 && nota <= 100) {
    console.log("Aprobado");
} else {
    console.log("Calificación perfecta");
}



