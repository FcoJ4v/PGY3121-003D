$(document).ready(function(){
    
})

$(function(){
   /*  alert("Bienvenido"); */
/* 
   $("p").css({"background-color": "red"});  le cambia el color a todos los P */
  /*  $(".first").css({"background-color": "red"});solo cambia el color a la clase first  */
   $("#segundo").css({"background-color": "red"}); //solo cambia el color al id segundo
})


$("#ocultar").click(function(){ /* ocultar elementos en jquery. oculta el segundo parrafo */
    $("#segundo").hide();
})

$("#mostrar").click(function(){/* muestra el elemento que estaba oculto */
    $("#segundo").show();
})

$("#primero").mouseleave(function(){
    /* $("quinto").hide(); */
   /*  $("#quinto").fadeIn(); */
    $("#quinto").slideUp();
})

$("#tercero").mouseleave(function(){
   /*  $("#quinto").show(); */
   /* $("#quinto").fadeOut(); */
   $("#quinto").slideDown();
})

$("#primero").animate({width:"200px"});


/* /* convierte el parrafo primero a el hola
$("#boton").click(function(){
    $("#primero").text("Hola");
}) */

/* $("#boton").click(function(){
    $("#primero").append("Hola"); Agrega el hola al final
}) */

$("#boton").click(function(){
    $("#primero").append("<strong>Hola!!!!</strong>"); /* Al final */
    $("#primero").prepend("<strong>Hola!!!!</strong>");/* Al principio */
    $("#cuarto").after("<p>soy un parrafo</p>"); /* Agrega un parrafo despues del cuarto parrafo */
    $("#cuarto").before("<p>soy un parrafo</p>");/* Agrega un parrafo antes del cuarto parrafo*/
})


$("#valor").click(function(){
     let var1 = $("#txtDatos").val(); /* revisar esta parte */
  /*   $("#txtDatos").val(9999999); */
      console.log("valor input: ",var1);

})