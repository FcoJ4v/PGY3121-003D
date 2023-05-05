function    crear(){
    /* se declara una array con propiedades */
    let array = [
        {
            nombre:"Juan",
            edad:23,
            rut:"12.123.123-0"
        },

        {
            nombre:"Pedro",
            edad: 30,
            rut:"18.123.123-4"
        }
    ];

    /* para pasarlo a local storgage se pasa a json */

    const obj = JSON.stringify(array); /* stringify Sirve para convertir el array a string */
    localStorage.setItem("storage003d",obj);
    console.log("Storage creado");/* se convierte un array en cadena, aca ya estaria creado el local storage */
    /* Se puede acceder a los metodos de esta variable por un punto con el get item. */

}

function eliminar(){
    localStorage.removeItem("storage003d");
    
}

function obtener(){
    /* obtenermos el valor del storage en un string, se tiene que convertir nuevamente para convertirlo en un objeto */
    let var1 = localStorage.getItem("storage003d");
   
   const var2 = JSON.parse(var1);
   if(var1==null){
    alert("No hay datos en el storage");
   }else{
    console.log(var2);
   }

   
    
}