var total = 0;
var newEntry;
var newFloat;


$("#add").click(addToReceipt);

function addToReceipt() {
	//adds 
	newEntry = $("#newEntry").val();
	newFloat = parseFloat(newEntry);

	//total = total + newFloat; long version

	$("tbody").append("<tr><td></td><td>" + floatDecorator(newFloat) + "</td></tr>")
	total += newFloat;
	




//creates the total with the dollar sign
	$('#total').html(floatDecorator(total));



}


//creates the dollar sign in front function
function floatDecorator(number) {
	return '$' + number.toFixed(2);


}