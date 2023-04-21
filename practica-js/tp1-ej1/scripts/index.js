const tabla = document.getElementById("tabla1");

for (let i = 1; i <= 10; i++) {
  // Creamos una nueva fila
  const fila = document.createElement("tr");
  const celda = document.createElement("td");

  const textoCelda = document.createTextNode(i);
  celda.appendChild(textoCelda);
  
  fila.appendChild(celda);
  tabla.appendChild(fila);
}
