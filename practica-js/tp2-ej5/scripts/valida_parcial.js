function valida_parcial(){
    //nombre
    let nombre = document.form_1.nombre.value;

    if (document.form_1.nombre.value.length==0){
        alert("Tiene que escribir su nombre")
        document.form_1.nombre.focus()
        return 0;
    }else if (!/^[a-zA-Z\s]*$/.test(nombre)){
        alert("El campo nombre solo acepta caracteres alfabéticos.")
        document.form_1.nombre.focus()
        return 0;
    }

    let nota1 = parseInt(document.form_1.nota1.value);
    let nota2 = parseInt(document.form_1.nota2.value);

    if (nota1 && nota2==""){
        alert("Tiene que introducir un número entero en su edad.")
        document.form_1.nombre.focus()
        return 0;
    }else if(!Number.isInteger(Number(nota1,nota2))){
        alert("El campo de edad solo acepta numeros")
        document.form_1.nombre.focus()
        return 0;
    }else if (nota1 > 10 || nota2 > 10){
        alert("La nota debe ser menor o igual a 10")
        document.form_1.nota1.focus()
        return 0;
    }

    if (nota1 >= 4 && nota2 >= 4 && nota1 <= 7 && nota2 <= 7) {
        alert("El alumno " + nombre + " regulariza");
        document.form_1.nombre.focus();
      } else if (nota1 >= 7 && nota2 >= 7) {
        alert("El alumno " + nombre + " promociona");
        document.form_1.nombre.focus();
      } else {
        alert("El alumno " + nombre + " recupera");
        document.form_1.nombre.focus();
      }
}