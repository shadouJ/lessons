/**
 * Throw a dice once  i.e. Generate a number randomly from 1, 2, 3, 4, 5, 6 
 * @return Number
 */
export const throwDiceOnce = () => {	
	return Math.floor(Math.random() * 6) + 1;
}

/**
 * Throw dice two times and sort from biggest to smallest
 * @return Array
 */
export const throwDiceTwo = () => {
	const one = Math.floor(Math.random() * 6) + 1;
	const two =	Math.floor(Math.random() * 6) + 1;
	return [one, two].sort().reverse();
}

/**
 * Give an array, and return a new array filled with undefined with spcific length
 * e.g. arr = [1, 2, 3], length = 5, should return [1, 2, 3, undefined, undefined]
 * @param Array arr the original array
 * @param Number length the length of the new array
 * @return Array
 */
export const fillArray = (arr, length) => {
	const newArr = [];
	for(let i=0; i<length; i++) {
		if(arr[i]) {
			newArr[i] = arr[i];
		}
		else {
			newArr[i] = undefined;
		}
	}
	return newArr;
}

/**
 * Calculate the sum of an array, the elements in array should be numbers
 * @param {Array} arr 
 */
export const sumArray = (arr) => {
	let sum = 0;
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] === undefined) {
			continue;
		}
		if( isNaN(Number(arr[i]))) {
			return 0;
		}
		sum += arr[i];
	}
	return sum;
}

export const getUnit = (testedNumber) => {
	if(testedNumber<=100) {
		return 15;
	} else if(testedNumber <=1000) {
		return 5;
	} else if(testedNumber <=5000) {
		return 1;
	} else if(testedNumber <=10000) {
		return 0.5;
	} else if(testedNumber <=50000) {
		return 0.3;
	} else {
		return 0.05;
	}
};

export const getTimerInterval = (testedNumber) => {
	if(testedNumber <= 1000) {
		return 50;
	} else if(testedNumber <= 5000) {
		return 10;
	} else if(testedNumber <= 10000){
		return 0.5;
	} else {
		return 0.1;
	}
};