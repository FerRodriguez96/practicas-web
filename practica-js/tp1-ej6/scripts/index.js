let imagenes = [
    "flores/azalea.jpg",
    "flores/clavel.jpg",
    "flores/gerbera.jpg",
    "flores/girasol.jpg",
    "flores/margarita.jpg",
    "flores/rosa.jpg"
]

let alts = [
    "Azalea",
    "Clavel",
    "Gerbera",
    "Girasol",
    "Margarita",
    "Rosa"
]

let album = document.getElementById("album");
    for (let i = 0; i < imagenes.length; i++) {
        let imagen = document.createElement("img");
        imagen.src = imagenes[i];
        imagen.alt= alts[i];
        album.appendChild(imagen);
    }