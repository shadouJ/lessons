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
 * Pick up a random element from an array
 * @param Array arr 
 */
export const pickRandomElementFromArray = (arr=[]) => {
	if(arr.length === 0) {
		return null;
	}
	const n = Math.floor(Math.random()*arr.length + 1) - 1;
	return arr[n];
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
 * Draw a circle and its corresponding rectangular plane coordinate system
 * 在Canvas上画圆和平面直角坐标系
 * @param Canvas Object canvas 
 * @returns ctx Object
 */
export const drawCircle = (canvas) => {
		if(!canvas || !canvas.getContext) {
			return null;
		} 
		const ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		/** Width: 300, Height: 300 */
		/** Center: 150, 150  R: 120 */
		ctx.beginPath();
		ctx.strokeStyle = '#000';
		ctx.moveTo(29, 29);
		ctx.strokeRect(29, 29, 242, 242);	// Draw outer square

		ctx.beginPath();
		ctx.filleStyle = '#000';
		ctx.font="12px";
		ctx.fillText('1', 148, 20); 	// Draw 1 on X axis
		ctx.fillText('1', 274, 152); 	// Draw 1 on Y axis
		ctx.fillText('-1', 16, 152); 	// Draw -1 on X axis
		ctx.fillText('-1', 146, 282);	// Draw -1 on Y axis

		ctx.beginPath();
		ctx.strokeStyle = '#ccc';
		for(let i=1; i<=9; i++) {		// Draw grid on Y direction
			if( ((120/5)*i + 30) === 150 ) {
				continue;		// Skip Y axis 
			}
			ctx.moveTo( (120/5)*i+30, 29);
			ctx.lineTo( (120/5)*i+30, 271);
			ctx.stroke();
		}

		for(let i=1; i<=9; i++) {		// Draw grid on X direction
			if( ((120/5)*i + 30) === 150 ) {
				continue;		// Skip X axis 
			}
			ctx.moveTo( 29, (120/5)*i+30);
			ctx.lineTo( 271, (120/5)*i+30);
			ctx.stroke();
		}
		
		ctx.beginPath();
		ctx.strokeStyle = 'blue';
		ctx.moveTo(29, 150);
		ctx.lineTo(271, 150);	// Draw X axis
		ctx.stroke();
		ctx.moveTo(150, 29);
		ctx.lineTo(150, 271);	// Draw Y axis
		ctx.stroke();

		ctx.beginPath();
		ctx.strokeStyle = '#f00';
		ctx.arc(150, 150, 120, 0, Math.PI * 2, true); // Draw circle
		ctx.stroke();
		ctx.save();
		return ctx;
}

/**
 * Draw the position on circle based on where mouse clicked
 * @param Canvas Object
 * @param x The position where mouse clicked (X direction)
 * @param y The position wehre mouse clicked (Y direction)
 * @returns degree
 */
export const drawPosition = (canvas, clientX, clientY) => {
	const ctx = canvas.getContext('2d');
	const rect = canvas.getBoundingClientRect();
	// console.log(rect);
	// console.log(canvas.width, canvas.height);
	
	// Get the position on canvas when user clicks mouse.
	const x = (clientX - rect.left)*(canvas.width/rect.width);
	const y = (clientY - rect.top)*(canvas.height/rect.height);

	// Get the distance from click position to center
	const r = Math.sqrt((x-150)*(x-150) + (y-150)*(y-150));
	// Check if the mouse is clicked within the circl area
	if(r>0 && r<=120) {		// If click happens within the circle
		// ctx.clearRect(0, 0, canvas.width, canvas.height);
		// ctx.restore();
		drawCircle(canvas);
		// console.log('in circle');
		const xToCenter = x-150;
		const yToCenter = 150-y;	// Get the position relative to center

		const xToCenterR = xToCenter*(120/r);
		const yToCenterR = yToCenter*(120/r);	// Get the position on circle(relative to center)
		// const radian = Math.asin(yToCenterR / 120);
		// let degree;
		// if(radian>=0 && radian<= Math.PI/2) degree = radian * (180/Math.PI);
		// else if(radian > Math.PI/2 )
		// const degree = Math.acos(yToCenterR / 120) * (180/Math.PI);
		const degree = getDegree(xToCenterR, yToCenterR, 120);
		// console.log('degree', degree);

		const xEnd = 150 + xToCenterR;
		const yEnd = 150 - yToCenterR;	// Get the position on circle(relative to up-left point)

		ctx.beginPath();
		ctx.strokeStyle = '#f00';
		ctx.moveTo(150, 150);
		ctx.lineTo(xEnd, yEnd);
		ctx.stroke();

		ctx.beginPath();
		ctx.strokeStyle = '#ffb3b3';
		ctx.moveTo(xEnd, yEnd);
		ctx.lineTo(xEnd ,150);
		ctx.stroke();
		ctx.moveTo(xEnd, yEnd);
		ctx.lineTo(150, yEnd);
		ctx.stroke();

		// ctx.moveTo();
		ctx.beginPath();
		ctx.strokeStyle = '#f00';
		ctx.arc(150, 150, 30, 0, (360-degree)*(Math.PI/180), true);
		ctx.stroke();
		return degree;
	} else {
		return null;
	}
}

export const drawCoord = (canvas) => {
		/**
		 * Width: 300, Height: 150
		 * X axis: 300, Y axis: 120
		 */
		if(!canvas || !canvas.getContext) {
			return null;
		}
		const ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.beginPath();
		ctx.strokeStyle = '#888';
		ctx.strokeRect(0, 10, 300, 120);

		ctx.beginPath();
		ctx.strokeStyle = 'blue';
		ctx.moveTo(0, 10);
		ctx.lineTo(0, 130);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(0, 70);
		ctx.lineTo(300, 70);
		ctx.stroke();

		ctx.beginPath();
		ctx.fillStyle = 'blue';
		ctx.font="12px";
		ctx.fillText('X', 287, 65);
		ctx.fillText('Y', 5, 20);
		ctx.fillText('0', 5, 80);

}

/**
 * Draw sin wave
 */
export const drawSinWave = (canvas, degree = 0) => {
	if(!canvas || !canvas.getContext) {
		return null;
	}
	if(!degree) {
		return null;
	}
	drawCoord(canvas);
	const ctx = canvas.getContext('2d');
	ctx.beginPath();
	ctx.strokeStyle = '#000';
	// let counter = 0, x=0, y=70;
	let startX = 0, startY = 70;
	// y = 70, 原点
	// let increase = 90/70*Math.PI / 7.5;
	for(let i=0; i<=degree; i++) {	// i - degree (the value on X axis)
		ctx.moveTo(startX, startY);  // start point

		let endX = i * 300/360; // 300 - X轴在Canvas上的长度
		// 360 - 实际X轴上应有数

		// 70 - 坐标原点到Canvas原点的距离
		// 60 - 120/2 坐标Y轴的高度
		let endY = 70 - Math.sin(i*Math.PI/180)*60;
		// counter += increase;
		ctx.lineTo(endX, endY);
		ctx.stroke();
	
		startX = endX; startY = endY;	// 记录下一次的开始点位置
	}
	
	ctx.beginPath();
	ctx.font = '10px';
	ctx.fillText('X:' + (degree*Math.PI/180).toFixed(2) + 'radian', 12, 115);
	ctx.fillText('Y:' + Math.sin(degree*Math.PI/180).toFixed(2), 12, 125);
	
	ctx.beginPath();
	ctx.strokeStyle="#ffb3b3";
	ctx.moveTo(startX, startY);
	ctx.lineTo(startX, 70);
	ctx.stroke();
	ctx.moveTo(startX, startY);
	ctx.lineTo(0, startY);
	ctx.stroke();
}

/**
 * Draw cos wave
 */
export const drawCosWave = (canvas, degree = 0) => {
	if(!canvas || !canvas.getContext) {
		return null;
	}
	if(!degree) {
		return null;
	}
	drawCoord(canvas);
	const ctx = canvas.getContext('2d');
	ctx.beginPath();
	ctx.strokeStyle = '#000';
	
	let startX = 0, startY = 10;
	for(let i=0; i<=degree; i++) {
		ctx.moveTo(startX, startY);
		let endX = i*300/360;
		let endY = 70 - Math.cos(i*Math.PI/180)*60;
		ctx.lineTo(endX, endY);
		ctx.stroke();
		startX = endX; startY = endY;	
	}
 
	ctx.beginPath();
	ctx.font = '10px';
	ctx.fillText('X:' + (degree*Math.PI/180).toFixed(2) + 'radian', 12, 115);
	ctx.fillText('Y:' + Math.cos(degree*Math.PI/180).toFixed(2), 12, 125);

	ctx.beginPath();
	ctx.strokeStyle="#ffb3b3";
	ctx.moveTo(startX, startY);
	ctx.lineTo(startX, 70);
	ctx.stroke();
	ctx.moveTo(startX, startY);
	ctx.lineTo(0, startY);
	ctx.stroke();
}