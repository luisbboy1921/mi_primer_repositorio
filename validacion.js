function validarFormulario(evento){
    var nombre = document.getElementById("nombre").value;
    var fecha = document.getElementById("fecha_nacimiento").value;
    fecha_actual = new Date();
    diferencia = fecha_actual - new Date(fecha);

    let anos_pasados = diferencia / (1000 * 60 * 60 * 24 * 365);
    anos_pasados = Math.floor(anos_pasados);

    if (anos_pasados < 18) {
        alert("Debes ser mayor de edad para crear una cuenta");
        evento.preventDefault(); // Detener el envío si es menor de edad
        return false;
    }

    if (nombre === "") {
        alert("El campo nombre está vacío");
        evento.preventDefault(); // Detener el envío si el nombre está vacío
        return false;
    }

    // Si pasa todas las validaciones, el formulario se envía
    return true;
}
