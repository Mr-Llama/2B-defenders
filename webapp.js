// JavaScript Document


var wood = 0;
var gems = 0;
var leather = 0;
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

function checkTraps {
		if (traps >= 1) {
			traps -= 1;
			leather += Math.round(Math.random()*10)
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
				if(firstCase) {
					leather-=20;
					document.getElementById("leather").value =  leather; 
					document.getElementById("leather").value = "leather: " + leather;	
					gems+=1;
					document.getElementById("gems").value =  gems; 
					document.getElementById("gems").value = "gems: " + gems;	
				}else{
					alert("FINE DON'T TRADE! I DONT CARE!");
				}
				break;
	case 4:
	case 5:
	case 6:
				confirm("Would you like to trade 100 wood for 10 fur?");
				break;
	case 7:
	case 8:
	case 9:
				confirm("Would you like to trade 10 gems for 1 diamond?")
				break;
	case 10: 
				confirm("Would you like to trade 1000 wood for 1 diamond?")
				break;
	default:
			    confirm("Would you like to trade 50 leather for 5 gems?")
				break;
}
}