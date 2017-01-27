// JavaScript Document
var wood = 0;
var fireMessage=document.write("You have started a fire" + "<br>");
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
