<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/practica-php/tp-ej2/css/styles.css">
    <title>Numeros Primos</title>
</head>
<body>
	<?php 
        if (!empty($numeros_primos)):
        $numero = $_POST['numero']; 
        echo "<h2>Numeros primos del $numero:</h2>";
    ?>
		<table>
			<?php for ($i = 0; $i < 4; $i++): ?>
				<tr>
					<?php for ($j = 0; $j < 4; $j++): ?>
						<td><?php echo $numeros_primos[$i * 4 + $j]; ?></td>
					<?php endfor; ?>
				</tr>
			<?php endfor; ?>
		</table>
	<?php endif; ?>
</body>
</html>

<?php

function es_primo($numero) {
    // Si el numero es menor a 2 entonces solo tiene 1 divisor, por lo tanto no tiene numeros primos
    if ($numero < 2) {
        return false;
    }
    // Se comprueba si el numero es divisible en el rango de numeros entre 2 y n-1
    for ($i = 2; $i < $numero; $i++) {
    // Si se encuentra algun divisor en ese rango, el numero no es primo
        if ($numero % $i == 0) {
            return false;
        }
    }
    //Si no se encuentran divisores en el rango, el numero es primo
    return true;
}

if (isset($_POST['numero'])) {
    // Se convierte el valor de numero en un entero
    $numero = intval($_POST['numero']);
    // Se crea el array de numeros primos
    $numeros_primos = array();
    // Se empiezan a buscar los numeros primos a partir del siguiente numero al ingresado
    $i = $numero + 1;
    // Mientras el tamaño del array sea menor a 16
    while (count($numeros_primos) < 16) {
    // Se buscan numeros primos y se los asigna al array
        if (es_primo($i)) {
            $numeros_primos[] = $i;
        }
        $i++;
    }
    // Si el valor ingresado es vacio, el array se cargara de manera vacia
        } else {
            $numero = "";
            $numeros_primos = array();
}

?>