let tabla = document.getElementById("tabla");

let contenidoTabla = "";

for (let i = 1; i <= 3; i++) {
  contenidoTabla += "<tr>";
  for (let j = 1; j <= 5; j++) {
    contenidoTabla += "<td>" + i + "," + j + "</td>";
  }
  contenidoTabla += "</tr>";
}

tabla.innerHTML = contenidoTabla;