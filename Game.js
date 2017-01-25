var dice = {
	sides: 6,
	roll: function () {
    		var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    		return randomNumber;
  	}
}

value1 = 0;
value2 = 0;


function StartGame() {
	document.getElementById("button1").disabled = true;	
    player1 = document.getElementById("player1").value;
	player2 = document.getElementById("player2").value;
	snakes = [{s: 99,e: 80}, {s: 78,e:74}, {s: 62,e: 19}, {s: 89,e: 24},{s: 17,e: 7}];
	ladders = [{s: 3,e: 43}, {s: 32,e: 85}, {s: 58,e: 83}, {s: 12,e: 92}];
	var p1 = new Image();
	p1.src = "G.png";
	var p2 = new Image();
	p2.src = "R.png";
	p1.setAttribute("height", "25px");
	p1.setAttribute("width", "25px");
	p2.setAttribute("height", "25px");
	p2.setAttribute("width", "25px");
    document.getElementById("1").appendChild(p1);
    document.getElementById("1").appendChild(p2);
    
	

    var button = document.getElementById("rollDiceButton2");
	button.onclick = function() {

		document.getElementById("rollDiceButton2").disabled = true;
		//console.log("r2" + document.getElementById("rollDiceButton2").disabled);
		var result = dice.roll();
		value2 += result;
		value2 = ifSnake(value2);
		value2 = ifLadder(value2);
        value2 = checkValue(value2,"rollDiceButton2","rollDice2",p2,result,player2);  
		document.getElementById("rollDiceButton1").disabled = false;
		//console.log("r1" + document.getElementById("rollDiceButton1").disabled);
    	};
    		

	var button = document.getElementById("rollDiceButton1");
	button.onclick = function() {
		document.getElementById("rollDiceButton1").disabled = true;
		var result = dice.roll();
		value1 += result;
		value1 = ifSnake(value1);
		value1 = ifLadder(value1);
        value1 = checkValue(value1,"rollDiceButton1","rollDice1",p1,result,player1);
		document.getElementById("rollDiceButton2").disabled = false;
	};   
 
}           

function checkValue(value,button,div,player,result,playerName){
	 if(value < 100){
		document.getElementById(value+"").appendChild(player);
		printNumber(result,div);
	} else if( value != 100) {
		value  -= result;
	} else {
		console.log(div);
		element = document.getElementById(div);
		element.innerHTML = "Won!!";
		element.innerHTML = " " + playerName + " \nWon!!";
    		console.log("p2 won");
	}
	return value;
	
}

function ifSnake(value) {
	snakes = this.snakes;
	for (var key in snakes) {
       		if (snakes[key].s == value) {
            		 value = snakes[key].e;
                	 return value;
            	}
        }
	return value;
}

function ifLadder(value) {
	ladders = this.ladders;
	for (var key in ladders) {
            if (ladders[key].s == value) {
                value = ladders[key].e;
                return value;
            }
  
        }
	return value;
}

function disableButton(button) {
	document.getElementById(button).onclick = function() {
    		this.disabled = true;
	};
}

function enableButton(button) {
	document.getElementById(button).onclick = function() {
	 		this.disabled = false;
	};
}

function printNumber(number,button) {
  	var rollDice = document.getElementById(button);
  	rollDice.innerHTML = number;
}

