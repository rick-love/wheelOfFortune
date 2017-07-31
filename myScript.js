// Scripts to create:
// 	submit guess
// 	validate guess entered is valid text with regex
// 	create a new player - regex
// 	spin the wheel - animation
// 	submit the solution - getElement
// 	bankrupt-
// 	add value to player if guess is correct
// 	change players when guess is not correct
// 	end game




	// submit guess



	// spin the wheel - animation
	// submit the solution - getElement
	// bankrupt-
	// add value to player if guess is correct
	// change players when guess is not correct
	// end game
var score = 0;
var puzzle = [];
var lettersSelected = [];
var playerIndex = 0;
var players = [];

// creates a new game, puzzle, player object
function Game(Puzzle, Player, Score){
	this.Puzzle = Puzzle;
	this.Player = Player;
}

function Puzzle(letter, letterIndex){
	this.letter = letter;
	this.letterIndex = letterIndex;
}

function Player(image, name, score, index){
	this.image = image;
	this.name = name;
	this.score = score;
	this.playerIndex = index;
}

var newGame = new Game;
var newPuzzle = new Puzzle;
var newPlayer = new Player;

Game.prototype = Object.create(Puzzle.prototype);
Game.prototype = Object.create(Player.prototype);

// enter a puzzle function
Game.prototype.enterPuzzle = function(puzzle){
  var result = puzzle.split("");
  // send result to keyboard
}

// check if is a letter
Game.prototype.checkIfLetter = function(x){
  var y = x.toString();
	var test = /[a-zA-Z]/g;
	  if(y.match(test)){
	  	return true;
        } else{
          alert("This is not a valid entry")
        }
}

Game.prototype.submitGuess = function(guess){
// 	var guess = document.getElementById('guess');
	
	if(checkIfLetter == true){
	for(var i = 0; i < this.Puzzle.length; i++){
		if (guess != this.Puzzle[i]){
			alert('That is incorrect');
			// switch player function
		} else {
			alert('Good Choice');
				}
		}	
	}
}

Puzzle.prototype.chosenLetters = function(guess){
	lettersSelected.push(guess);
}

// Player.prototype.nextPlayer = function(){
// 	if()
// }


