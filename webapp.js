// JavaScript Document




//jQuery

var wood = 0;

function day() {
	document.body.style.backgroundColor = "yellow";
		
}

function night() {
	document.body.style.backgroundColor = "black";
		
}

function grabWood() {
	wood+=1;
}

function startFire() {
	
	 if(wood >= 1) {
	 		wood-=1;
			document.write("You have started a fire");
			
	 }else {
	 	
	 }
}


