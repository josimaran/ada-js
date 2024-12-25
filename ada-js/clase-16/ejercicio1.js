// Ejercicio 1: Crea un nuevo array con los cuadrados de los números

let numeros = [2, 4, 6, 8];
let cuadrados = numeros.map(function(num) {
  return num ** 2; // Calcula el cuadrado de cada número
});
console.log(cuadrados); // Resultado: [4, 16, 36, 64]
