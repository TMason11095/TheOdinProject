const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

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

function getUserChoice() {
	let userChoice = prompt("Please type your choice:");
	return userChoice;
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

function getResultText(resultValue, playerSelection, computerSelection) {
	//0 = Draw
	if (resultValue == 0) {
		return "Draw! " + playerSelection + " ties " + computerSelection;
	}
	//Positive = Win
	if (resultValue > 0) {
		return "You Win! " + playerSelection + " beats " + computerSelection;
	}
	//Negative = Lose
	if (resultValue < 0) {
		return "You Lose! " + computerChoice + " beats " + playerChoice;
	}
	//Anything else = Error
	return "Not a valid result";
}

function getOverallWinner(playerWinCount, playerLossCount) {
	let result = "";
	//Draw
	if (playerWinCount == playerLossCount) {
		result = "Draw!";
	}
	//Win
	if (playerWinCount > playerLossCount) {
		result = "You Win!";
	}
	//Lose
	if (playerWinCount < playerLossCount) {
		result = "You Lose!";
	}
	//Error
	if (result == "") {
		return "Error deciding winner";
	}

	//Add the score to the end
	result += " " + playerWinCount + " - " + playerLossCount;
	//Return
	return result;
}

function game() {
	const numberOfGames = 5;
	let winCount = 0;
	let lossCount = 0;

	//Play the set number of games
	for (let i = 0; i < numberOfGames; i++) {
		//Get the player's choice
		let userChoice = getUserChoice();
		//Get the computer's choice
		let computerChoice = getComputerChoice()
		//Get the game result
		let result = playRps(userChoice, computerChoice);
		//Display the results
		console.log(getResultText(result, userChoice, computerChoice));
		//Update the scores
		if (result > 0) {
			winCount++;
		}
		else if (result < 0) {
			lossCount++;
		}
	}

	//Display the overall winner
	console.log(getOverallWinner(winCount, lossCount));
}

game();
