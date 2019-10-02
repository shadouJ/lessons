//This function returns a random number between the given min and max
export const getRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max-min)) + min;
}

//This function draws the plants based on the inputs and picture provided
const drawPlants = (canvas, plantSrc, numPlants) => {
	//check if canvas exists
	if (!canvas || !canvas.getContext){
		return null;
	}
	const context = canvas.getContext("2d");
	var width = canvas.width / (numPlants+2);
	var height = canvas.height / 3;
	
	//Create new plant image and load them onto canvas
	var plant = new Image();
	plant.src = plantSrc;
	plant.onload = function(){
		//context.drawImage(img,x,y,width,height), coordinates {x,y}
		//Note: the -1 used for the limit accounts for integer division causing a 6th plant to be drawn when numPlants = 5.
		for (var x = width; x < canvas.width-width-1; x += width) {
			context.drawImage(plant, x, height, width, height);
		}
	};
}

//This function draws the canvas based on the numPlants
export const drawNextCanvas = (canvas, vueObjPtr) => {
	//The following line resets the canvas (i.e. erase its contents and reset all the properties)
	// eslint-disable-next-line
	canvas.width = canvas.width;
	canvas.height = 0.3*canvas.width;

	//draw the plants in the center
	drawPlants(canvas, vueObjPtr.plant, vueObjPtr.numPlants);
}

//This function adds the next tile to the garden bed
export const addNextTile = (canvas, vueObjPtr) => {
	const context = canvas.getContext("2d");
	//size of one brick (+2 accounts for edge tiles)
	var width = canvas.width / (vueObjPtr.numPlants+2);
	var height = canvas.height / 3;
	//var used by start location of tiles on canvas.
	var xPos = 0;
	var yPos = 0;

	//check for adding at the top/bottom edges
	if (vueObjPtr.numTiles < 2*vueObjPtr.numPlants){
		if (vueObjPtr.numTiles%2 == 0){
			//fillRect(x,y,width,height)
			xPos = width+(vueObjPtr.numTiles/2)*width;
			yPos = 1;
		}
		else {
			xPos = width+(Math.floor(vueObjPtr.numTiles/2))*width;
			yPos = 2*height-1;
		}
	}
	//Check for adding to left/right edges
	else if (vueObjPtr.numTiles < 2*vueObjPtr.numPlants+3){
		xPos = 1;
		//check for drawing the border correctly
		if (vueObjPtr.edgeCounter==0)
			yPos = 1;
		else
			yPos = height*vueObjPtr.edgeCounter -1;
		//update edge counter for next cycle
		vueObjPtr.edgeCounter +=1;
		if (vueObjPtr.edgeCounter == 3){
			vueObjPtr.edgeCounter = 0;
		}
	}
	else {
		xPos = (vueObjPtr.numPlants+1)*width -1;
		if (vueObjPtr.edgeCounter==0)
			yPos = 1;
		else
			yPos = height*vueObjPtr.edgeCounter -1;
		//update edge counter for next cycle
		vueObjPtr.edgeCounter +=1;
		if (vueObjPtr.edgeCounter == 3){
			vueObjPtr.edgeCounter = 0;
		}
	}
	//increment counter
	vueObjPtr.numTiles += 1;

	//draw the tile along with its border
	context.strokeStyle='#000';
	context.strokeRect(xPos, yPos, width, height);

	context.fillStyle = "#ffcc00";
	context.fillRect(xPos, yPos, width, height);
}