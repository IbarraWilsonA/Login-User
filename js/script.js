function mostrarOcultarContrasena() {
    const contrasenaInput = document.getElementById("contrasena");
    const icono = document.getElementById("mostrar-contrasena");

    if (contrasenaInput.type === "password") {
        contrasenaInput.type = "text";
        icono.textContent = "👁";
    } else {
        contrasenaInput.type = "password";
        icono.textContent = "🔒";
    }
}