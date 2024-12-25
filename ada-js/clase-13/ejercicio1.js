// Ejercicio 1: Área de un triángulo (función declarada)

// Definimos la función calcularAreaTriangulo con dos parámetros: base y altura
function calcularAreaTriangulo(base, altura) {
    // Calculamos el área usando la fórmula
    let area = (base * altura) / 2;
    // Devolvemos el área
    return area;
}

// Ejemplo de uso de la función con valores para la base y la altura
let base = 5;
let altura = 10;

// Llamamos a la función e imprimimos el resultado
let areaTriangulo = calcularAreaTriangulo(base, altura);
console.log("El área del triángulo es:", areaTriangulo);
