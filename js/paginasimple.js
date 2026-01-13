window.onload = function() {
    const texto = document.getElementById("texto");
    let boton = document.getElementById("boton");

    boton.onclick = mostrarnombre;
    function mostrarnombre(){
        texto.textContent = "Hola " + nombre.value;
    }
}

