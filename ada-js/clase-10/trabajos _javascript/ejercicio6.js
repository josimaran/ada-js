const prompt = require('prompt-sync')();

// 1. Declaramos dos variables y les asignamos valores numéricos
let numero1 = 12;
let numero2 = 15;

// 2. Usamos operadores de comparación y lógico para verificar si ambos números son mayores que 10
let resultado = numero1 > 10 && numero2 > 10;  

// 3. Mostramos el resultado en la consola
console.log("¿Ambos números son mayores que 10?", resultado);
