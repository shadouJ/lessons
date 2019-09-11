/**
 * Throw a dice once  i.e. Generate a number randomly from 1, 2, 3, 4, 5, 6 
 * @return Number
 */
export const throwDiceOnce = () => {	
	return Math.floor(Math.random() * 6) + 1;
}

/**
 * Pick up a random number between min(inclusive) and max(exclusive)
 * @param Number min
 * @param Number max
 * @returns A random number between min and max
 */
export const pickRandomNumber = (min, max) => {
	let random = Math.random();
	return Math.floor(random * (max-min)) + min;
}
