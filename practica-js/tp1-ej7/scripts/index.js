// Se reemplazo el identificador "var" con el identificador let
let fecha = new Date();
let mes = fecha.getMonth();
let dia = fecha.getDate();
let num_dia = fecha.getDay();
let anio = fecha.getYear();
let hoy = new Array("Dom","Lun", "Mar","Mie","Jue","Vie","sab");

// Se define en un array los nombres de los meses
let nom_mes = new Array(
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
);

// Se define un array con el total de dias de cada mes del año y se reemplaza el identificador var
let tot_dias = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);


// Si el año es bisiesto, la posicion 1, correspondiente al mes de febrero pasa a tener 29 dias
if (anio%4 ==0){ 
    tot_dias[1] = 29 
};

// Se reemplazaron los identificadores var
let mes_de = tot_dias[mes];

let comienza = num_dia - dia%7 + 1;

if (comienza < 0){ 
    comienza=7 
};

let semanas = parseInt((comienza + mes_de)/7);

if ((comienza+mes_de)%7 != 0){
    semanas++
};

// Se añadio el identificador let a las variables no_day y day
let no_day=0;
let day=1;

document.write("<table border=2>");
document.write("<tr>");

// Se añadio el identificador let al indice i
for (let i=0; i<7; i++){
    document.write("<td>"+ hoy[i] + "</td>")
}

document.write("</tr>");

//Se añadio el identificador let a los indices j e i
for (let i=semanas; i>0; i--){ 
    document.write("<tr>");
        for (let j=7; j>0; j--){
            if (no_day<comienza || day>mes_de) {
            document.write("<td>--</td>");
            no_day++;
            }
            else{
                // Se resalta el dia actual
                if (day === dia){
                    document.write("<td class='diaActual'>"+day+"</td>");
                // Se resaltan los domingos
                }else if (j === 7){
                    document.write("<td class='domingo'>"+day+"</td>");
                // Si no es ninguno de los anteriores, el dia se muestra de manera normal
                }else{
                    document.write("<td>"+day+"</td>");
                }
                day++;
            }
        }
    document.write("</tr>");
}

document.write("</table>");