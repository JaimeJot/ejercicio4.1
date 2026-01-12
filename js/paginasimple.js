window.onload = function() {
    const texto = document.getElementById("texto");
    const saludos = document.getElementsByName("saludo");
    let nombre = document.getElementById("nombre");
    let boton = document.getElementById("boton");
    Array.from(saludos).forEach(saludo => {
        saludo.addEventListener("click", function() {
            texto.textContent = saludo.value;
        });
    });
    boton.onclick = mostrarnombre;
    function mostrarnombre(){
        texto.textContent = "Hola " + nombre.value;
    }
}

