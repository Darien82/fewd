$(document).ready(function() {
    $('#image').attr('src', images[0]);
});

var index = 0; // similar to var total = 0; in cash register codealong
var images = ["images/animal1.jpg", "images/animal2.jpg", "images/animal3.jpg", "images/animal4.jpg", "images/animal5.jpg", "images/animal6.jpg", "images/animal7.jpg"];
var lastIndex = images.length - 1;
var newSrc;

//click functions for previous and next buttons
$('#next').click(nextImage);
$('#previous').click(prevImage);

//function created to choose the next picture
function nextImage() {
    if (index < lastIndex) {
        index += 1;
    } else {
        index = 0;
    }

    updateImage();
}

//function created to previous picture
function prevImage() {
    if (index > 0) {
        index -= 1;
    } else {
        index = lastIndex;
    }
    
    updateImage();
}

//function to update images utilizing the attr method
function updateImage() {
    newSrc = images[index];
    $('#image').attr('src', newSrc);
}
