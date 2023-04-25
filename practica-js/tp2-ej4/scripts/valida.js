function valida_num(){

    let numero1 = parseInt(document.form_1.numero1.value);
    let numero2 = parseInt(document.form_1.numero2.value);

    if (numero1 && numero2 ==""){
        alert("Tiene que introducir un número")
        document.form_1.numero1.focus()
        return 0;
    }else if(!Number.isInteger(Number(numero1,numero2))){
        alert("El campo solo acepta numeros")
        document.form_1.numero1.focus()
        return 0;
    }

    if (numero1 % numero2 === 0){
        alert("La division de "+ numero1 + " y " + numero2 + " es exacta")
        document.form_1.numero1.focus()
    }else{
        alert("La division de " + numero1 + " y " + numero2 + " no es exacta")
        document.form_1.numero1.focus()
    }

    if (numero1 % 2 === 0){
        alert("El numero " + numero1 + " es par")
        document.form_1.numero1.focus()
        return 0;
    }else{
        alert("El numero " + numero1 + " es impar")
        document.form_1.numero1.focus()
        return 0;
    }

}