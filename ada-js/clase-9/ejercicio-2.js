const prompt = require('prompt-sync')();

// Definir el rango mínimo y máximo
const RANGO_MINIMO = 10;
const RANGO_MAXIMO = 20;

// Solicitar al usuario que ingrese un número
let numero = parseFloat(prompt("Por favor ingresa un número: "));

// Verificar si el número está dentro del rango
if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
  console.log("El número está dentro del rango.");
} else {
  console.log("El número está fuera del rango.");
}
