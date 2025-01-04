function iniciarSesion() {
    alert("Inicio de Sesión Exitoso");
}

function cambiarTitulo(elemento) {
    let titulo = elemento.innerText;
    let elementoH1 = document.querySelector("#tituloLibro");

    elementoH1.innerText = titulo;
}

function cambiarEstado(boton) {
    boton.style.backgroundColor = "#990000";
    boton.innerText = "No Disponible";
}