const SKETCH_CONTAINER = document.querySelector('#sketch-container');
const ROW_COUNT = 16;
const COLUMN_COUNT = 16;

//Setup grid
(function setupGrid() {
	//Create rows
	//let sketchColumns = [];
	for (let i = 0; i < ROW_COUNT; i++) {
		//Create row
		const sketchRow = document.createElement('div');
		//Set attributes
		sketchRow.setAttribute('class', "flex center");

		//Create column blocks
		for (let j = 0; j < COLUMN_COUNT; j++) {
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
})()