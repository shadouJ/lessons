/**
 * Pick up a random number between min(inclusive) and max(exclusive)
 */
const pickRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max-min)) + min;
}

/**
 * Generate an area of a triangle
 * @param Boolean hasDecimal
 * @return Number a random value which represents the area of a triangle
 */
export const generateTriangleArea = (hasDecimal=false) => {
	let angle = pickRandomNumber(10, 40);
	if(hasDecimal) {
		angle = angle - .5 * (Math.random() > 0.2 ? 1 : 0);
	}
	return angle;
}

/**
 * Draw grid on canvas
 */
export const drawGrid = (canvas) => {
	if(!canvas || !canvas.getContext) {
		return null;
	}
	const ctx = canvas.getContext('2d');
	ctx.beginPath();
	ctx.strokeStyle = '#8EEFFA';
	for(let i=0; i<=15; i++) {	// Draw grid on Y direction
		ctx.moveTo(15+18*i, 5);
		ctx.lineTo(15+18*i ,185);
		ctx.stroke();
	}
	for(let i=0; i<=10; i++) {	// Draw grid on X direction
		ctx.moveTo(15, 5+18*i);
		ctx.lineTo(285, 5+18*i);
		ctx.stroke();
	}

	ctx.beginPath();
	ctx.fillStyle = 'blue';
	ctx.font="12px";
	ctx.fillText('0', 5, 188);
	for(let i=1; i<=10; i++) {	// Draw number 1 to 10
		if(i>=10) {
			ctx.fillText(i, 2, (185-18*i)+3);
			continue;
		}
		ctx.fillText(i, 5, (185-18*i)+3 );
	}
	for(let i=1; i<=15; i++) {	// Draw number 1 to 15
		if(i>=10) {
			ctx.fillText(i, 10+18*i ,198);
			continue;
		}
		ctx.fillText(i, 12+18*i ,198);
	}
}

/**
 * Draw a point based on X, Y value on axis.
 * 将平面直角坐标系上的点转换成Canvas上的坐标
 */
export const drawPoint = (x, y) => {
	return {
		canvasX: x*18+15,
		canvasY: 200-15-y*18
	}
};

/**
 * 将Canvas上的坐标转换成平面直角坐标系上的点
 */
export const convertCanvasPoint = (canvasX, canvasY) => {
	return {
		x: (canvasX-15)/18,
		y: (200-15-canvasY)/18
	}
}

/**
 * Draw triangle on canvas
 * @param Object canvas
 * @param Object p1 point with height
 * @param Object p2 point on X axis
 * @param Object p0 point on origin point, (0, 0) by default
 */
export const drawTriangle = (canvas, p1, p2, p0 = {x: 0, y:0}) => {
	if(!canvas || !canvas.getContext) {
		return null;
	}
	const canvasP1 = drawPoint(p1.x, p1.y);
	const canvasP2 = drawPoint(p2.x, p2.y);
	const canvasP0 = drawPoint(p0.x, p0.y);
	const ctx = canvas.getContext('2d');
	ctx.beginPath();
	ctx.strokeStyle='#000';
	ctx.moveTo(canvasP0.canvasX, canvasP0.canvasY);
	ctx.lineTo(canvasP1.canvasX, canvasP1.canvasY); 
	ctx.lineTo(canvasP2.canvasX, canvasP2.canvasY); 
	ctx.lineTo(canvasP0.canvasX, canvasP0.canvasY);	// Draw triangle
	ctx.stroke();
}

/**
 * Draw a circle where user can click and drag the point
 */
export const drawDraggableArea = (canvas, p) => {
	if(!canvas || !canvas.getContext) {
		return null;
	}
	const ctx = canvas.getContext('2d');
	const canvasP = drawPoint(p.x, p.y);
	ctx.beginPath();
	ctx.strokeStyle = 'red';
	ctx.arc(canvasP.canvasX, canvasP.canvasY, 5, 0, Math.PI*2, true);
	ctx.stroke();
}

/** Allow user to drag p1 i.e. height of triangle */
export const dragHeight = (canvas, clientX, clientY, p1, p2) => {
	const ctx = canvas.getContext('2d');
	const rect = canvas.getBoundingClientRect();

	// The position on canvas
	const canvasX = (clientX - rect.left)*(canvas.width/rect.width);
	const canvasY = (clientY - rect.top)*(canvas.height/rect.height); 
	// console.log(canvasX, canvasY);
	// const canvasP1 = drawPoint(p1.x, p1.y);	
	// const dToP1 = Math.sqrt((canvasX-canvasP1.canvasX)*(canvasX-canvasP1.canvasX) + (canvasY-canvasP1.canvasY)*(canvasY-canvasP1.canvasY) );
	let {x, y} = convertCanvasPoint(canvasX, canvasY);	// 获得在平面直角坐标系中的位置

	let newP1 = p1;
	if(x>=0 && x<=15 && y<=10 && y>=1) {	// 如果y>=0.5 则移动三角形的高
		newP1 = {x, y}; 
		// console.log(newP1);
		// if(x>=0 && x<=15 && y<=10) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			drawGrid(canvas);
			drawTriangle(canvas, newP1, p2); 
			drawDraggableArea(canvas, newP1);
			drawDraggableArea(canvas, p2);
		// }
	} 	
	return newP1;
}

/** Allow user to drag p2 i.e. base of triangle */
export const dragBase = (canvas, clientX, clientY, p1, p2) => {
	const ctx = canvas.getContext('2d');
	const rect = canvas.getBoundingClientRect();

	// The position on canvas
	const canvasX = (clientX - rect.left)*(canvas.width/rect.width);
	const canvasY = (clientY - rect.top)*(canvas.height/rect.height); 
	// console.log(canvasX, canvasY);
	// const canvasP1 = drawPoint(p1.x, p1.y);	
	// const dToP1 = Math.sqrt((canvasX-canvasP1.canvasX)*(canvasX-canvasP1.canvasX) + (canvasY-canvasP1.canvasY)*(canvasY-canvasP1.canvasY) );
	let {x, y} = convertCanvasPoint(canvasX, canvasY);	// 获得在平面直角坐标系中的位置
	// if(x<0) x=0;
	// if(x>15) x=15;
	// if(y<=0.5) y=0.5;
	// if(y>10) y=10;
	let newP2 = p2;
	if(y>=-0.5 && y<=0.5 && x>=1 && x<=10) {	// 如果y<0.5，则移动三角形的底边
		newP2 = {x, y: 0};
		// if(x>=0 && x<=10) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			drawGrid(canvas);
			drawTriangle(canvas, p1, newP2); 
			drawDraggableArea(canvas, p1);
			drawDraggableArea(canvas, newP2);
		// }
	}
	return newP2;
}