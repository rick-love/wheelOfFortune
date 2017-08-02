// Scripts to create:
// 	submit guess
// 	validate guess entered is valid text with regex
// 	create a new player - regex
// 	spin the wheel - animation
// 	submit the solution - getElement
// 	bankrupt-
// 	add value to player if guess is correct
// 	change player when guess is not correct
// 	end game




	// submit guess



	// spin the wheel - animation
	// submit the solution - getElement
	// bankrupt-
	// add value to player if guess is correct
	// change player when guess is not correct
	// end game
	var score = 0;
	var lettersSelected = [];
	var playerIndex = 0;
	var player = [];
	var puzzleObjectIndex = 0;
	var currentGame = [];
	var el;

	var puzzleObject = {
		food: "pizza",
		Country: "germany",
		hobby: "surfing"
	}

// creates a new game, puzzle, player object
function game(puzzle, player, score){
	this.puzzle = puzzle;
	this.player = player;
	this.score = score;
}

function puzzle(letter, letterIndex){
	this.letter = letter;
	this.letterIndex = letterIndex;
}

function player(image, name, score, index){
	this.image = image;
	this.name = name;
	this.score = score;
	this.playerIndex = index;
}

var newgame = new game;
// var newPuzzle = new puzzle;
// var newplayer = new player;

game.prototype = Object.create(puzzle.prototype);
// game.prototype = Object.create(player.prototype);



var displayPuzzle = function(puzzleObject) {
	var keys = Object.keys(puzzleObject)
	var randomGame = (puzzleObject[keys[ keys.length * Math.random() << 0]]);
	currentGame = randomGame.split('');
	console.log(currentGame)
	for(i = 0; i < currentGame.length; i++){
		var el = document.createElement('span');
		el.setAttribute("class", "puzzleLetters");
		el.innerHTML = '<span>' + currentGame[i] + '</span>'
		document.getElementById('puzzle').appendChild(el);
	}    
};



// function getSpinValue(){
// 	var winningSegment = theWheel.getIndicatedSegment();
// 	alert(winningSegment);

// 	theWheel.segments[].text
// }


// function checkLetter (letter){

// }



document.getElementById('spinButton').addEventListener('click', function(){
	theWheel.startAnimation();
});

document.getElementById('reset').addEventListener('click', function(){
	resetWheel();
});

document.getElementById('startGame').addEventListener('click', function(){
	displayPuzzle(puzzleObject);
});





