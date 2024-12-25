// Creamos el objeto literal:
let estudiante = {
    nombre: "Carlos",
    edad: 20,
    notas: [8, 7, 9, 6, 10]
};

// Función para procesar al estudiante:
function procesarEstudiante(estudiante) {
    // 1. Agregar una nueva nota al array de notas.
    estudiante.notas.push(7);

    // 2. Eliminar la primera nota del array.
    estudiante.notas.shift();

    // 3. Calcular el promedio de las notas restantes.
    let suma = estudiante.notas.reduce((acc, nota) => acc + nota, 0);
    let promedio = suma / estudiante.notas.length;

    // 4. Convertir el nombre del estudiante a mayúsculas.
    let nombreMayusculas = estudiante.nombre.toUpperCase();

    // 5. Devolver un objeto con el nombre en mayúsculas y el promedio de las notas.
    return {
        nombre: nombreMayusculas,
        promedio: promedio
    };
}

// Llamada a la función y mostrar el resultado
let resultado = procesarEstudiante(estudiante);
console.log("Estudiante procesado:", resultado);
