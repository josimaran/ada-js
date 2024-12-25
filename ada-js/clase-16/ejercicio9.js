// Ejercicio 9: Cuenta la cantidad total de letras en una lista de palabras
let palabras = ['sol', 'luna', 'estrella'];
let totalLetras = palabras.reduce(function(total, palabra) {
  return total + palabra.length; // Suma las longitudes de las palabras
}, 0);
console.log(totalLetras); // Resultado: 15
