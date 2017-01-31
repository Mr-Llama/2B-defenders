// JavaScript Document




//jQuery

var wood = 0;

function display_text(text) {
	var text1 = document.getElementById("text1").innerHTML;
	document.getElementById("text2").innerHTML = text1;
	var text2 = document.getElementById("text2").innerHTML;
	document.getElementById("text3").innerHTML = text2;
	var text3 = document.getElementById("text3").innerHTML;
	document.getElementById("text4").innerHTML = text3;
	var text4 = document.getElementById("text4").innerHTML;
	document.getElementById("text5").innerHTML = text4;
	var text5 = document.getElementById("text5").innerHTML;
	document.getElementById("text6").innerHTML = text5;

}

function day() {
	document.body.style.backgroundColor = "yellow";
		
}

function night() {
	document.body.style.backgroundColor = "black";
		
}

function grabWood() {
	wood+=1;

	
	document.getElementById("wood").value = "wood: " +wood;

	
}

function startFire() {
	var fireMessage="You have started a fire";
	 if(wood >= 5) {
	 		wood-=5;
			document.getElementById("wood").value = wood;
			document.getElementById("text").value=fireMessage;
			

			
	 }else {
	 	alert("Not enough wood");
	 }
}

var traps= 0;
function makeTrap() {
	var trapMessage="You have built a trap";
	 if(wood >= 10) {
	 		wood-=10;
			document.getElementById("traps").value = "traps: " + traps;
			document.getElementById("text").value=trapMessage;
			
			
	 }else {
	 	alert("Not enough wood");
	
}

