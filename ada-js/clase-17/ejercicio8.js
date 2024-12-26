const lista = [1, 3, 5, 6, 9, 11];

// Función de búsqueda binaria
function busquedaBinaria(array, objetivo) {
    let inicio = 0;
    let fin = array.length - 1;

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);

        // Si el elemento en el medio es el que estamos buscando, devolver su índice
        if (array[medio] === objetivo) {
            return medio;
        }
        // Si el valor en el medio es menor que el objetivo, buscar en la mitad derecha
        else if (array[medio] < objetivo) {
            inicio = medio + 1;
        }
        // Si el valor en el medio es mayor que el objetivo, buscar en la mitad izquierda
        else {
            fin = medio - 1;
        }
    }
    return -1; // Si el número no está en el array
}

// Preguntas
const numeros = [1, 5, 6, 9, 11];
numeros.forEach(num => {
    console.log(`La posición del número ${num} es: ${busquedaBinaria(lista, num)}`);
});
