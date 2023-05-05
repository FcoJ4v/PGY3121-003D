document.getElementById("valRut").style.display = "none"; /* para ocultar el small del valRut */
document.getElementById("valNombre").style.display = "none"; 
document.getElementById("valApellido").style.display = "none"; 

/* ver el largo de un input */



function validarForm(){
    if(document.getElementById("txtRut").value.length == 0){ /* se iguala a 0 por el input vacio, osea si es vacio salta el small*/
    document.getElementById("valRut").style.display = "inline";
    document.getElementById("txtRut").classList.add("is-invalid")/* se le agrega una clase de bootstrap is-invalid */
}else{
    document.getElementById("valRut").style.display = "none";
    document.getElementById("txtRut").classList.remove("is-invalid")
    document.getElementById("txtRut").classList.add("is-valid")
}

    if(document.getElementById("txtNombre").value.length == 0){ /* se iguala a 0 por el input vacio, osea si es vacio salta el small*/
    document.getElementById("valNombre").style.display = "inline";
    document.getElementById("txtNombre").classList.add("is-invalid")/* se le agrega una clase de bootstrap is-invalid */
}else{
    document.getElementById("valNombre").style.display = "none";
    document.getElementById("txtNombre").classList.remove("is-invalid")
    document.getElementById("txtNombre").classList.add("is-valid")
}

    if(document.getElementById("txtApellido").value.length == 0){ /* se iguala a 0 por el input vacio, osea si es vacio salta el small*/
    document.getElementById("valApellido").style.display = "inline";
    document.getElementById("txtApellido").classList.add("is-invalid")/* se le agrega una clase de bootstrap is-invalid */
}else{
    document.getElementById("valApellido").style.display = "none";
    document.getElementById("txtApellido").classList.remove("is-invalid")
    document.getElementById("txtApellido").classList.add("is-valid")
}

}
