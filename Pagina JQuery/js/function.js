$(document).ready(function(){

})

$(function(){
    //alert("Bienvenido");
    $("#primero").css({"background-color": "red"});
})


$("#ocultar").click(function(){
    $("#segundo").hide();
})

$("#mostrar").click(function(){
    $("#segundo").show();   
})

$("#primero").mouseleave(function(){
    //$("#quinto").hide();
    //$("#quinto").fadeIn();
    $("#quinto").slideUp();
})

$("#tercero").mouseleave(function(){
    //$("#quinto").show();
    //$("#quinto").fadeOut();
    $("#quinto").slideDown();
})

 //$("#primero").animate({width:"300px"});


 $("#boton").click(function(){
    //$("#primero").text("Hola");
    $("#primero").append("<strong>Hello!!</strong>");
    $("#primero").prepend("<strong>Hello!!</strong>");
    $("#cuarto").after("<p>Soy un parrafo</p>");
    $("#cuarto").before("<p>Soy un parrafo</p>");
 })


 $("#valor").click(function(){
     //let var1 = $("#txtDatos").val();
     $("#txtDatos").val(999999995959);
    // console.log("valor input: ", var1);
 })


