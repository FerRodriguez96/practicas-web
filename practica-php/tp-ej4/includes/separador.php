<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../css/styles.css">
    <title>Separador</title>
</head>
<body>
<?php
if (isset($_POST['numero'])) {
	$numero = $_POST['numero'];
    // Se convierte el numero ingresado en un array
    $digitos = str_split($numero);
    // Se obtienen la cantidad de digitos que tiene el array
    $cantidadDigitos = count($digitos);

    echo "El número $numero separado en unidades es: \n ";
    // Se recorre el array
    for ($i = 0; $i < $cantidadDigitos; $i++) {
        // Se calcula el exponente de 10 correspondiente a la posicion del array
        $exponente = $cantidadDigitos - $i - 1;
        // El valor es igual a la posicion del array por 10 elevado al exponente anterior
        $valor = $digitos[$i] * pow(10, $exponente);  
        // Se imprime el valor
        echo $valor . " ";
        // Se agrega un esparador
        if ($i < $cantidadDigitos - 1) {
            echo "- ";
        }
    }
}
?>
</body>
</html>