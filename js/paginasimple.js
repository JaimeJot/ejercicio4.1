window.onload = function() {
    const texto = document.getElementById("texto");
    let boton = document.getElementById("boton");

    boton.onclick = mostrarnombre;
    function mostrarnombre(){
        const nombre = document.getElementById("nombre").value;
        const url = "http://localhost:8080/api/saludos?nombre=" + encodeURIComponent(nombre);
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if(data.estado === "success") {
                    texto.textContent = data.mensaje;
                } else {
                    texto.textContent = "Error: " + data.mensaje;
                }
            })
            .catch(error => {
                console.error("Error en la petición:", error);
                texto.textContent = "Error al obtener el saludo";
            });
    }
}

