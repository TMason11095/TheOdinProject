const SKETCH_CONTAINER = document.querySelector('#sketch-container');
const SKETCH_CONTAINER_SIZE = getComputedStyle(document.body).getPropertyValue('--sketch-container-size');
const GENERATE_BUTTON = document.querySelector('#generate-grid');
const SQUARE_SIZE_MIN = 1;
const SQUARE_SIZE_MAX = 100;
const SQUARE_SIZE_INPUT = document.querySelector('#square-size-input');

(function setupGridListener() {
	SKETCH_CONTAINER.onmouseover = function (e) {
		//Ignore everything that isn't a block
		if (e.target.getAttribute('name') != 'block') {
			return;
		}

		//Add the black background class to the block
		e.target.classList.add('black-background');
	}
})();

(function setupGenerateButton() {
	//Add click event
	GENERATE_BUTTON.onclick = () => {
		//Clear the grid
		//Loop till out of children
		while (SKETCH_CONTAINER.firstChild != null) {
			//Remove the last child
			SKETCH_CONTAINER.removeChild(SKETCH_CONTAINER.lastChild);
		}

		//Fill in the new grid
		//Get the number of blocks per side
		const squaresPerSide = SQUARE_SIZE_INPUT.valueAsNumber;
		//Check if valid number
		if (isNaN(squaresPerSide)) {
			alert("Please enter a valid number.");
			return;
		}
		//Check if within accepted value range
		if (squaresPerSide < SQUARE_SIZE_MIN || squaresPerSide > SQUARE_SIZE_MAX) {
			alert("Please enter a number between " + SQUARE_SIZE_MIN + " and " + SQUARE_SIZE_MAX + ".");
			return;
		}
		//Set block size based on the given count
		const blockSize = parseInt(SKETCH_CONTAINER_SIZE) / squaresPerSide;
		document.documentElement.style.setProperty("--block-size", blockSize + "px");
		//Set row and column count
		const rowCount = squaresPerSide;
		const columnCount = squaresPerSide;
		//Build the grid
		for (let i = 0; i < rowCount; i++) {
			//Create row
			const sketchRow = document.createElement('div');
			//Set attributes
			sketchRow.setAttribute('class', "flex center");

			//Create column blocks
			for (let j = 0; j < columnCount; j++) {
				//Create block
				const block = document.createElement('div');
				//Set attributes
				block.setAttribute('name', "block");
				//Add block to row
				sketchRow.appendChild(block);
			}

			//Add the row to the sketch container
			SKETCH_CONTAINER.appendChild(sketchRow);
		}
		console.log(blockSize);
	}
})();

(function triggerGenerateEvent() {
	//Create the onclick event
	const onclickEvent = new Event("click");
	//Trigger the event
	GENERATE_BUTTON.dispatchEvent(onclickEvent);
})();