// Función para abrir el modal "Crear Publicación"
function abrirModalCrearPublicacion() {
    document.getElementById("modalCrearPublicacion").style.display = "block";
}

// Función para cerrar el modal "Crear Publicación"
function cerrarModalCrearPublicacion() {
    document.getElementById("modalCrearPublicacion").style.display = "none";
}

// Función para publicar desde el modal
function publicarModal() {
    var textoPublicacion = document.getElementById("nuevaPublicacionModal").value;
    if (textoPublicacion.trim() === "") {
        alert("Por favor, escribe algo antes de publicar.");
        return;
    }

    // Agrega la lógica para publicar la entrada desde el modal.
    // Por ejemplo, puedes crear un nuevo elemento y agregarlo al muro.

    // Luego, cierra el modal.
    cerrarModalCrearPublicacion();
}
