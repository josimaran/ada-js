const prompt = require('prompt-sync')();
// Pedir al usuario las longitudes de los tres lados

let lado1 = parseFloat(prompt("Ingresa el primer lado del triángulo: "));
let lado2 = parseFloat(prompt("Ingresa el segundo lado del triángulo: "));
let lado3 = parseFloat(prompt("Ingresa el tercer lado del triángulo: "));

// Verificar el tipo de triángulo
if (lado1 === lado2 && lado2 === lado3) {
  console.log("El triángulo es equilátero.");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
  console.log("El triángulo es isósceles.");
} else {
  console.log("El triángulo es escaleno.");
}
