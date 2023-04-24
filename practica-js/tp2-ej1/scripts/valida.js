function valida_form(){
    //nombre
    let nombre = document.fvalida.nombre.value;

    if (document.fvalida.nombre.value.length==0){
        alert("Tiene que escribir su nombre")
        document.fvalida.nombre.focus()
        return 0;
    // Se soluciono el problema de validacion al agregar esta condicion al campo nombre
    }else if (!/^[a-zA-Z\s]*$/.test(nombre)){
        alert("El campo nombre solo acepta caracteres alfabéticos.")
        document.fvalida.nombre.focus()
        return 0;
    }

    //valido edad
    let edad = document.fvalida.edad.value

    if (edad==""){
        alert("Tiene que introducir un número entero en su edad.")
        document.fvalida.edad.focus()
        return 0;
    // Se soluciono el problema de valicacion al agregar esta condicion al campo edad
    }else if(!Number.isInteger(Number(edad))){
        alert("El campo de edad solo acepta numeros")
        document.fvalida.edad.focus()
        return 0;
    }else if (edad<18){
        alert("Debe ser mayor de 18 años.")
        document.fvalida.edad.focus()
        return 0;
    }

    //valido el interés
    if (document.fvalida.interes.selectedIndex==0){
        alert("Debe seleccionar un motivo de su contacto.")
        document.fvalida.interes.focus()
        return 0;
    }

    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
    }