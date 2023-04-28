<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/practica-php/tp-ej5/css/styles.css">
    <title>Conversor Binario a Decimal-Hexadecimal</title>
</head>
<body>
    <?php
        if (isset($_POST['numero'])) {

            $binario = $_POST['numero'];

            if (!preg_match('/^[01]+$/', $binario)) {
                echo "El número ingresado no es válido. Por favor, ingrese un número binario válido.";
            } else {
                // Se convierte el número binario a decimal
                $decimal = bindec($binario);

                // Se convierte el número binario a hexadecimal
                $hexadecimal = strtoupper(dechex($decimal));

                echo "<table>\n";
                echo "<tr><td>El número binario ingresado es:</td><td>" . $binario . "</td></tr>\n";
                echo "<tr><td>Su equivalente en decimal es:</td><td>" . $decimal . "</td></tr>\n";
                echo "<tr><td>Su equivalente en hexadecimal es:</td><td>" . $hexadecimal . "</td></tr>\n";
                echo "</table>";
            }
        }
    ?>
</body>
</html>