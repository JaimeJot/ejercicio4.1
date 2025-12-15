window.onload = function() {
    const texto = document.getElementById("texto");
    const saludos = document.getElementsByName("saludo");

    Array.from(saludos).forEach(saludo => {
        saludo.addEventListener("click", function() {
            texto.textContent = saludo.value;
        });
    });
}
