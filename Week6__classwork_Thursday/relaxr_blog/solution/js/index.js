console.log("test");



$(window).load(function(){
	console.log("window loaded");
});


$("#extraP").hide();
$("#firstP").hide();
$("#asideP").hide();
$("#learnLess").hide();

$("#trigger").click(revealP);
$("#triggerLess").click(revealP);
$("#readMore").click(slideDown);
$("#readLess").click(slideUp);



function slideDown(){
	$("#firstP").slideDown();
	$("#readMore").hide();
	$("#readLess").show();
};

function slideUp(){
	$("#firstP").slideUp();
	$("#readMore").show();
	$("#readLess").hide();
};


function revealP(){
$("#extraP").slideToggle();
$("#trigger").slideToggle();

};





$("#learnMore").click(revealAside);
function revealAside(){
$("#asideP").slideDown();
};




// The prompt does not work consistently 
$(document).ready(function(){
$(".button").click(function(event){
event.preventDefault()
alert("Sorry Our Registration Page is Under Construction!");
});
});

$(document).hover(function(){
$(".logo").hover(function(){
$(this).text("Click Me For Extra Credit");
  }, function(){
 $(this).text("Relaxr")
 });
});

//The prompt does not work consistently
$(document).ready(function(){
$(".logo").click(function(event){
event.preventDefault()
prompt("DID YOU ENJOY MY PAGE!!");
});
});






       





