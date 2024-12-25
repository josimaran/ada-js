const prompt = require('prompt-sync')(); 

// Variable global
let horaActual = parseInt(prompt("Ingrese la hora actual (en formato 24 horas): ")); 

// Función declarada que imprime el saludo según la hora
function mostrarSaludo() {
    if (horaActual < 12) {
        console.log("Buenos días");
    } else if (horaActual < 18) {
        console.log("Buenas tardes");
    } else {
        console.log("Buenas noches");
    }
}

// Llamar a la función
mostrarSaludo();
