// Ejercicio 6: Agrega un prefijo y un sufijo a cada palabra
let palabras = ['hola', 'universo', 'javascript'];
let exclamaciones = palabras.map(function(palabra) {
  return `¡${palabra}!`; // Agrega prefijos y sufijos a cada palabra
});
console.log(exclamaciones); // Resultado: ['¡hola!', '¡universo!', '¡javascript!']
