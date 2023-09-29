//Get references of the list, input, and add button
const listReference = document.querySelector('ul');
const inputReference = document.querySelector('#item');
const addButtonReference = document.querySelector('div button');

//Setup event functions
function getInput() {
	return inputReference.value;
}

function addItem(itemText) {
	//Create new list item
	const listItem = document.createElement('li');

	//Add new span item
	listItem.appendChild(createSpanItem(itemText));

	//Add delete button
	listItem.appendChild(createDeleteButton(listItem));

	//Add list item to list
	listReference.appendChild(listItem);
}

function createSpanItem(text) {
	//Create the span
	const spanItem = document.createElement("span");
	//Set the text
	spanItem.textContent = text;
	//Return the span
	return spanItem;
}

function createDeleteButton(listItem) {
	//Create button
	const button = document.createElement("button");
	//Set the text
	button.textContent = "Delete";
	//Set the delete event
	button.onclick = () => listReference.removeChild(listItem);
	//Return the button
	return button;
}

function clearInputBox() {
	inputReference.value = "";
}

function setFocusOnInput() {
	inputReference.focus();
}

function handleAddButtonClick() {
	//Get the input item
	let input = getInput();
	//Add the item to the list
	addItem(input);
	//Clear the input box
	clearInputBox();
	//Set focus back to the input box
	setFocusOnInput();
}

//Add events to add button on click
addButtonReference.addEventListener("click", handleAddButtonClick);