// Ejercicio 2: Do While
// Escribe un programa que solicite al usuario ingresar una contraseña.
// Si la contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la correcta.
// La contraseña correcta es "1234".

const prompt = require('prompt-sync')();  

// Declaro la contraseña correcta
const contrasenaCorrecta = "1234";

// Inicializo la variable 'contrasena' 
let contrasena = "";

// Uso un bucle do while para pedir la contraseña
do {
    contrasena = prompt("Ingresa la contraseña: ");  
} while (contrasena !== contrasenaCorrecta); 

console.log("¡Contraseña correcta!");
