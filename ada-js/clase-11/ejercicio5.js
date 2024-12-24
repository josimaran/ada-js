// Ejercicio 5: Encuentra los números pares entre dos valores

const prompt = require('prompt-sync')();

//Solicito al usuario que ingrese  numeros
const inicio = parseInt(prompt("Ingresa el número inicial: "));
const fin = parseInt(prompt("Ingresa el número final: "));

if (inicio > fin) {
    console.log("El número inicial debe ser menor o igual al número final.");
} else {
    for (let numero = inicio; numero <= fin; numero++) {
        if (numero % 2 === 0) {
            console.log(numero);
        }
    }
}
