// Ejercicio 8: Funcion backEnd()
// Crea la función backEnd() que recibirá 2 números como parámetros y mostrará los números del 1 al 100
// con los criterios establecidos.

function backEnd(num1, num2) {
    let resultado = [];

    for (let i = 1; i <= 100; i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            resultado.push("Back End");
        } else if (i % num1 === 0) {
            resultado.push("Back");
        } else if (i % num2 === 0) {
            resultado.push("End");
        } else {
            resultado.push(i);
        }
    }

    return resultado;
}


// Llamar a la función con los números 3 y 5 como parámetros
console.log(backEnd(3, 5));
