// JavaScript Document
var wood = 0;

function display_text(text) {
	var text1 = document.getElementById("text1").innerHTML;
	document.getElementById("text2").innerHTML = text1;
	var text2 = document.getElementById("text2").innerHTML;
	document.getElementById("text3").innerHTML = text;
	var text3 = document.getElementById("text3").innerHTML;
	document.getElementById("text4").innerHTML = text;
}

function day() {
	document.body.style.backgroundColor = "yellow";
		
}

function night() {
	document.body.style.backgroundColor = "black";
		
}

function grabWood() {
	wood+=1;
	
	document.getElementById("d").value = wood;

	
}

function startFire() {
	var fireMessage="You have started a fire";
	 if(wood >= 5) {
	 		wood-=5;
			document.getElementById("d").value = wood;
			document.getElementById("text").value=fireMessage;
			
			
	 }else {
	 	alert("Not enough wood");
	 }
}


var house = 0;
function buildHouse() {
	
	 if(wood >= 100) {
	 		wood-=100;
			house +=1
			alert("You have build a house");
			
	 }else {
	 	alert("Not enough wood");
	 }
}
