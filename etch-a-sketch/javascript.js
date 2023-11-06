const SKETCH_CONTAINER = $('#sketch-container');
const SKETCH_CONTAINER_SIZE = $('body').css('--sketch-container-size');
const GENERATE_BUTTON = $('#generate-grid');
const SQUARE_SIZE_MIN = 1;
const SQUARE_SIZE_MAX = 100;
const SQUARE_SIZE_INPUT = $('#square-size-input');

(function setupGridListener() {
	SKETCH_CONTAINER.mouseover(function (e) {
		//Ignore everything that isn't a block
		if (e.target.getAttribute('name') != 'block') {
			return;
		}

		//Add the black background class to the block
		e.target.classList.add('black-background');
	})
})();

(function setupGenerateButton() {
	//Add click event
	GENERATE_BUTTON.click(() => {
		//Clear the grid
		SKETCH_CONTAINER.empty();

		//Fill in the new grid
		//Get the number of blocks per side
		const squaresPerSide = SQUARE_SIZE_INPUT.val();
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
		$('html').css("--block-size", blockSize + "px");
		//Set row and column count
		const rowCount = squaresPerSide;
		const columnCount = squaresPerSide;
		//Build the grid
		for (let i = 0; i < rowCount; i++) {
			//Create row
			const sketchRow = $('<div class="flex center"></div>');

			//Create column blocks
			for (let j = 0; j < columnCount; j++) {
				//Create block
				const block = $('<div name="block"></div>')
				//Add block to row
				sketchRow.append(block);
			}

			//Add the row to the sketch container
			SKETCH_CONTAINER.append(sketchRow);
		}
	})
})();

(function triggerGenerateEvent() {
	//Trigger the button's click event
	GENERATE_BUTTON.trigger('click');
})();