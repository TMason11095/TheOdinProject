//Button type enum
const BUTTON_TYPES = {
	number: "number",
	operator: "operator",
	clear: "clear",
	equal: "equal"
};

const OPERATION_TYPES = {
	division: "/",
	multiplication: "*",
	subtraction: "-",
	addition: "+"
};

//Operations with delegates
let operations = [
	{
		type: OPERATION_TYPES.division,
		delegate: (num1, num2) => {
			//Error if dividing by 0
			if (num2 == 0) {
				return "Error";
			}
			//Divide like normal
			return num1 / num2;
		}
	},
	{
		type: OPERATION_TYPES.multiplication,
		delegate: (num1, num2) => num1 * num2
	},
	{
		type: OPERATION_TYPES.subtraction,
		delegate: (num1, num2) => num1 - num2
	},
	{
		type: OPERATION_TYPES.addition,
		delegate: (num1, num2) => num1 + num2
	}
];

//Button types with delegates
let buttonTypes = [
	{
		type: BUTTON_TYPES.number,
		delegate: (buttonInfo) => addNumber(buttonInfo.displayText)
	},
	{
		type: BUTTON_TYPES.operator,
		delegate: (buttonInfo) => setOperation(buttonInfo.displayText)
	},
	{
		type: BUTTON_TYPES.clear,
		delegate: (buttonInfo) => clear()
	},
	{
		type: BUTTON_TYPES.equal,
		delegate: (buttonInfo) => equal()
	}
];

//Button class
class Button {
	constructor(displayText, buttonType) {
		this.displayText = displayText;
		this.buttonType = buttonType;
	}
}

//Setup button order
const BUTTON_LAYOUT = [
	//Row 1 (7 8 9 /)
	[
		new Button("7", BUTTON_TYPES.number),
		new Button("8", BUTTON_TYPES.number),
		new Button("9", BUTTON_TYPES.number),
		new Button(OPERATION_TYPES.division, BUTTON_TYPES.operator)
	],
	//Row 2 (4 5 6 X)
	[
		new Button("4", BUTTON_TYPES.number),
		new Button("5", BUTTON_TYPES.number),
		new Button("6", BUTTON_TYPES.number),
		new Button(OPERATION_TYPES.multiplication, BUTTON_TYPES.operator)
	],
	//Row 3 (1 2 3 -)
	[
		new Button("1", BUTTON_TYPES.number),
		new Button("2", BUTTON_TYPES.number),
		new Button("3", BUTTON_TYPES.number),
		new Button(OPERATION_TYPES.subtraction, BUTTON_TYPES.operator)
	],
	//Row 4 (C 0 = +)
	[
		new Button("C", BUTTON_TYPES.clear),
		new Button("0", BUTTON_TYPES.number),
		new Button("=", BUTTON_TYPES.equal),
		new Button(OPERATION_TYPES.addition, BUTTON_TYPES.operator)
	]
];

//Generate buttons
(function generateButtons() {
	//Get the buttons container
	const buttonsContainer = $('#buttons');
	//Loop through the button layout by row
	for (const buttonRow of BUTTON_LAYOUT) {
		//Create the row container
		const row = $('<div class="flex row gap"></div>');
		//Loop through the button row
		for (const buttonInfo of buttonRow) {
			//Create the botton
			const button = $('<button class="button"></button')
				.addClass(buttonInfo.buttonType)
				.text(buttonInfo.displayText)
				.click(() => buttonPressed(buttonInfo));
			//Add the button to the row
			row.append(button);
		}
		//Add the row to the container
		buttonsContainer.append(row);
	}
})();

