<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/practica-php/tp-ej1/css/styles.css">
    <title>Tabla de Multiplicar</title>
</head>
<body>
    <?php 
        if (isset($_POST['submit'])) {
            $numero = $_POST['numero'];
                echo "<h2>Tabla de multiplicar del $numero:</h2>";
                echo "<table border=1>";
                for ($i = 1; $i <= 10; $i++) {
                    $resultado = $numero * $i;
                    echo "<tr><td>$numero x $i = </td><td>$resultado</td></tr>";
                }
                echo "</table>";
            } 
    ?>
</body>
</html>
