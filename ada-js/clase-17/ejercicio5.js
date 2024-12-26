// Array de frases iniciales
let frases = [
    "El clima es MALO hoy",
    "Este libro es muy MALO",
    "El servicio aquí es MALO"
];

// Función para procesar las frases
function procesarFrases(frases) {
    // Usamos el método map() para transformar cada frase
    let frasesModificadas = frases.map(function(frase) {
        // 1. Convertir la frase a minúsculas
        let fraseMinusculas = frase.toLowerCase();

        // 2. Dividir la frase en palabras
        let palabras = fraseMinusculas.split(" ");

        // 3. Reemplazar las palabras "malo" por "bueno"
        for (let i = 0; i < palabras.length; i++) {
            if (palabras[i] === "malo") {
                palabras[i] = "bueno";
            }
        }

        // 4. Combinar las palabras en una nueva cadena separada por espacios
        let fraseModificada = palabras.join(" ");

        // Retornar la frase modificada
        return fraseModificada;
    });

    // 5. Devolver el nuevo array con las frases modificadas
    return frasesModificadas;
}

// Llamada a la función y mostrar el resultado
let resultado = procesarFrases(frases);
console.log("Frases modificadas:", resultado);
