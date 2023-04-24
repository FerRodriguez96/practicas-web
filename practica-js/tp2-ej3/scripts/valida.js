function valida_num(){

    let numero1 = document.form_1.numero1.value;
    let numero2 = document.form_1.numero2.value;

    if (numero1 && numero2 ==""){
        alert("Tiene que introducir un número")
        document.form_1.numero1.focus()
        return 0;
    }else if(!Number.isInteger(Number(numero1,numero2))){
        alert("El campo solo acepta numeros")
        document.form_1.numero1.focus()
        return 0;
    }

    if (numero1 > numero2){
        alert(numero1 + " es mayor que " + numero2)
        document.form_1.numero1.focus()
        return 0;
    }else if (numero1 === numero2){
        alert(numero1 + " es igual que " + numero2)
        document.form_1.numero1.focus()
        return 0;
    }else if (numero1 < numero2){
        alert(numero1 + " es menor que " + numero2)
        document.form_1.numero1.focus()
        return 0;
    }
}