<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabla de Multiplicar</title>
</head>
<body>
    <h2>Ingrese un numero entre 1 y 9 para obtener su tabla de multiplicar correspondiente</h2>
    <form method="post">
		<input type="number" name="numero" min="1" max="9">
		<input type="submit" name="submit" value="Mostrar tabla">
	</form>
    <?php 
    if (isset($_POST['submit'])) {
        $numero = $_POST['numero'];
        if ($numero >= 1 && $numero <= 9) {
            echo "<h2>Tabla de multiplicar del $numero:</h2>";
            echo "<table border=1>";
            for ($i = 1; $i <= 10; $i++) {
                $resultado = $numero * $i;
                echo "<tr><td>$numero x $i = </td><td>$resultado</td></tr>";
            }
            echo "</table>";
        } else {
            echo "<p>El número ingresado no está entre 1 y 9.</p>";
        }
    }
?>
</body>
</html>