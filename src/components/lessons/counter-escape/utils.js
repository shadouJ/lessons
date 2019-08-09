/**
 * Sort an array and remove the element of null or undefined
 * @param {Array} array 
 * @return {Array} the filtered sorted array 
 */
export const sortArray = (array) => {
	const filteredArray = array.filter((item) => {
		return item !== null && item !== undefined;
	});
	return filteredArray.sort();
}

/**
 * Throw a dice i.e. Generate a number randomly between 1 - diceNumber
 * @param {Number} diceNumber 
 * @return {Number} A random number
 */
export const throwDice = (diceNumber) => {
	return Math.floor(Math.random() * diceNumber) + 1;
}