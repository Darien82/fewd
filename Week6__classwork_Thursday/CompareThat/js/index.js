// When the user clicks the button, run the compare function
document.getElementById('submit').onclick = compare;

function compare() {
  
  // Get the value stored in #a
  var a = document.getElementById('a').value;
  a = parseFloat(a);
  
  // Get the value stored in #b
  var b = document.getElementById('b').value;
  b = parseFloat(b);
  
  // Set up a variable to store the comparison operator
  var comparison;
  
  // TODO: Set `comparison` string based on relationship between a and b
  if(a > b) {
    comparison = '>';
  } else if(a < b) {
    comparison = '<';
  } else {
    comparison = '=';
  }
}
  
  // Print `comparison` string on the page
  document.getElementById('comparison').innerHTML = comparison;
  




console.log("Darien is here")


//how to do this in jquery
/* Gets the value stored for jquery
var a = $("#a").val()
var b = $("#b").val()
console.log(a,b);

//if (a > b) {
  $("comparison").html('>');
}

$("#submit").click(compare);

function compare() {
var a = $("#a").val()
var b = $("#b").val()

console.log(a,b);



var stringA = parseInt(stringA);
var stringB = parseInt(stringB); 


if( isNAN(a) || isNAN(b){
alert("Give me a number");  
}else if(a > b) {
  $("#comparison").html(">");
} else if(a < b) {
  $("#comparison").html("<");
}else(a = b){
  $("#comparison").html("=");
}
}

