// Ejercicio 7: Libros
// Definir dos objetos libro1 y libro2 con título, autor y año de publicación
// Crear una función mostrarLibro para mostrar la información de los libros.

let libro1 = {
    titulo: "Rayuela",
    autor: "Julio Cortázar",
    anioPublicacion: 1963
};

let libro2 = {
    titulo: "Cuentos completos",
    autor: "Edgar Allan Poe",
    anioPublicacion: 1845
};

const mostrarLibro = (libros) => {
    for (let libro of libros) {
        console.log(`El libro ${libro.titulo}, escrito por ${libro.autor}, se publicó en ${libro.anioPublicacion}.`);
    }
};

let biblioteca = [libro1, libro2]; // Arreglo con los libros

mostrarLibro(biblioteca);
