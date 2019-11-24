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

//This function draws the canvas based on the num red and blue blocks
export const drawNextCanvas = (canvas, vueObjPtr) => {
	//The following line resets the canvas (i.e. erase its contents and reset all the properties)
	// eslint-disable-next-line
	canvas.width = canvas.width;
	//check if canvas exists
	if (!canvas || !canvas.getContext){
		return null;
	}

	//initialise all colours to red
	for (var i=0; i<vueObjPtr.numRedBlocks+vueObjPtr.numBlueBlocks; i++){
		vueObjPtr.blocks.push({colour: 'red', xPos: 0, yPos: 0});
		vueObjPtr.key += 1;
	}
	//create random numbers for the array to set the colour to blue until num blue blocks reached.
	var temp = 0;
	while (temp < vueObjPtr.numBlueBlocks){
		var randNum = getRandomNumber(0, vueObjPtr.blocks.length);
		if (vueObjPtr.blocks[randNum].colour === 'red'){
			vueObjPtr.blocks[randNum].colour = 'blue';
			temp += 1;
		}
	}

	//draw the blocks randomly
	drawBlocks(canvas, vueObjPtr);
}

//This function draws the plants based on the inputs and picture provided
const drawBlocks = (canvas, vueObjPtr) => {
	var numRed = vueObjPtr.numRedBlocks;
	var numBlue = vueObjPtr.numBlueBlocks;

	//remove blur by adjusting the canvas size
	removeBlur(canvas);

	const context = canvas.getContext("2d");
	var width = 0;

	//determine width of the blocks, i.e. as total number of blocks increase, the size of block decreases at intervals defined below
	//0-20
	if ((numRed+numBlue) <= 20){
		width = Math.floor((canvas.width) / (7));
	} 
	//21-70
	else if (((numRed+numBlue) > 20) && ((numRed+numBlue) <= 72)){
		width = Math.floor((canvas.width) / (12));	
	}
	//71-100
	else if (((numRed+numBlue) > 71) && ((numRed+numBlue) <= 100)){
		width = Math.floor((canvas.width) / (14));	
	}
	//101-200
	else{
		width = Math.floor((canvas.width) / (20));	
	}

	var height = width;
	vueObjPtr.width = width;

	//check to make sure height is not large

	//var used by start location of tiles on canvas.
	var xPos = width/2;
	var yPos = canvas.height-height;

	for (var i=0 ; i<(numRed+numBlue); i++) {
		//get the block
		//store the location of the block
		vueObjPtr.blocks[i].xPos = xPos;
		vueObjPtr.blocks[i].yPos = yPos;
		drawBlock(vueObjPtr.blocks[i].colour, context, xPos, yPos, width, height);

		xPos = xPos + width;

		//check to draw on next line
		if (xPos >= canvas.width - width){
			xPos = width/2;
			yPos -= height;
		}
	}
}

//this function draws a rectangle and its border
const drawBlock = (colour, context, xPos, yPos, width, height) => {
	// console.log("xPos=" + xPos + ", yPos=" + yPos, + ", width=" + width);
	xPos = parseInt(xPos) + 0.5;
	yPos = parseInt(yPos) + 0.5;

	//draw the border
	if (colour === "#F5F85B"){
		context.strokeStyle="#F5F85B";
	}
	else {
		context.strokeStyle='black';
	}
	context.strokeRect(xPos, yPos, width-4, height-4);

	//fill rectangle
	if (colour === ""){
		context.fillStyle = "#ffcc00";
	}
	else {
		context.fillStyle = colour;
	}
	context.fillRect(xPos, yPos, width-4, height-4);
}

//This function takes the next block from the bag randomly
export const drawNextBlock = (canvas, vueObjPtr) => {
	if (vueObjPtr.blocks.length <= 0){
		return null;
	}
	//get the random index to take from the set of blocks
	var randNum = getRandomNumber(0, vueObjPtr.blocks.length);
	var colour = "#F5F85B";
	var b = vueObjPtr.blocks[randNum];

	//remove the tile along with its border from the canvas
	const context = canvas.getContext("2d");
	drawBlock(colour, context, b.xPos, b.yPos, vueObjPtr.width, vueObjPtr.width);

	//remove the block from the blocks array into taken array
	vueObjPtr.takenBlocks.push(b);
	vueObjPtr.blocks.splice(randNum,1);
}

//This function takes the two next blocks from the bag randomly without deleting them from the original array
export const drawNextTwoBlocks = (vueObjPtr) => {
	if (vueObjPtr.blocks.length <= 0){
		return null;
	}
	//get the random index to take from the set of blocks
	var randNum = getRandomNumber(0, vueObjPtr.blocks.length);

	//create another random index to take, which is not the same as previous
	var randNum2 = getRandomNumber(0, vueObjPtr.blocks.length);
	while (randNum == randNum2)
		randNum2 = getRandomNumber(0, vueObjPtr.blocks.length);

	//put the blocks into taken array
	vueObjPtr.takenBlocks.push(vueObjPtr.blocks[randNum]);
	vueObjPtr.takenBlocks.push(vueObjPtr.blocks[randNum2]);

	//update the turn
	vueObjPtr.turn += 2;
}