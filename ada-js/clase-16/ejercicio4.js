// Ejercicio 4: Calcula la suma total de los números
let numeros = [1, 2, 3, 4];
let sumaTotal = numeros.reduce(function(total, num) {
  return total + num; // Suma todos los números
}, 0);

console.log("Suma total:", sumaTotal); // Imprime el total
