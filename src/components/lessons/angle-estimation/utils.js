/**
 * Pick up a random integer between min(inclusive) and max(inclusive) except the numbers in except array
 * @param Number min
 * @param Number max
 * @param Array<Number> exceptArr
 * @returns A random number
 */
export const pickRandomNumberWithExcept = (min, max, exceptArr = []) => {
	let randomNum; 
	do {
		randomNum = Math.floor(Math.random() * (max-min+1)) + min;
	} while ( exceptArr.indexOf(randomNum) !== -1) 
	return randomNum;
}

/**
 * Draw an angle of given degree
 * @param Canvas object canvas
 * @param Number degree 
 * @return Canvas context
 */
export const drawAngle = (canvas, degree) => {
	if(!canvas || !canvas.getContext || !degree) {
		return null;
	}
	const ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	/** Width: 300, Height: 150, Center: (150, 75), R: 50 */
	ctx.beginPath();
	ctx.strokeStyle = '#000';
	ctx.moveTo(150, 75);
	const startDegree = pickRandomNumberWithExcept(0, 359);
	const endDegree = startDegree + degree;
	ctx.lineTo(
		150+60*Math.cos(startDegree*Math.PI/180), 
		75+60*Math.sin(startDegree*Math.PI/180));
	ctx.stroke();	/** Draw start line of the angle */ 
	// console.log(startDegree, degree);
	ctx.beginPath();
	ctx.arc(150, 75, 15, startDegree*Math.PI/180, endDegree*Math.PI/180, false );
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(150, 75);
	ctx.lineTo(
		150+60*Math.cos(endDegree*Math.PI/180), 
		75+60*Math.sin(endDegree*Math.PI/180)
	);
	ctx.stroke();
	return ctx;
}

/**
 * Draw a horizontal line on canvas
 * @param Object canvas 
 */
export const drawAngleStarter = (canvas) => {
	if(!canvas || !canvas.getContext) {
		return null;
	}
	const ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.strokeStyle = '#000';
	ctx.moveTo(150, 75);
	ctx.lineTo(150+60, 75);
	ctx.stroke();
	return ctx;
}


/**
 * Given a point(x, y) on round and radius(r), calculate the angle.
 * 给定圆周上一点（平面直角坐标系），计算其对应的角度值
 * @param Number x 
 * @param Number y 
 * @param Number r
 * @returns Angle value 
 */
export const getDegree = (x, y, r) => {
	let degree;
	const asinValue = Math.asin(y/r);	// 反正弦值
	if(x>=0 && y>=0) degree = asinValue*(180/Math.PI);			// I quadrant, X axis and Y axis 第一象限及x轴 y轴
	else if(x<0 && y>=0) degree = 180 - asinValue*(180/Math.PI);			// II quadrant, X axis 第二象限及x轴
	else if(x<0 && y<0)	degree = Math.abs(asinValue*(180/Math.PI)) + 180;			// III quadrant 第三象限
	else if(x>=0 && y<0) degree = asinValue*(180/Math.PI) + 360;			// IV quadrant, Y axis 第四象限及y轴
	return Math.round(degree);
}

/**
 * Draw an angle based on where mouse is clicked
 * @param Object canvas 
 * @param Number clientX 
 * @param Number clientY 
 */
export const drawPosition = (canvas, clientX, clientY) => {
	const ctx = canvas.getContext('2d');
	const rect = canvas.getBoundingClientRect();

	/** Get the position on canvas */
	const x = (clientX - rect.left)*(canvas.width/rect.width);
	const y = (clientY - rect.top)*(canvas.height/rect.height);
	// Get the distance from click position to center
	const r = Math.sqrt((x-150)*(x-150) + (y-75)*(y-75));
	drawAngleStarter(canvas);
	const xToCenter = x-150;
	const yToCenter = 75-y;	// Get the position relative to center
	const xToCenterR = xToCenter*(60/r);
	const yToCenterR = yToCenter*(60/r);	// Get the position on circle(relative to center)
	const degree = getDegree(xToCenterR, yToCenterR, 60);  // Get the degree
	const xEnd = 150 + xToCenterR;	// Get the position on circle(relative to up-left point)
	const yEnd = 75 - yToCenterR;
	// console.log(xEnd, yEnd);
	// console.log('degree', degree);
	ctx.beginPath();
	ctx.strokeStyle='#000';
	ctx.moveTo(150, 75);
	ctx.lineTo(xEnd, yEnd);
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle='#000';
	ctx.arc(150, 75, 15, 0, (360-degree)*(Math.PI/180), true);
	ctx.stroke();
	// console.log('degree', degree);
	return degree;
}

/**
 * 
 * @param Object canvas 
 * @param {Number} degree 
 * @param {Number} estimateDegree 
 * @return Object canvas context
 */
export const drawCorrectAngle = (canvas, degree, estimateDegree) => {
	const ctx = canvas.getContext('2d');
	ctx.beginPath();
	ctx.strokeStyle = '#000';
	ctx.moveTo(150, 75);
	// const startDegree = 0;
	const endDegree = degree;
	const endEstimateDegree = estimateDegree;
	ctx.lineTo(150+60, 75);	// Draw a horizontal line
	ctx.stroke();

	ctx.moveTo(150, 75);
	ctx.lineTo(
		150+60*Math.cos(endEstimateDegree*Math.PI/180), 
		75-60*Math.sin(endEstimateDegree*Math.PI/180));
	ctx.stroke();		// Draw the angle of estimate degree;

	ctx.beginPath();
	ctx.strokeStyle = '#f00';
	ctx.moveTo(150, 75);
	ctx.lineTo(
		150+60*Math.cos(endDegree*Math.PI/180), 
		75-60*Math.sin(endDegree*Math.PI/180));
	ctx.stroke();	// Draw the angle of correct degree

	ctx.beginPath();
	ctx.arc(150, 75, 15, 0, (360-endDegree)*Math.PI/180, true );
	ctx.stroke();
	return ctx;
}