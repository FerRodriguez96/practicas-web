const array = ["h","ho","hol","hola"]

let medida = 4;

for (const element of array) {
    const titulo = document.createElement("h" + medida);
    const texto = document.createTextNode(element);

    titulo.appendChild(texto);
    document.body.appendChild(titulo);
    
    medida--;
}