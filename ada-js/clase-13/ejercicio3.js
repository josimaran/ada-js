// Título: Declaración de variables global y local con uso de funciones

// Declaración de la variable global
let saludoGlobal = "Hola desde el scope global";

// Función declarada para mostrar mensajes
function mostrarMensaje() {
    // Declaración de la variable local
    let saludoLocal = "Hola desde el scope local";

    // Imprimir los mensajes 
    console.log(saludoGlobal); 
    console.log(saludoLocal);  
}

// resultado
mostrarMensaje(); 
