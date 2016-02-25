
//forms vs inputs
var clicks = 0;

$('#blue > button').click(function() {
    recordClick();
});

//$('#red input[type="submit"]').click(function(e) {
//	console.log(e);
	
//	e.preventDefault();

  //  recordClick();
//});

$("form").submit(function(e){
	e.preventDefault();

});


function recordClick() {
    clicks += 1;
    $('#click-count').html(clicks);
}
