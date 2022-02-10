// Función autocálculo jquery
$(function() {

    function autoCalcSetup() {
        $('form#iperc').jAutoCalc('destroy');
        $('form#iperc tr.iperc-items').jAutoCalc({keyEventsFire: true, decimalPlaces: 0, emptyAsZero: true});
        $('form#iperc').jAutoCalc({decimalPlaces: 0});
    }
    autoCalcSetup();


    $('button.row-remove').on("click", function(e) {
        console.log("remove row")
        e.preventDefault();
        var form = $(this).parents('form')
        $(this).parents('tr').remove();
        autoCalcSetup();

    });

    $('button.row-add').on("click", function(e) {
        console.log("botón add row")
        e.preventDefault();

        var $table = $(this).parents('table');
        var $top = $table.find('tr.iperc-items').first();
        var $new = $top.clone(true);

        $new.jAutoCalc('destroy');
        $new.insertBefore($top);
        $new.find('input[type=text]').val('');
        // $new.find('span').val('');
        autoCalcSetup();
    });
});


// Llamar a la función jquery de forma pasiva
$(document).ready(function() {
    $('#resultado').change(eval);
});

// función de evaluación y llenado en span
function eval(){
    let ev = $(this).val();
    // Así lo programé sin jquery
    // document.getElementById('resultado').closest('input').value;
    console.log("ev", ev)
    let res_ev = $(this).closest('td').next('td').find('#evaluacion');
    console.log("res_ev ", res_ev)
    // document.getElementById("evaluacion").closest('span');
        if (ev >= 8) {
            res_ev.val("Riesgo Alto")
            console.log("Riesgo Alto")
        }
        else if (ev >= 4) {
            res_ev.val("Riesgo Medio")
            console.log()
        }
        else {
            res_ev.val("Riesgo Bajo")
            console.log("Riesgo Alto")
        }
    return (ev);
}

// Parse tabla en objeto JSON
// gist.github.com/johannesjo/6b11ef072a0cb467cc93a885b5a1c19f

function parseHTMLTableElem(table) {
    var columns = Array.from(table.querySelectorAll('th')).map(it => it.textContent)
    var rows = table.querySelectorAll('tbody > tr')
    return Array.from(rows).map(row => {
        var cells = Array.from(row.querySelectorAll('td'))
        return columns.reduce((obj, col, idx) => {
            obj[col] = cells[idx].textContent
            console.log(obj)
            return obj
        }, {})
    })
}



// POST FETCH
var myForm = document.getElementById('iperc');
    myForm.onsubmit = function(e){
        // "e" es el evento JS que ocurre cuando enviamos el formulario
        // e.preventDefault() es un método que detiene la naturaleza predeterminada de JavaScript
        e.preventDefault();
        // crea el objeto FormData desde JavaScript y envíalo a través de una solicitud post fetch

        var form = new FormData(myForm)
        // así es como configuramos una solicitud post y enviamos los datos del formulario
        fetch("http://localhost:5000/json/data", { method :'POST', body : form})
            .then( response => response.json() )
            .then( data => console.log(data) )
    }

// CONVERT TABLE TO JSON
// function tableToJson(table) {
//     var data = [];
//     var headers = [];
//     for (var i = 0; i < table.rows[0].cells.length; i++){
//         headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
//     }
//     for ( var i = 1; i < table.rows.length; i++){
//         var tableRow = table.rows[i];
//         var rowData = {}
//         for (var j=0; j < tableRow.cells.length; j++){
//             rowData[ headers[j] ] = tableRow.cells[j].innerHTML;
//         }
//         data.push(rowData);
//     }
//     return data;
// }

// var myjson = JSON.stringify(tableToJson(document.getElementById('iperc')));

// console.log(myjson);

