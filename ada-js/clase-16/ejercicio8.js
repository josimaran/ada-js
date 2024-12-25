// Ejercicio 8: Busca un nombre específico
let nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];
let nombreEncontrado = nombres.find(function(nombre) {
  return nombre === 'Laura'; // Busca el nombre 'Laura'
});
console.log(nombreEncontrado); // Resultado: 'Laura'
