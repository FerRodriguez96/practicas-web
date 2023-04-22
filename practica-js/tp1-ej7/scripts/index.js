var fecha = new Date();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var num_dia = fecha.getDay();
var anio = fecha.getYear();
var hoy = new Array("Dom","Lun", "Mar","Mie","Jue","Vie","sab");

var nom_mes = new Array(
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
var tot_dias = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

if (anio%4 ==0){ 
    tot_dias[1] = 29 
};

var mes_de = tot_dias[mes];

var comienza = num_dia - dia%7 + 1;

if (comienza < 0){ 
    comienza=7 
};

var semanas = parseInt((comienza + mes_de)/7);

if ((comienza+mes_de)%7 != 0){
    semanas++
};

// Se añadio el identificador var a las variables no_day y day
var no_day=0;
var day=1;

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
                document.write("<td>"+day+"</td>");
                day++;
            }
        }
    document.write("</tr>");
}

document.write("</table>");