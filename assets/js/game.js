/*
 * Author: Alex P
 * Project Name: Psych-Game
 * Version: 1
 * Date: 08.04.17
 * URL:https://itsokayitsofficial.github.io/Psych-Game/
 */


var rannum = Math.floor((Math.random() * 100) + 1);
var wins = 0;
var loses = 0;
var guess = 0;
var counter = 0;
var maxGuesses = 5; 

document.getElementById('checkBtn').onclick = function () {
	var guess = document.getElementById("guess").value;
	checkGuess(guess);
	counter++;
    
	if (counter == maxGuesses) {
		alert("You Lose!");
		document.getElementById("guess").value = "";
		document.getElementById("loses").innerHTML = (loses + 1);
	}
};

function checkGuess(guess){
    if (guess == rannum){ //if playerguess = rannum player wins
		alert("You win!");
		document.getElementById("guess").value= "";
		document.getElementById("wins").innerHTML = (wins + 1);
	}
	
    if (guess > rannum){ //if the player's guess is higher than the random number alert too high
        alert("Too high!");
        document.getElementById("guess").value= "";
    }

    else if (guess < rannum){ //if the player's guess is lower than the random number alert too low
    alert("Too low!");
         document.getElementById("guess").value= '';
	}
	
};

function reset() {
	var rannum = Math.floor((Math.random() * 100) + 1);
	var wins = 0;
	var loses = 0;
	var guess = 0;
	var counter = 0;
	var maxGuesses = 5;
	document.getElementById("wins").value = "";
	document.getElementById("loses").value = "";	
};