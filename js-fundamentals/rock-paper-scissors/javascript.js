const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const ROUND_RESULT_ELEM = document.querySelector('#round-result');
const GAME_RESULT_ELEM = document.querySelector('#game-result');
const SCORE_TO_WIN = 5;

let roundCount = 0;
let winCount = 0;
let lossCount = 0;

function getRps(number) {
	switch (number) {
		case 1:
			return ROCK;
			break;
		case 2:
			return PAPER;
			break;
		case 3:
			return SCISSORS;
			break;
	}

	//Not an RPS value
	return number;
}

function getComputerChoice() {
	//Return random RPS
	//Random number between 1 and 3
	let rngNumber = Math.floor(Math.random() * 3) + 1;
	//Assign number to RPS
	let rngRps = getRps(rngNumber);
	//Return choice
	return rngRps
}

function playRps(playerSelection, computerSelection) {
	//Convert selections to lowercase to use in comparisons
	playerChoice = playerSelection.toLowerCase();
	computerChoice = computerSelection.toLowerCase();

	//Return results as numbers
	//Draw = 0
	if (playerChoice == computerChoice) {
		return 0;//Draw
	}
	//Win = 1
	if ((playerChoice == ROCK && computerChoice == SCISSORS) ||
		(playerChoice == PAPER && computerChoice == ROCK) ||
		(playerChoice == SCISSORS && computerChoice == PAPER)) {
		return 1;//Win
	}
	//Lose = -1
	if ((computerChoice == ROCK && playerChoice == SCISSORS) ||
		(computerChoice == PAPER && playerChoice == ROCK) ||
		(computerChoice == SCISSORS && playerChoice == PAPER)) {
		return -1;
	}
	//Error = null
	return null;
}

function capitalize(text) {
	//Capitalize the first char
	return text.charAt(0).toUpperCase() + text.slice(1);
}

function getResultText(resultValue, playerSelection, computerSelection) {
	//0 = Draw
	if (resultValue == 0) {
		return "Draw! " + capitalize(playerSelection) + " ties " + computerSelection + "!";
	}
	//Positive = Win
	if (resultValue > 0) {
		return "You Win! " + capitalize(playerSelection) + " beats " + computerSelection + "!";
	}
	//Negative = Lose
	if (resultValue < 0) {
		return "You Lose! " + capitalize(computerChoice) + " beats " + playerChoice + "!";
	}
	//Anything else = Error
	return "Not a valid result";
}

function getGameResults() {
	let result = "";
	//Draw
	if (winCount == lossCount) {
		result = "Draw!";
	}
	//Win
	if (winCount > lossCount) {
		result = "You Win!";
	}
	//Lose
	if (winCount < lossCount) {
		result = "You Lose!";
	}
	//Error
	if (result == "") {
		return "Error deciding winner";
	}

	//Add the score to the end
	result += " " + getScoreText();
	//Return
	return result;
}

function getScoreText() {
	return winCount + " - " + lossCount;
}

function isGameOver() {
	if (winCount >= SCORE_TO_WIN || lossCount >= SCORE_TO_WIN) {
		return true;
	}
	else {
		return false;
	}
}

function handleUserChoice(e) {
	//Reset the game if the game ended last round
	if (isGameOver()) {
		resetGame();
	}

	//Increment the round counter
	roundCount++;
	//Play the round
	playRound(e.target.value);
	//Update scores
	displayGameResults(getScoreText());
	//Check if the game ended
	if (isGameOver()) {
		//Display results
		displayGameResults(getGameResults());
	}
}

function playRound(userChoice) {
	//Get the computer's choice
	let computerChoice = getComputerChoice()
	//Get the game result
	let result = playRps(userChoice, computerChoice);
	//Update scores
	updateScores(result);
	//Display the results
	displayResults(getResultText(result, userChoice, computerChoice));
}

function updateScores(result) {
	if (result > 0) {
		winCount++;
	}
	else if (result < 0) {
		lossCount++;
	}
}

function displayResults(resultText) {
	ROUND_RESULT_ELEM.textContent = resultText;
}

function displayGameResults(resultText) {
	GAME_RESULT_ELEM.textContent = resultText;
}

function resetGame() {
	//Clear results
	displayResults("");
	displayGameResults("");
	//Reset counts
	roundCount = 0;
	winCount = 0;
	lossCount = 0;
	drawCount = 0;
}

//Setup button events
document.querySelectorAll('[name="choices"] button').forEach((btn) => btn.onclick = handleUserChoice);

//game();
