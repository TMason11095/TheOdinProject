//Add 7
function add7(number) {
	return number + 7;
}

//5 + 7 = 11
console.log(add7(5));


//Multiply
function multiply(number1, number2) {
	return number1 * number2;
}

//2 * 5 = 10
console.log(multiply(2, 5));


//Capitalize
function capitalize(text) {
	//Convert all to lowercase
	let allLower = text.toLowerCase();
	//Pull out the first char and uppercase it
	let firstUpperChar = allLower.charAt(0).toUpperCase();
	//Pull out the remaining string
	let lowerCaseHalf = allLower.slice(1);
	//Combine the two halves
	let capitalizedText = firstUpperChar + lowerCaseHalf;

	return capitalizedText;
}

//notCamelCase = Notcamelcase
console.log(capitalize("notCamelCase"));


//Last Letter
function lastLetter(text) {
	return text.slice(-1);
}

//abcd = d
console.log(lastLetter("abcd"));