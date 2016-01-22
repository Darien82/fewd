$('#grayButton').click(switchGray);


//document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('pizza').onclick = switchGreen;

function switchGray() {
	console.log("switchGray called");
  document.body.style.backgroundColor = 'gray';
 document.body.style.color = 'white';
 	document.getElementById("pizza").style.color = 'red';

}

function switchWhite() {
	console.log("switchWhite called");
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'blue';
  	document.getElementById("pizza").style.color = 'yellow';

}

function switchBlue() {
	console.log("switchBlue called");
	document.body.style.color = 'red';
	document.body.style.backgroundColor = 'purple';
	document.getElementById("pizza").style.color = 'grey';
}

function switchGreen() {
	document.getElementById("pizza").style.color ="green";
}




console.log("Darien is here");
console.log("just checking");