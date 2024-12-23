const prompt = require('prompt-sync')();
//Ejercicio 3 – Constantes / Validación de Edad

const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

// Pido al usuario que ingrese su edad 
let edad = prompt('Por favor, ingresa tu edad: ');

// Convierto la entrada a un número entero
edad = parseInt(edad);

// Compruebo si la edad es menor que 18 o mayor que 99
if (edad < 18) {
    console.log("Tu edad está fuera del rango permitido. Eres menor de 18.");
}

else if (edad > 99) {
    console.log("Tu edad está fuera del rango permitido. Eres mayor de 99.");
}

else {
    console.log("Tu edad está dentro del rango permitido.");
}
