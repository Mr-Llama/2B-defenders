// JavaScript Document


var wood = 0;
var gems = 0;
var leather = 0;
var diamonds = 0;
var fur = 0;
function display_text(text1) {
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
	var fireMessage="You have started a fire";
	 if(wood >= 5) {
	 		wood-=5;
			document.getElementById("wood").value =  wood;
			document.getElementById("text1").value=fireMessage;
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
			traps -= 1;
			leather += Math.round(Math.random()*10);
			document.getElementById("traps").value = "traps: " + traps;
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
	case 3: 
				var firstCase = confirm("Would you like to trade 20 leather for 1 gem?");
				if(firstCase && leather >= 20) {
					leather-=20;
					document.getElementById("leather").value =  leather; 
					document.getElementById("leather").value = "leather: " + leather;	
					gems+=1;
					document.getElementById("gems").value =  gems; 
					document.getElementById("gems").value = "gems: " + gems;	
					}else if(leather < 20){
						alert("You don't have enough leather...");
				}else{
					alert("FINE DON'T TRADE! I DONT CARE!");
				}
				break;
	case 4:
	case 5:
	case 6:
			var secondCase =	confirm("Would you like to trade 100 wood for 10 fur?");
					if(secondCase && wood >= 100) {
					wood-=100;
					document.getElementById("wood").value =  wood; 
					document.getElementById("wood").value = "wood: " + wood;	
					fur+=10;
					document.getElementById("fur").value =  fur; 
					document.getElementById("fur").value = "fur: " + fur;	
					}else if(wood < 100){
						alert("You don't have enough wood...");
				}else{
					alert("FINE DON'T TRADE! I DONT CARE!");
				}
				break;
	case 7:
	case 8:
	case 9:
				var thirdCase = confirm("Would you like to trade 10 gems for 1 diamond?");
					if(thirdCase && gems >= 10) {
					gems-=10;
					document.getElementById("gems").value =  gems; 
					document.getElementById("gems").value = "gems: " + gems;	
					diamonds+=1;
					document.getElementById("diamonds").value =  diamonds; 
					document.getElementById("diamonds").value = "diamonds: " + diamonds;
					}else if(gems < 10){
						alert("You don't have enough gems...");
				}else{
					alert("FINE DON'T TRADE! I DONT CARE!");
				}
				break;
	case 10: 
				var fourthCase = confirm("Would you like to trade 1000 wood for 1 diamond?");
					if(fourthCase && wood >= 1000 ) {
					wood-=1000;
					document.getElementById("wood").value =  wood; 
					document.getElementById("wood").value = "wood: " + wood;	
					diamonds+=1;
					document.getElementById("diamonds").value =  diamonds; 
					document.getElementById("diamonds").value = "diamonds: " + diamonds;
					}else if(wood < 1000){
						alert("You don't have enough wood...");
				}else{
					alert("FINE DON'T TRADE! I DONT CARE!");
				}
				break;
	default:
			   var fifthCase = confirm("Would you like to trade 50 leather for 5 gems?");
			   	if(fifthCase && leather >= 50) {
					leather-=50;
					document.getElementById("leather").value =  leather; 
					document.getElementById("leather").value = "leather: " + leather;	
					gems+=5;
					document.getElementById("gems").value =  gems; 
					document.getElementById("gems").value = "gems: " + gems;	
					}else if(leather < 50){
						alert("You don't have enough leather...");
				}else{
					alert("FINE DON'T TRADE! I DONT CARE!");
				}
				break;
}
}