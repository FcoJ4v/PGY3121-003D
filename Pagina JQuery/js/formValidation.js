$(function(){
    $("#miFormulario").validate({
        rules:{
            rut:{
                required: true,
                minlength: 8
            },
            nombre:{
                required: true,
                minlength: 3
            },
            apellido:{
                required: true,
                minlength: 5
            },
            correo:{
                required:true,
                email:true
            }
        },
        messages:{
            rut:{
                required:"Debe ingresar su rut",
                minlength:"Minimo 8 caracteres"
            },
            correo:{
                required:"El correo es obligatorio.",
                email:"Formato correo no valido."
            }
        }
    })
})


$.getJSON('https://mindicador.cl/api', function(data){
    console.log(data);

    const contenedor = document.getElementById("contenedor");
    const row = document.createElement("div");
    const col = document.createElement("div");
    const h3 = document.createElement("h3");

    h3.textContent = "El valor del dolar es: $" +  data.dolar.valor;
    let num =123.231615651651561616516;
    console.log(Math.trunc(num));
    row.classList.add("row");
    col.classList.add("col");
    col.classList.add("mt-5");

    contenedor.appendChild(row);
    row.appendChild(col);
    col.appendChild(h3);


})


/* $(function(){
    $("#txtBuscar").on("keyup", function(){
        let valor = $(this).val().toLowerCase();
        $("table tbody tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(valor) > -1);
        })
    })
}) */



$(function(){
    $("#btnBuscar").on("click", function(){
        let valor = $("#txtBuscar").val().toLowerCase();
        $("table tbody tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(valor) > -1);/* muestra si las filas cumple la condicion de la busqueda, si encuentra algo oculta la informacion que no hace match */
        })
    })
})
