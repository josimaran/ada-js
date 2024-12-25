// Ejercicio 7: Filtra nombres que empiecen con la letra 'A'

let nombres = ['Ana', 'Luis', 'Andrea', 'María'];
let nombresConA = nombres.filter(function(nombre) {
  return nombre.startsWith('A'); // Filtra los nombres que empiezan con 'A'
});
console.log(nombresConA); // Resultado: ['Ana', 'Andrea']
