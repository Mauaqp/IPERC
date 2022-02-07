// Test conection js
function myFunction() {
    alert("main.js está conectado!");
}

// Insertar row en tbody
// let valProbabilidad = "";
// let valConsecuencia = "";

// Display de probabilidad x consecuencia

function test(){
    prueba = document.getElementById("probabilidad").value;
    console.log("Aqui debería ir ", prueba)
}

let probabilidad = document.getElementById("probabilidad").value;
console.log(probabilidad);

let resultado = document.querySelector('#resultado');



// var p = document.getElementById("probabilidad");
// console.log(p.value);


function getValP (value) {
    console.log("Probabilidad: ", value);
    probabilidad = value;
    return probabilidad;
}
function getValC (value) {
    console.log("Consecuencia: ", value);
    var consecuencia = value;
    return consecuencia;
}


function calculate () {
    probabilidad = document.getElementById("probabilidad").value;
    consecuencia = document.getElementById("consecuencia").value;
    res = probabilidad * consecuencia;
    console.log("funciona", res)
}