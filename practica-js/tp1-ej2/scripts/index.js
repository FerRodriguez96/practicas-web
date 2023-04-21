const dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];

const boton = document.querySelector(".mostrar");

let tablaVisible = false;

boton.addEventListener("click", DiasSemana);

function DiasSemana(){
    if (!tablaVisible){
        const tabla = document.createElement("table");

        const filaTitulo = document.createElement("tr");
        const celdaTitulo = document.createElement("th");

        const textoTitulo = document.createTextNode("Días de la semana");
        celdaTitulo.appendChild(textoTitulo);
        filaTitulo.appendChild(celdaTitulo);
        tabla.appendChild(filaTitulo);

        for (let i = 0; i < 7; i++) {

            const fila = document.createElement("tr");
            const celda = document.createElement("td");
        
            const textoCelda = document.createTextNode(dias[i]);
            celda.appendChild(textoCelda);
            
            fila.appendChild(celda);
            tabla.appendChild(fila);
        }
    


    document.body.appendChild(tabla);
    tablaVisible = true
}

}