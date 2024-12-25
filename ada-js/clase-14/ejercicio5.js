// Ejercicio 5: Verificar origen del auto
// Solicita al usuario ingresar la marca de un auto y utiliza una función flecha
// para verificar y mostrar si el auto es de origen nacional o importado.

const prompt = require('prompt-sync')();

const verificarOrigenAuto = (marca) => {
    if (marca === 'Chevrolet' || marca === 'Ford' || marca === 'Fiat') {
        return `${marca} es de origen nacional`;
    } else {
        return `${marca} es de origen importado`;
    }
};

let marcaAuto = prompt("Ingrese la marca del auto: ");
console.log(verificarOrigenAuto(marcaAuto));




