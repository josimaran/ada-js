// Ejercicio 3: Agregar y eliminar a la fila de mascotas

// Lista de mascotas en la clínica veterinaria
let mascotas = ["Perro", "Gato", "Conejo"];

// Agregamos "Hámster" 
mascotas.unshift("Hámster");

// Atendemos a la primera mascota 
let mascotaAtendida = mascotas.shift();

// Mostramos la mascota atendida y la lista actualizada
console.log("Mascota atendida:", mascotaAtendida);
console.log("Fila actualizada:", mascotas);

