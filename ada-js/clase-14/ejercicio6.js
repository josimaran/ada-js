// Ejercicio 6: El deportista
// Definir un objeto "deportista" con nombre, energía y experiencia.
// Crear una función "entrenarHoras" que ajuste la energía y experiencia.

let deportista = {
    nombre: "Aimar",
    energia: 100,
    experiencia: 10,
    entrenarHoras: (horas) => {
        deportista.energia -= horas * 5;
        deportista.experiencia += horas * 2;
    }
};

// Mostrar estado inicial
console.log("Energía inicial: " + deportista.energia);
console.log("Experiencia inicial: " + deportista.experiencia);

// Entrenar durante 5 horas
deportista.entrenarHoras(5);

// Mostrar estado después del entrenamiento
console.log("Energía después del entrenamiento: " + deportista.energia);
console.log("Experiencia después del entrenamiento: " + deportista.experiencia);
