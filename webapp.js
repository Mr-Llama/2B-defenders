// JavaScript Document
var wood = 0;

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
	
	 if(wood >= 1) {
	 		wood-=1;
			document.getElementById("d").value = wood;
			alert("You have started a fire");
			
			
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


