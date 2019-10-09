//This function returns a random number between the given min and max
export const getRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max-min)) + min;
}

//Function is used to remove the blur and make the rectangles crisp. Since using CSS width=100%, need to readjust the canvas height and width correspondingly

const removeBlur = (canvas) => {
	//create a style object that returns width and height of th canvas
	let style = {
		height() {
			return +getComputedStyle(canvas).getPropertyValue('height').slice(0,-2);
		},
		width() {
			return +getComputedStyle(canvas).getPropertyValue('width').slice(0,-2);
		}
	}
	//set the correct attributes
	const dpi = window.devicePixelRatio;
	canvas.setAttribute('width', style.width() * dpi);
	canvas.setAttribute('height', style.height() * dpi);
}

//this function draws a rectangle and its border
const drawPlant = (context, xPos, yPos, width, height) => {
	//remove the blur
	xPos = parseInt(xPos) + 0.5;
	yPos = parseInt(yPos) + 0.5;

	//draw the border
	context.strokeStyle='black';
	context.strokeRect(xPos, yPos, width-2, height-2);

	//fill rectangle
	context.fillStyle = "#095702";
	context.fillRect(xPos, yPos, width-2, height-2);
}


//This function draws the plants based on the inputs and picture provided
const drawPlants = (canvas, plantSrc, numPlants) => {
	//check if canvas exists
	if (!canvas || !canvas.getContext){
		return null;
	}
	//remove blur by adjusting the canvas size
	removeBlur(canvas);

	const context = canvas.getContext("2d");
	var width = Math.floor(canvas.width / (numPlants+2));
	var height = Math.floor(canvas.height / 3 );

	//var used by start location of tiles on canvas.
	var xPos = 0;
	var yPos = height;

	for (var i=0 ; i<numPlants; i++) {
		xPos = xPos + width;

		drawPlant(context, xPos, yPos, width, height)
	}
	//This section can be uncommented and replace the above for loop to draw pictures instead if choose to use it.
	// Create new plant image and load them onto canvas
	// var plant = new Image();
	// plant.src = plantSrc;
	// plant.onload = function(){
	// 	//context.drawImage(img,x,y,width,height), coordinates {x,y}
	// 	//Note: the -1 used for the limit accounts for integer division causing a 6th plant to be drawn when numPlants = 5.
	// 	for (var i=0; i<numPlants; i++) {
	// 		xPos = xPos + width;
	// 		context.drawImage(plant, xPos, height, width, height);
	// 	}
	// };
}

//This function draws the canvas based on the numPlants
export const drawNextCanvas = (canvas, vueObjPtr) => {
	//The following line resets the canvas (i.e. erase its contents and reset all the properties)
	// eslint-disable-next-line
	canvas.width = canvas.width;

	//draw the plants in the center
	drawPlants(canvas, vueObjPtr.plant, vueObjPtr.numPlants);
}

//This function adds the next tile to the garden bed
export const addNextTile = (colour, canvas, vueObjPtr) => {
	const context = canvas.getContext("2d");
	//size of one brick (+2 accounts for edge tiles)
	var width = Math.floor(canvas.width / (vueObjPtr.numPlants+2));
	var height = Math.floor(canvas.height / 3 );
	//var used by start location of tiles on canvas.
	var xPos = 0;
	var yPos = 0;

	//check for adding at the top/bottom edges
	if (vueObjPtr.numTiles < 2*vueObjPtr.numPlants){
		if (vueObjPtr.numTiles%2 == 0){
			//fillRect(x,y,width,height)
			xPos = width+(vueObjPtr.numTiles/2)*width;
			yPos = 0;
		}
		else {
			xPos = width+(Math.floor(vueObjPtr.numTiles/2))*width;
			yPos = 2*height-1;
		}
	}
	//Check for adding to left/right edges
	else if (vueObjPtr.numTiles < 2*vueObjPtr.numPlants+3){
		xPos = 0;
		//check for drawing the border correctly
		if (vueObjPtr.edgeCounter==0)
			yPos = 0;
		else
			yPos = height*vueObjPtr.edgeCounter;
		//update edge counter for next cycle
		vueObjPtr.edgeCounter +=1;
		if (vueObjPtr.edgeCounter == 3){
			vueObjPtr.edgeCounter = 0;
		}
	}
	else {
		xPos = (vueObjPtr.numPlants+1)*width;
		if (vueObjPtr.edgeCounter==0)
			yPos = 0;
		else
			yPos = height*vueObjPtr.edgeCounter;
		//update edge counter for next cycle
		vueObjPtr.edgeCounter +=1;
		if (vueObjPtr.edgeCounter == 3){
			vueObjPtr.edgeCounter = 0;
		}
	}
	//increment counter
	vueObjPtr.numTiles += 1;

	//draw the tile along with its border
	drawTile(colour, context, xPos, yPos, width, height);
}

//this function draws a rectangle and its border
const drawTile = (colour, context, xPos, yPos, width, height) => {
	xPos = parseInt(xPos) + 0.5;
	yPos = parseInt(yPos) + 0.5;
	//draw the border
	context.strokeStyle='black';
	context.strokeRect(xPos, yPos, width-2, height-2);

	//fill rectangle
	if (colour === ""){
		context.fillStyle = "#ffcc00";
	}
	else {
		context.fillStyle = colour;
	}
	context.fillRect(xPos, yPos, width-2, height-2);
}

export const scrollToRecent = () =>{
	//keep the scroll to observe newly added values in table body
	var element = document.getElementById("tableBody");
	if (element != null){
		//large value used to scroll to the bottom
		element.scrollTop = 10000000;
	}
}