let fecha = new Date();

// Array de los nombres de los días de la semana y del mes
let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado","Domingo"];
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Obtener el día de la semana, el día del mes y el mes actual
let diaSemana = dias[fecha.getDay()];
let dia = fecha.getDate();
let mes = meses[fecha.getMonth()];
let anio = fecha.getFullYear();

// Mostrar la fecha con el formado requerido:
document.getElementById("fecha").innerHTML = "Hoy es " + diaSemana + " " + dia + " de " + mes + " de " + anio;

// Determinar si el año actual es bisiesto y mostrarlo en el documento
let esBisiesto = ((anio % 4 == 0) && (anio % 100 != 0)) || (anio % 400 == 0);
if (esBisiesto) {
    document.getElementById("bisiesto").innerHTML = anio + " es un año bisiesto.";
} else {
    document.getElementById("bisiesto").innerHTML = anio + " no es un año bisiesto.";
}