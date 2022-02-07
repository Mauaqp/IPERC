$(document).ready(function() {
    $("#add").click(function() {
      var category = $("#grade_id").val();
      //alert(category)
      if (category == '') {
        alert('Please Select Grade');
      } else {
        addNewRow();
      }
    })
  
    
    
function addNewRow() {

    $("#invoice_item").append('<tr><td><select class="form-control pid" name="" id="grade_id"><option value="">Select</option><option value="1">Product Code - 1001</option><option value="2">Product Code - 1002</option><option value="3">Product Code - 1003</option></select></td><td><input type="text" name="stock" class="form-control stock" value="250"></td><td><input type="text" name="square_feet" class="form-control square_feet" ></td><td><input type="text" name="prices" class="form-control pices"></td><td><input type="text" name="sale_price" class="form-control sale_price"></td><td>BDT:<span class="amt">0</span></td></tr>');
    }


    // /* for remove row-*/
    // $("#remove").click(function() {
    // $("#invoice_item").children("tr:last").remove();
    // })

    $("#invoice_item").delegate(".pid", "change", function() {
    var pid = $(this).val();
      //alert(pid)
    $(".overlay").show();
    });

    $("#invoice_item").delegate('.price', 'keyup', function() {
      $(this).closest('tr').find(".amt").html($(this).closest('tr').find(".qty").val() * $(this).closest('tr').find(".price").val());
    })

    $("#invoice_item").delegate('.square_feet', 'keyup', function() {
      //alert('ok')
    var order_square_feet = $(this).val();
    var total_pices = order_square_feet / .667;
    $(this).closest('tr').find('.pices').val(total_pices);
    })

    $("#invoice_item").delegate('.pices', 'keyup', function() {
    var pices = $(this).val();
      var square_feet = pices * .667;
    $(this).closest('tr').find('.square_feet').val(square_feet);
    })

});








$( document ).ready(function() {

    //Calculate Tip
  function calculateTip(id = 0) {
    var montcost = 500;
    var kamera = document.getElementById('kamera['+id+']').value;
    var anzahl = document.getElementById('anzahl['+id+']').value;
    var laufzeit = document.getElementById('laufzeit').value;
    var datccost = 30;
  
    //Calculate tip
    var total = ((montcost + (kamera * anzahl)) / laufzeit) + (datccost);
    return Math.round(total * 100);
  }
  function getTotalSum() {
    var totalSum = 0;
    var nbr = getCounter();
    for (var cid = 0; cid <= nbr; cid++) {
     //we add sums as integers to avoid floating point errors
     totalSum += calculateTip(cid);
    }
    //Display the tip
    document.getElementById('totalTip').style.display = 'block';
    document.getElementById('tip').innerHTML = (totalSum / 100).toFixed(2); //the final number is presented as it should be rounded to 2 digits after zero!
  }
  
  //Hide the tip amount on load
  //document.getElementById("totalTip").style.display = "none";
  //document.getElementById("each").style.display = "none";
  
  //click to call function
  document.getElementById("calculate").onclick = function() {
    getTotalSum();
  };
  
  function numberingTableRow(){
    $.each($('#numberingTable tbody tr'), function (i, v) {
         $(this).find('td:eq(0)').html(i+1);
    });
  }
  
  var counter = 0; //we can start counting rows from zero, as we like having fun ;)
  // Function to increment counter
  function addRow() {
    counter += 1;
  }
  function removeRow() {
    counter -= 1;
  }
  function getCounter() {
    return counter;
  }
  //' + counter +'
  $(document).on('click','.btnAddRowTable',function(e){
    e.stopPropagation();
    addRow(); //we increase the counter as we are about to add a new row
    counter = getCounter();
    $('#numberingTable tbody').append('<tr><td></td><td><select id="kamera['+counter+']"><option selected value="0">Kamera auswählen</option><option value="500">Kamera 1</option><option value="600">Kamera 2</option><option value="700">Kamera 3</option><option value="800">Kamera 4</option><option value="900">Kamera 5</option></select></td><td><select id="anzahl['+counter+']"><option selected value="0">Anzahl</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></td><td><button type="button" class="btn btn-xs btn-danger btnDeleteRowTable">Delete</button></td></tr>');
    numberingTableRow();
  });
  
  $(document).on('click','.btnDeleteRowTable',function(e){
    e.stopPropagation();
    $(this).parent().parent().remove();
    removeRow();
    numberingTableRow();
  });
  });



