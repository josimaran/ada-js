function ultimaAparicionModeloAuto(modelo) {
    let modeloEncontrado = -1;

    for (let i = 0; i < modelosAutos.length; i++) {
        if (modelosAutos[i] === modelo) {
            modeloEncontrado = i + 1; // Guardamos la posición (índice + 1)
        }
    }

    if (modeloEncontrado !== -1) {
        console.log("El modelo " + modelo + " se encuentra en la posición " + modeloEncontrado);
    } else {
        console.log("El modelo " + modelo + " no está presente.");
    }
}

const modelosAutos = ["Toyota", "Honda", "Ford", "Toyota", "Chevrolet", "Honda", "Ford"];

// Ejemplos de uso
ultimaAparicionModeloAuto("Toyota");
ultimaAparicionModeloAuto("Honda");
ultimaAparicionModeloAuto("Chevrolet");
ultimaAparicionModeloAuto("BMW");
