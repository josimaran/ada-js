// Ejercicio 2: Filtra los números pares de una lista
let numeros = [1, 2, 3, 4, 5, 6];
let numerosPares = numeros.filter(function(num) {
  return num % 2 === 0; 
});
console.log(numerosPares); 