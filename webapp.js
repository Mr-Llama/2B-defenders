// JavaScript Document


var wood = 0;
var gems = 0;
var leather = 0;
var diamonds = 0;
var fur = 0;
var text1 = "";
var text2 = "";
var text3 = "";
var text4 = "";
var text5 = "";
var text6 = "";
var text7 = "";
var text8 = "";
var text9 = "";
var text10 = "";


function c_text(text) {
	 /*text10 = text9;
	text9 = text8;
	text8 = text7;
	text7 = text6;
	text6 = text5;
	text5 = text4;
	text4 = text3;
	text3 = text2;
	text2 = text1;
	text1 = text;*/
	document.getElementByID("text1").innerHTML = text;
	document.getElementByID("text2").innerHTML = text2;
	document.getElementByID("text3").innerHTML = text3;
	document.getElementByID("text4").innerHTML = text4;
	document.getElementByID("text5").innerHTML = text5;
	document.getElementByID("text6").innerHTML = text6;
	document.getElementByID("text7").innerHTML = text7;
	document.getElementByID("text8").innerHTML = text8;
	document.getElementByID("text9").innerHTML = text9;
	document.getElementByID("text10").innerHTML = text10;
}



function day() {
	document.body.style.backgroundColor = "white";
	$('.button').addClass('light');
	$('.button').removeClass('dark');
	$('.div').addClass('lightDiv');
	$('.div').removeClass('darkDiv');
}

function night() {
	document.body.style.backgroundColor = "black";
	$('.button').addClass('dark');
	$('.button').removeClass('light');
	$('.div').addClass('darkDiv');
	$('.div').removeClass('lightDiv');
}

function grabWood() {
	wood+=1;

	
	document.getElementById("wood").value = "wood: " +wood;

	
}

function startFire() {
	
	 if(wood >= 5) {
	 		wood-=5;
			document.getElementById("wood").value =  wood;
			c_text("You have started a fire");
			document.getElementById("wood").value = "wood: " +wood;
			

			
	 }else {
	 	alert("Not enough wood");
	 }
}

var traps= 0;
function makeTrap() {
	var trapMessage="You have built a trap";
	 if(wood >= 10) {
	 		wood -= 10;
			traps += 1;
			document.getElementById("traps").value = "traps: " + traps;
			document.getElementById("wood").value = "wood: " + wood;			
	 }else {
	 	alert("Not enough wood");
	 }
}

function checkTraps(){
		if (traps >= 1) {
			for (i = 0; i < traps; i++){
				leather += Math.round(Math.random()*10);
				document.getElementById("leather").value =  leather; 
				document.getElementById("leather").value = "leather: " + leather;
			}
		}
		else {
			alert("You have no traps, idiot...");
		}
}

function trade() {
	var chooseNum =Math.round(Math.random()*10);
switch(chooseNum) {
	case 1:
	case 2:
	
				var firstCase = confirm("Would you like to trade 20 leather for 1 gem?");
				if(firstCase === false){
					alert("FINE DON'T TRADE! I DONT CARE!");
					break;
				}
				if(firstCase && leather >= 20) {
					leather-=20;
					document.getElementById("leather").value =  leather; 
					document.getElementById("leather").value = "leather: " + leather;	
					gems+=1;
					document.getElementById("gems").value =  gems; 
					document.getElementById("gems").value = "gems: " + gems;	
					}else{
						alert("You don't have enough leather...");
					}
					break;
	case 4:
	case 5:
	case 6:
			var secondCase = confirm("Would you like to trade 100 wood for 10 fur?");
				if(secondCase === false){
					alert("FINE DON'T TRADE! I DONT CARE!");
					break;
				}
					if(secondCase && wood >= 100) {
					wood-=100;
					document.getElementById("wood").value =  wood; 
					document.getElementById("wood").value = "wood: " + wood;	
					fur+=10;
					document.getElementById("fur").value =  fur; 
					document.getElementById("fur").value = "fur: " + fur;	
					}else{
						alert("You don't have enough wood...");
				}
				break;
	case 7:
	case 8:
	
				var thirdCase = confirm("Would you like to trade 10 gems for 1 diamond?");
				if(thirdCase === false){
					alert("FINE DON'T TRADE! I DONT CARE!");
					break;
				}
					if(thirdCase && gems >= 10) {
					gems-=10;
					document.getElementById("gems").value =  gems; 
					document.getElementById("gems").value = "gems: " + gems;	
					diamonds+=1;
					document.getElementById("diamonds").value =  diamonds; 
					document.getElementById("diamonds").value = "diamonds: " + diamonds;
					}else {
						alert("You don't have enough gems...");
				}
				break;
	case 10: 
				var fourthCase = confirm("Would you like to trade 1000 wood for 1 diamond?");
				if(fourthCase === false){
					alert("FINE DON'T TRADE! I DONT CARE!");
					break;
				}
					if(fourthCase && wood >= 1000 ) {
					wood-=1000;
					document.getElementById("wood").value =  wood; 
					document.getElementById("wood").value = "wood: " + wood;	
					diamonds+=1;
					document.getElementById("diamonds").value =  diamonds; 
					document.getElementById("diamonds").value = "diamonds: " + diamonds;
					}else{
						alert("You don't have enough wood...");
				}
				break;
	default:
	
			   var fifthCase = confirm("Would you like to trade 50 leather for 5 gems?");
			   if(fifthCase === false){
					alert("FINE DON'T TRADE! I DONT CARE!");
					break;
				}
			   	if(fifthCase && leather >= 50) {
					leather-=50;
					document.getElementById("leather").value =  leather; 
					document.getElementById("leather").value = "leather: " + leather;	
					gems+=5;
					document.getElementById("gems").value =  gems; 
					document.getElementById("gems").value = "gems: " + gems;	
					}else{
						alert("You don't have enough leather...");
				}
				break;
}
}