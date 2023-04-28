<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/practica-php/tp-ej3/css/styles.css">
    <title>Conversor</title>
</head>
<body>
<?php

if (isset($_POST['numero'])) {

	$numero = $_POST['numero'];

	$formato = new NumberFormatter('es', NumberFormatter::SPELLOUT);

	$numero_en_letras = $formato->format($numero);

	echo "El número $numero en letras es: $numero_en_letras";
}
?>
</body>
</html>