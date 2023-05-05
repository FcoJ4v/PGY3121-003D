$(function(){
    $("#miFormulario").validate({
        rules:{
            rut:{
                required:true,
                minlength: 8
            },
            nombre:{
                required:true,
                minlength: 3
            },
            apellido:{
                required:true,
                minlength: 5
            },
            correo:{
                required: true,
                email:true
            }
        },
        messages:{
            rut:{
                required:"Debe ingresar su rut",
                minlength:"Minimo 8 caracteres  "
            },
            nombre:{
                required:"Debe ingresar su nombre",
                minlength:"Minimo de 3 caracteres"
            },
            apellido:{
                required:"Debe ingresar su apellido",
                minlength:"Minimo 5 caracteres"
            },
            correo:{
                required:"Debe ingresar su correo",
                email:"Formato de correo no valido"
            }
        }
    })
})



