// Test conection js
function myFunction() {
    alert("main.js está conectado!");
}

// Insertar row en tbody
function insert_Row()
{
let x = document.getElementById('iperc-body').insertRow(0);
var y = x.insertCell(0);
var z = x.insertCell(1);
y.innerHTML="New Cell1";
z.innerHTML="New Cell2";
}


var arrHead = new Array();
arrHead = ['Acciones', 'Peligro', 'Riesgo Asociado', 'Probabilidad', 'Consecuencia', 'Resultado']; // table headers.

// function to add new row.

// function to delete a row.
function removeRow(oButton) {
    var empTab = document.getElementById('iperc');
    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // buttton -> td -> tr
}


// INICIO DE TEST


var arrHead = new Array();
arrHead = ['Acciones', 'Peligro', 'Riesgo Asociado', 'Probabilidad', 'Consecuencia', 'Resultado']; // table headers.

// function to add new row.
function addRow() {
    let empTab = document.getElementById('iperc-body');

    let rowCnt = empTab.rows.length;    // get the number of rows.
    let tr = empTab.insertRow(rowCnt); // table row.
    tr = empTab.insertRow(rowCnt);
    for (let c = 0; c < arrHead.length; c++) {
        let counter = 0;
        let td = document.createElement('td');          // TABLE DEFINITION.
        td = tr.insertCell(c);
        
        if (c == 0) {   // if its the first column of the table.
            // add a button control.
            var button = document.createElement('input');

            // set the attributes.
            button.setAttribute('type', 'button');
            button.setAttribute('value', 'Eliminar');

            // add button's "onclick" event.
            button.setAttribute('onclick', 'removeRow(this)');

            td.appendChild(button);
        }
        // Insertar valores del IPERC aquí
        else if (c == 1) {
            
            let pel = document.createElement('input_pel');
            pel.innerHTML = '<input type="text" name="peligro" id="peligro" placeholder="Ingresa Peligro">';
            td.appendChild(pel);
        }

        else if (c == 2) {
            let riesgo = document.createElement('input_riesgo');
            riesgo.innerHTML = '<input type="text" name="riesgo" id="riesgo" placeholder="Ingresa el Riesgo">';
            td.appendChild(riesgo);
        }

        else if (c == 3) {
            let prob = document.createElement('sel1');
            prob.innerHTML = '<select id="probabilidad" name="probabilidad" onchange="calculate()"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select>';
            td.appendChild(prob);
        }

        else if (c == 4) {
            let con = document.createElement('sel2');
            con.innerHTML = '<select id="consecuencia" name="consecuencia" onchange="calculate()"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select>';
            td.appendChild(con);
        }
        else if (c == 5) {
            let res = document.createElement('res');
            res.innerHTML = '<div id="resultado"></div>';
            td.appendChild(res);
        }
        counter +=1;
    }
}
// function to delete a row.
function removeRow(oButton) {
    var empTab = document.getElementById('iperc');
    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // buttton -> td -> tr
}



// Display de probabilidad x consecuencia
function calculate () {
    let probabilidad = document.getElementById("probabilidad").value;
    let consecuencia = document.getElementById("consecuencia").value;
    res = probabilidad * consecuencia;
    console.log("resultado", res)
    document.getElementById("resultado").innerHTML = res
}
