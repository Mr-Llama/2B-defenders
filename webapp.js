// JavaScript Document


var wood = 0;
var gems = 0;
var leather = 0;
var diamonds = 0;
var fur = 0;
var iron = 0;
var amount_l;
var amount_f;
var armor = "";
var pickaxe = 0;
var pick_durab = 0;
var house = 0;
var villagers = 0;
var fire = 0;
var weapon = "";
var secWeapon = "";
var countdownFire = 30;
var ironMiners = 0;
var hypo = 0;
var bullet = 0;
var arrow = 0;
var creature = "";
var survivalRate = Math.random();
var killRate = Math.random(); 

function c_text(text1, line) {
  switch (line) {
	  case 0:
	  case 1:
			document.getElementById("text1").innerHTML = text1;
			document.getElementById("text1").value =  text1;
			break;
	 case 2:
	 		document.getElementById("text2").innerHTML = text1;
			document.getElementById("text2").value =  text1;
			break;
	default:
			document.getElementById("text1").innerHTML = text1;
			document.getElementById("text1").value =  text1;
			break;
  }
	
}

function leather_armor() {
		if(leather >= 100) {
		    leather -= 100;
			armor="leather";
			document.getElementById("armor").value= "armor = " + armor;	
		}else {
			c_text("You dont have enough leather to make armor...", 1);	
		}
}

function iron_armor() {
		if(iron >= 100) {
			iron -= 100;
			armor="iron";
			document.getElementById("armor").value= "armor = " + armor;	
		}else {
			c_text("You dont have enough iron to make armor...", 1);
		}
}

function diamond_armor() {
		if(diamonds >= 50) {
			armor="diamond";
			diamonds -= 50;
			document.getElementById("armor").value= "armor = " + armor;	
		}else {
			c_text("You dont have enough diamonds to make armor...", 1);
		}
}

function woodSword() {
		if(wood >= 10 && leather >= 5) {
				wood -= 10;
				leather -= 5;
				c_text("You made a wood sword", 1);
				weapon = "wooden_sword";
				document.getElementById("weapon").value="weapon =" + weapon;
		}
}
function ironSword() {
		if(iron >= 10 && leather >= 5) {
				iron -= 10;
				leather -= 5;
				c_text("You made a iron sword", 1);
				weapon = "iron_sword";
				document.getElementById("weapon").value="weapon =" + weapon;
		}
		
}
function diamondSword() {
		if(diamonds >= 10 && leather >= 5) {
				diamonds -= 10;
				leather -= 5;
				c_text("You made a diamond sword", 1);
				weapon = "diamond_sword";
				document.getElementById("weapon").value="weapon =" + weapon;
		}
		else{
			c_text("You are short of resources...", 1)	;
		}
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
function reducefire() {
	fire-=1;
}
function startFire() {
	
	 if(wood >= 5) {
	 		wood-=5;
			fire+=1;
			window.setTimeout(reducefire, 30000);
			document.getElementById("wood").value =  wood;
			c_text("You have started a fire", 1);
			document.getElementById("wood").value = "wood: " +wood;
			countdownFire=30;
			window.setTimeout(needFire, 1000);
			

			
	 }else {
	 	c_text("Not enough wood", 1);
	 }
}

var traps= 0;
function makeTrap() {
	 if(wood >= 10) {
		  c_text("You created A TRAP!!", 1);
	 		wood -= 10;
			traps += 1;
			document.getElementById("traps").value = "traps: " + traps;
			document.getElementById("wood").value = "wood: " + wood;			
	 }else {
	 	c_text("Not enough wood", 1);
	 }
}

function checkTraps(){
		if (traps >= 1) {
			for (i = 0; i < traps; i++){
				amount_l = Math.round(Math.random()*10);
				amount_f = Math.round(Math.random() * 5);
				leather += amount_l;
				fur +=  amount_f;
				traps -= 1;
				c_text("The traps contained " + amount_l + " leather and " + amount_f + " fur.", 1 );
				document.getElementById("leather").value =  leather; 
				document.getElementById("leather").value = "leather: " + leather;
				document.getElementById("traps").value = traps;
				document.getElementById("traps").value="traps: " + traps;
				document.getElementById("fur").value = fur;
				document.getElementById("fur").value="fur: " + fur;
			}
		}
		else {
			c_text("You have no traps, idiot...", 1);
		}
}

function trade() {
	var chooseNum =Math.round(Math.random()*10);
switch(chooseNum) {
	case 1:
	case 2:
	
				var firstCase = confirm("Would you like to trade 20 leather for 1 gem?");
				if(firstCase === false){
					c_text("FINE DON'T TRADE! I DONT CARE!", 1);
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
						c_text("You don't have enough leather...", 1);
					}
					break;
	case 4:
	case 5:
	case 6:
			var secondCase = confirm("Would you like to trade 100 wood for 10 fur?");
				if(secondCase === false){
					c_text("FINE DON'T TRADE! I DONT CARE!", 1);
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
						c_text("You don't have enough wood...", 1);
				}
				break;
	case 7:
	case 8:
	
				var thirdCase = confirm("Would you like to trade 10 gems for 1 diamond?");
				if(thirdCase === false){
					c_text("FINE DON'T TRADE! I DONT CARE!", 1);
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
						c_text("You don't have enough gems...", 1);
				}
				break;
	case 10: 
				var fourthCase = confirm("Would you like to trade 1000 wood for 1 diamond?");
				if(fourthCase === false){
					c_text("FINE DON'T TRADE! I DONT CARE!", 1);
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
						c_text("You don't have enough wood...", 1);
				}
				break;
	default:
	
			   var fifthCase = confirm("Would you like to trade 50 leather for 5 gems?");
			   if(fifthCase === false){
					c_text("FINE DON'T TRADE! I DONT CARE!", 1);
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
						c_text("You don't have enough leather...", 1);
				}
				break;
}
}

function makePickaxe() {
	if(wood >= 20 && leather >= 5) {
			pickaxe+=1;
			wood -= 20;
			leather -= 5;
			pick_durab+=100;
			document.getElementById("pick_durab").value =  pick_durab; 
		    document.getElementById("pick_durab").value = "Pick Durability: " + pick_durab;	
			document.getElementById("pickaxe").value =  pickaxe; 
		    document.getElementById("pickaxe").value = "pickaxe: " + pickaxe;	
			document.getElementById("wood").value =  wood; 
		    document.getElementById("wood").value = "wood: " + wood;	
		    document.getElementById("leather").value =  leather; 
			document.getElementById("leather").value = "leather: " + leather;	
			c_text("You have made a pickaxe", 1);
			
		}else {
			c_text("YOU DONT HAVE ENOUGH WOOD AND LEATHER", 1);
		
		}
}

function mining() {
		if(pickaxe>=1) {
			
		}
		else {
			c_text("YOU AINT HAVE NO PICKAXES BOI", 1);
		}
}

function get_Iron() {
	if(pick_durab > 0) {
		iron +=1;
		pick_durab-=5;
		document.getElementById("pick_durab").value =  pick_durab; 
		document.getElementById("pick_durab").value = "Pick Durability: " + pick_durab;	
		document.getElementById("iron").value =  iron; 
		document.getElementById("iron").value = "iron: " + iron;	
		c_text("You mined 1 Iron", 1);
	}else {
		c_text("YOUR PICKAXE IS BROKEN BOI", 1);
	}
}

function get_diamond() {
	if(pick_durab > 0 && pick_durab>5) {
		diamonds +=1;
		pick_durab-=10;
		document.getElementById("pick_durab").value =  pick_durab; 
		document.getElementById("pick_durab").value = "Pick Durability: " + pick_durab;	
		document.getElementById("diamonds").value =  diamonds; 
		document.getElementById("diamonds").value = "diamonds: " + diamonds;	
		c_text("You mined 1 diamond", 1);
		
	}else if(pick_durab<=5 && pick_durab !==0) {
			c_text("YOUR PICKAXE AINT ABLE TO MINE DIAMOND", 1);
	}
		
	else {
		
		c_text("YOUR PICKAXE IS BROKEN BOI", 1);
	}
}



function makeHouse() {
	 if(wood >= 100) {
		  c_text("You created a house and got some villagers!!", 1);
	 		wood -= 100;
			house+=1;
			villagers+=4;
			document.getElementById("villagers").value = "villagers: " + villagers;
			document.getElementById("villagers").value = "villagers: " + villagers;		
			document.getElementById("house").value = "house: " + house;
			document.getElementById("wood").value = "wood: " + wood;		
				
	 }else {
	 	c_text("Not enough wood", 1);
	 }
}

function update() {
		c_text("You need a fire or you will die. If you dont make a fire in the next " + countdownFire + " seconds you will get hypothermia and die", 2);
		window.setInterval(countdownFire-=1, 1000);
}

function villagerWood() {
	wood+=villagers;
	document.getElementById("wood").value =  wood; 	
	document.getElementById("wood").value = "wood: " + wood;	

}
function die() {
	if(hypo===1) {
		alert("You have died! >:-)");
		location.reload();
	}
	
}







function needFire() {
		if(fire===0) {
		c_text("You need a fire or you will die. If you dont make a fire in the next " + countdownFire + " seconds you will get hypothermia and die", 2);
		window.setInterval(countdownFire-=1, 1000);
			if(countdownFire===0){
				hypo = 1;
			}
		}else{
		countdownFire=30;
		hypo = 0;	
		c_text("", 2);
		
}
window.setInterval(die, 30000);
}
function ironMining() {  
	if(pick_durab >= 3*ironMiners) {
	iron+=ironMiners;
	document.getElementById("iron").value =  iron; 	
	document.getElementById("iron").value = "iron: " + iron;	
	pick_durab -= 3 * ironMiners;
	document.getElementById("pick_durab").value =  pick_durab; 	
	document.getElementById("pick_durab").value = "Pick Durability: " + pick_durab;	
}
}
	

window.setInterval(villagerWood, 5000);
window.setInterval(ironMining, 5000);
window.setInterval(needFire, 1000);


function makeRifle() {
	 if(wood >= 30 && iron >= 10) {
			 secWeapon = "Hunting Rifle";
		}else {
			c_text("You don't have enough resources.", 1);
		}
}

function makeBullets() {
	if(iron >= 1) {
		bullet += 1;	
	}else {
		c_text("You need iron", 1);	
	}
}

function makeBow() {
	if(wood >= 30 && fur >= 5) {
			secWeapon = "Bow";
	}else{
		c_text("You are short of resources.", 1);	
	}
}

function hunting() {
	//<---JQuery--->
		$('#areaImage').hide(10);
		$('#huntingScreen').show(10);
		$('.area').hide(10);
	//<---JQuery--->	
}

function attackM() {
	//Hunting Melee
	if(weapon === "wooden_sword"){
				if (survivalRate <= 0.25 && killRate <= 0.25) {
					c_text("You survived and slayed the " + creature, 3);
					
				}
	
				else if(survivalRate <= 0.25 && killRate >= 0.25) {
					c_text("You lived to tell the tale but the " + creature + " still lives.", 3);
				}
	
				else{
					c_text("The " + creature + " killed you.", 3);
					die();
				}
}


if(weapon === "iron_sword"){
				if (survivalRate <= 0.5 && killRate <= 0.5) {
					c_text("You survived and slayed the " + creature, 3);
					
				}
	
				else if(survivalRate <= 0.5 && killRate >= 0.5) {
					c_text("You lived to tell the tale but the " + creature + " still lives.", 3);
				}
	
				else{
					c_text("The " + creature + " killed you.", 3);
					die();
				}
}



if(weapon === "diamond_sword"){
				if (survivalRate <= 0.75 && killRate <= 0.75) {
					c_text("You survived and slayed the " + creature, 3);
					
				}
	
				else if(survivalRate <= 0.75 && killRate >= 0.75) {
					c_text("You lived to tell the tale but the " + creature + " still lives.", 3);
				}
	
				else{
					c_text("The " + creature + " killed you.", 3);
					die();
				}
}	
}


function attackR() {
	if(secWeapon === "Hunting Rifle" && Bullets >= 1){
					if(survivalRate <= 1 && killRate <= 1){
						c_text("You killed the dood.", 3);	
					}	
					else{
						c_text("You are so bad a 100 percent kill and survival rate can't save you.", 3)	;
					}
				
}


if(secWeapon === "Bow" && arrow >= 1){
					if(survivalRate <= 0.7 && killRate <= 0.7){
						c_text("You killed the dood.", 3);	
					}	
					else if(survivalRate <= 0.7 && killRate >= 0.7){
						c_text("You survived but the beast still lives.", 3);	
					}	
					else{
						c_text("You were killed by the " + creature + "!", 3);
					}
				
}






































}












// JQuery




function iMiner(change){
	 if(villagers > 0){
		villagers-=change;
		ironMiners+=change; 	
		document.getElementById("villagers").value = "Villagers: " + villagers;	
		document.getElementById("ironMiners").value = "Iron Miners: " + ironMiners;
	 }else{
		 c_text("You don't have any villagers to become miners", 1);
	 }
}


function screenChange(id){
		$('.crafting').hide(10);
		$('.village').hide(10);
		$('.area').hide(10);
		$('.cave').hide(10);
		$('.mine').hide(10);
		$('#huntingScreen').hide(10);
		switch(id){
			case 0:
				$('.crafting').show(10);
				break;
			case 1:
				$('.village').show(10);
				break;
			case 2:
				$('.area').show(10);
				break;
			case 3:
				$('.cave').show(10);
				break;
			case 4:
				if(pick_durab > 0){
						$('.mine').show(10);
						break;
				}else{
						c_text("YOU AINT HAVE NO PICKAXES BOI", 1);
						break;
				}
				break;
			default:
				$('.crafting').show(10);
				break;
		}
}































































