<?php
// Inicializamos la variable $nombre como vacía
$nombre = "";

// Verificamos si se envió el formulario
if (isset($_POST['nombre'])) {
    $nombre = htmlspecialchars($_POST['nombre']); // Evita inyecciones de HTML/JS
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina de Jaime Alonso</title>
    <link rel="stylesheet" href="css/paginasimple.css">
</head>
<body>
    <h1>Esta es la página de Jaime Alonso</h1>
    <img src="imagenes/shrek.jpg" alt="Shrek">

    <!-- Formulario para enviar el nombre -->
    <form method="post">
        <p id="texto">
            <?php
            if ($nombre) {
                echo "Hola " . $nombre;
            } else {
                echo "Hola, toca un botón o escribe tu nombre";
            }
            ?>
        </p>

        <input type="text" name="nombre" value="<?php echo $nombre; ?>">
        <input type="submit" value="Ver nombre">
    </form>
</body>
</html>
