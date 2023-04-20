import { Contador } from "./contador";

const j1Nombre = "Nosotros";
const j2Nombre = "Ellos";
const modal = document.querySelector("dialog");

const p1 = new Contador(
    j1Nombre,
    document.getElementById("jugador1Container")
);

const p2 = new Contador(
    j2Nombre,
    document.getElementById("jugador2Container")
);

document.querySelector("#reset").addEventListener("click", () => modal.showModal());
document.querySelector("#cancelar").addEventListener("click", () => modal.close());

document.querySelector("#reset").addEventListener("click", () =>{
    p1.reset();
    p2.reset();
    modal.close();
});


