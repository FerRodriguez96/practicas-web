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
    $numero = intval($_POST['numero']);
    $numeros_primos = array();
    $i = $numero + 1;
    while (count($numeros_primos) < 16) {
        if (es_primo($i)) {
            $numeros_primos[] = $i;
        }
        $i++;
    }
} else {
    $numero = "";
    $numeros_primos = array();
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Numeros Primos</title>
</head>
<body>
	<form method="post">
		<label for="numero">Ingrese un número para obtener sus numeros primeros:</label>
		<input type="number" name="numero" value="<?php echo $numero; ?>">
		<input type="submit" value="Mostrar">
	</form>
	<?php if (!empty($numeros_primos)): ?>
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