const prompt = require('prompt-sync')();
//Ejercicio 3: ¿Sabes contar? 

// Pido al usuario un número positivo
let numero = parseInt(prompt("Ingresa un número positivo:"));

// Verifico que el número sea positivo
if (numero > 0) {
// Uso un ciclo for para contar desde 1 hasta el número ingresado
for (let i = 1; i <= numero; i++) {

// Imprimo cada número
console.log(i); 
  }
} else {
  console.log("Por favor, ingresa un número positivo.");
}
