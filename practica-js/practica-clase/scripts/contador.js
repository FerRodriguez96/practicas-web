export class Contador {
    numero = 0;
    nombreEquipo;
    containerElement;

    constructor(nombreEquipo, containerElement, numeroInicial = 0){
        this.nombreEquipo = nombreEquipo;
        this.containerElement = this.containerElement;
        this.cuentaElement = this.containerElement.querySelector(".cuenta");
        this.containerElement.querySelector(".agregar").addEventListener("click", ()=> this.agregar());
        this.containerElement.querySelector(".restar").addEventListener("click", ()=> this.restar());
        this.containerElement.querySelector("h2").innerTest = this.nombreEquipo;
        this.numero= numeroInicial;
    }

    agregar(cantidad = 1){
        this.numero++
        console.log(this.numero);
        this.actualizarCuenta();
    }

    restar(cantidad = 1){
        this.numero = Math.max(0,this.numero - cantidad)
        console.log(this.numero);
        this.actualizarCuenta();
    }

    reset(){
        this.numero=0;
        console.log(this.numero);
        this.actualizarCuenta();
    }

    actualizarCuenta(){
        console.log(this.numero);

        const fosforosActuales = this.containerElement.querySelectorAll("img");

        if (fosforosActuales){
            fosforosActuales.forEach(fosforo => {
                this.containerElement.removeChild(fosforo);
            });
        }

        for (let i = 0; i < this.numero; i++) {
            const nuevoFosforo = document.createElement("img");
            nuevoFosforo.src = "imagenes/fosforo.png";
            this.cuentaElement.appendChild(nuevoFosforo);

            nuevoFosforo.classList.add("fosforo", "fosforo"+1%5+1)
        }


    }
}