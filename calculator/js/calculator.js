//Display
const DISPLAY = $('#display');
//Max display length
const MAX_LENGTH = 19;
//Calculator states
const CALC_STATES = {
	zero: "zero",//Starts at 0, but numbers will override it
	preOperation: "pre-operation",//Will wait for operation. Numbers will add to display
	operation: "operation",//Will wait for a number. Other operations will override it
	postOperation: "post-operation"//Will wait for = or other operations. Numbers will add to display.
}
//Set initial state
let calcState = CALC_STATES.zero;
//Set variables
let preOperation = 0;
let currentOperation = null;
let postOperation = null;
//Variables used when you hit = twice in a row
let prevOperation = null;
let prevPostOperation = null;

//Run the operation
function getOperationResult(val1, val2, operation) {
	//Convert number strings to floats
	const num1 = parseFloat(val1);
	const num2 = parseFloat(val2);
	//Run the operation
	const result = operation(num1, num2);

	//Return "Error" if NaN
	if (isNaN(result)) {
		return "Error";
	}

	//Return as a string
	return result.toString();
}

//Convert number into displayable length
function shortenText(text, isNumber) {
	//Set max length based on if it's a number or formula
	const maxLength = isNumber ? MAX_LENGTH - 2 : MAX_LENGTH;
	//Check if not pass max length
	if (text.length <= maxLength) {
		//Return as is
		return text;
	}

	//Convert to max length 
	return text.slice(0, maxLength);
}

//Update the display
function updateDisplay(text, isNumber) {
	//Shorten the text to fit on the display
	displayText = shortenText(text, isNumber);
	//Set the display
	DISPLAY.text(displayText);
	//Return the text to reuse if shortened
	return displayText;
}

//Trigger on button press
function buttonPressed(buttonInfo) {
	//Call the delegate for each type
	buttonTypes.filter((b) => b.type == buttonInfo.buttonType)[0].delegate(buttonInfo);
}

//Add a number to the display
function addNumber(number) {
	switch (calcState) {
		case CALC_STATES.zero://If the state is 0 then replace the display with the number
			//Ignore if you're trying to start with 0
			if (number == "0") {
				return;
			}
			//Update display and pre operation value
			preOperation = updateDisplay(number, true);
			//Update the state
			calcState = CALC_STATES.preOperation;
			//Return
			return;
			break;
		case CALC_STATES.preOperation://If the state is pre operation then add the number to the end of the display
			//Update display and pre operation value
			preOperation = updateDisplay(preOperation + number, true);
			//Return
			return;
			break;
		case CALC_STATES.operation://If the state is operation then switch to post operation
			//Update display and post operation value
			postOperation = updateDisplay(number, true);
			//Update the state
			calcState = CALC_STATES.postOperation;
			//Return
			return;
			break;
		case CALC_STATES.postOperation://If the state is post operation then add the number to the end of the display
			//Update display and post operation value
			postOperation = updateDisplay(postOperation + number, true);
			//Return
			return;
			break;
	}
}

//Set the operation
function setOperation(operation) {
	//If already on post operation then calculate the previous operation as the new pre operation
	if (calcState == CALC_STATES.postOperation) {
		//Calculate the previous operation
		calculate();
	}
	//Update the operation
	currentOperation = operation;
	//Update display
	updateDisplay(preOperation + " " + operation, false);
	//Update the state
	calcState = CALC_STATES.operation;
}

//Clear
function clear() {
	//Update the variables
	preOperation = 0;
	currentOperation = null;
	postOperation = null;
	prevOperation = null;
	prevPostOperation = null;
	//Reset the status
	calcState = CALC_STATES.zero;
	//Update the display
	updateDisplay("0", true);
}

//Calculate
function calculate() {
	//Get the delegate for the selected operation
	const operationDelegate = operations.filter((op) => op.type == currentOperation)[0].delegate;

	//Run the operation
	const calculatedValue = getOperationResult(preOperation, postOperation, operationDelegate);

	//Grab the operation and post operation values to reuse after clearing
	const saveOperation = currentOperation;
	const savePostOperation = postOperation;

	//Clear the previous results
	clear();

	//Fill in the new previous values
	prevOperation = saveOperation;
	prevPostOperation = savePostOperation;

	//Update the display and set the pre operation as the calculated value
	preOperation = updateDisplay(calculatedValue, true);
}

//Equal
function equal() {
	switch (calcState) {
		case CALC_STATES.zero://If the state is 0 then we either cleared or just calculated
			//Check for a previous calculation
			if (prevOperation != null && prevPostOperation != null) {
				//Set as the current values
				currentOperation = prevOperation;
				postOperation = prevPostOperation;
			}
			else {//Otherwise return
				return;
			}
			break;
		case CALC_STATES.operation://If the state is operation then keep the operation and calculate with post = pre value
			//Update post operation value using the pre operation value
			postOperation = preOperation;
			break;
		case CALC_STATES.postOperation://If the state is post operation then calculate like normal
			break;
		default:
			//Return
			return;
			break;
	}

	//Calculate
	calculate();
}