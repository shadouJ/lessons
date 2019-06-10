
/**
 * Pick up a random number between min(inclusive) and max(exclusive)
 * @param Number min
 * @param Number max
 * @returns A random number between min and max
 */
export const pickRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max-min)) + min;
}

/**
 * Convert a number to array. e.g. 3 => [1, 2, 3]
 * @param Number number 
 * @returns Array 
 */
export const numberToArr = (number) => {
	const myNumber = parseInt(number);
	if(!myNumber) { 
		return [];
	}
	const arr = [];
	let val = 1;
	while(val <= myNumber) {
		arr.push(val);
		val++;
	}
	return arr;
}

/**
 * Count all solutions of a given number.
 * e.g. Given 12, its solutions should be - 
 * 1*12, 12*1, 2*6, 6*2, 3*4, 4*3 so the count should be 6.
 * @param Number number
 * @returns Number the number of solutions
 */
export const countSolutions = (number) => {
	let count = 0;
	let divider = 1;

	const myNumber = parseInt(number);
	if(!myNumber) {
		return 0;
	}
	while(divider <= number ) {
		if(number%divider === 0) {
			count++;
		}
		divider++;
	}
	return count;
}