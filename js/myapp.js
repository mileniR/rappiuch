const $usuario = $("#usuario");
const $password = $("#password");

/* CREDENCIALES VERDADERAS */
const credenciales = {
    usuario: "cat2024",
    pass: "nose"
};

$("#login").on("click", function(){
    const valueUsuario = $usuario.val();
    const valuePassword = $password.val();
    if (valueUsuario == credenciales.usuario) {
        if (valuePassword == credenciales.pass) {
            //localstorage
            location.href = "dashboard.html";
            localStorage.setItem("userLogueado", true);
        } else {
            Swal.fire({
                title: "ERROR",
                text: "Contraseña incorrecta",
                icon: "error"
            });
        }
    } else {
        Swal.fire({
            title: "ERROR",
            text: "Usuario no encontrado",
            icon: "error"
        });
    }
});
