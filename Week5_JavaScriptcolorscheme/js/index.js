
document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('blueButton').onclick = switchBlue;

function switchGray() {
	console.log("switchGray called");
  document.body.style.backgroundColor = 'gray';
 document.body.style.color = 'white';
}

function switchWhite() {
	console.log("switchWhite called");
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
}

function switchBlue() {
	console.log("switchBlue called");
	document.body.style.backgroundColor = 'black';
	document.body.style.backgroundColor = '#6495ED';
}

console.log("Darien is here");
console.log("just checking");