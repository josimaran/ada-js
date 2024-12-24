const prompt = require('prompt-sync')();
// Ejercicio 2: Semáforo inteligente 
// Pido al usuario que ingrese el color del semáforo
let color = prompt("Ingresa el color del semáforo (rojo, amarillo, verde):").toLowerCase();

// Utilizo un switch para verificar el color y mostrar el mensaje correspondiente
switch (color) {
    case "rojo":
        console.log("Alto, no puedes avanzar.");
        break;
    case "amarillo":
        console.log("Precaución, prepárate para avanzar.");
        break;
    case "verde":
        console.log("Avanza con seguridad.");
        break;
    default:
        console.log("Color no reconocido, ingresa rojo, amarillo o verde.");
        break;
}
