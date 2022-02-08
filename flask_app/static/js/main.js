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
    console.log("TESTEO JQ")
    let ev = $(this).val();
    // Así lo programé sin jquery
    // document.getElementById('resultado').closest('input').value;
    console.log("ev", ev)
    let res_ev = $(this).closest('td').next('td').find('#evaluacion');
    console.log("res_ev ", res_ev)
    // document.getElementById("evaluacion").closest('span');
        if (ev >= 8) {
            res_ev.html("Riesgo Alto")
            console.log("Riesgo Alto")
        }
        else if (ev >= 4) {
            res_ev.html("Riesgo Medio")
            console.log()
        }
        else {
            res_ev.html("Riesgo Bajo")
            console.log("Riesgo Alto")
        }
    return (ev);
}