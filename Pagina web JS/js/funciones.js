function load() {
    CargaArray();
}

//console.log("Hola mundo");
/**/
//alert("Hola mundo");

let miVariable = "Hola";
let varUno = 10;
let varDos = 20;
const constante = 10;
let resultado;

let variable;

//console.log(miVariable+ " " + varUno);

resultado = varUno * varDos;

console.log("La suma es : ", resultado);

console.log("La variable vacia es : ", variable);


variableUno = 10;
variableDos = 10;


let vari1 = 500;
let vari2 = "500";
if (vari1 == vari2){
    console.log("son iguales sadsd")
}else{
    console.log("no son iguales sadsad" )
}
/* 
if (variableUno !== variableDos) {
    console.log("Verdadero");
}else{
    console.log("Falso");
} */


/* if (variableUno >= variableDos) {
    console.log("Verdadero");
}else{
    console.log("Falso");
} */


/* if (variableUno > 5 && variableDos <6) {
    console.log("Verdadero");
}else{
    console.log("Falso");
} */


if (variableUno > 5 || variableDos < 6) {
    console.log("Verdadero");
}else{
    console.log("Falso");
}


function miPrimeraFuncion(userName,n1,n2,n3) {
    let result = n1+n2+n3;

    console.log("mi primera funcion", userName + " Resultado" + " " + result);
}


miPrimeraFuncion(100,1,2,3);



function eventBlur() {
    console.log("BLUR");
}

function eventFocus() {
    console.log("FOCUS");
}

function eventChange(){
    console.log("Change");
}

function eventClick(){
    console.log("Click");
}

function eventDoubleClick() {
    console.log("Doble click");
}

function eventKeyDown(){
    console.log("Presionamos una tecla");
}

function eventKeyUp(){
    console.log("Soltamos una tecla");
}


function eventMouseMove() {
    console.log("Mouse Move");
}

function eventMoeuseUp() {
   console.log("Mouse Up"); 
}

function eventScroll() {
    console.log("Scroll");
}



function mostrarDatos(){
    let nombre =  document.getElementById("txtNombre").value;
    console.log(nombre);
}

function llamarFuncion(){
    mostrarDatos();
}

document.getElementById("ocultarIcon").style.display = "none";
function passwordChange(){
    
    let input = document.getElementById("txtPass");
    if (input.type == 'password') {
        input.type = 'text';
        document.getElementById("mostrarIcon").style.display = "none";
        document.getElementById("ocultarIcon").style.display = "inline";
    }else{
        input.type = 'password'
        document.getElementById("mostrarIcon").style.display = "inline";
        document.getElementById("ocultarIcon").style.display = "none";
    }
}



function CargaArray(){
    let myArray = [1,2,3,4,5,6,7,8,9];
    myArray.push(20);
    myArray.unshift(100);
   //console.log("Elementos de mi arreglo: ", myArray);


/*     for (const i of myArray) {
        console.log("Array en For Of    : ", i);
        
    }

    for (let i = 0; i < myArray.length; i++) {

        
    } */

    let myArrayDos = [{
        id:1,
        nombre:"Metropolitana"
    },
    {
        id:2,
        nombre:"Atacama"
    }



]

let vari = "Valparaiso";
    myArrayDos.push({id:3, nombre: vari});
    console.log("Mi segundo array: " , myArrayDos);

    const select = document.getElementById("cmbRegion");

    let filtro = myArrayDos.filter(e => e.id == 41 || e.nombre == "Metropolitana");
    console.log("FILTRO ", filtro);
    
    for (const j of myArrayDos) {
        const option = document.createElement("option");
        option.value = j.id;
        option.textContent = j.nombre;
        select.appendChild(option);
    }

}   


function valor(){
    let result = document.getElementById("cmbRegion").value;
    console.log("El valor es: " , result);
}

    