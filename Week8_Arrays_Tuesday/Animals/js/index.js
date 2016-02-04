var index = 0;
var images = ["images/animal1.jpg","images/animal2.jpg","images/animal3.jpg",
"images/animal4.jpg","images/animal5.jpg","images/animal6.jpg","images/animal7.jpg"];

var newSrc;

$("#next").click(nextImage);
$("#previous").click(previousImage);

function nextImage() {
	console.log("nextImage fired");
	
	index += 1;
	newSrc = images[index];

	$("#image").attr("src", newSrc);
};


//goes back to the previous image
function previousImage() {

	index -= 1;
	newSrc = images[index];
	$("#image").attr("src", newSrc);


};