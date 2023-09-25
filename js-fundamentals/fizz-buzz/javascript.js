function fizzbuzz(number) {
	let result = "";
	//Add Fizz if divisible by 3
	if (number % 3 == 0) {
		result += "Fizz";
	}
	//Add Buzz if divisible by 5
	if (number % 5 == 0) {
		result += "Buzz";
	}

	//Default to original number if no FizzBuzz
	if (result == "") {
		result = number;
	}

	return result;
}


let input = parseInt(prompt("Please enter a number to FizzBuzz to: "));

for (let i = 1; i <= input; i++) {
	console.log(fizzbuzz(i));
}
