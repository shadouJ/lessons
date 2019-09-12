/**
 * Pick up a random number between min(inclusive) and max(inclusive)
 * @param Number min
 * @param Number max
 * @returns A random number between min and max
 */
export const pickRandomNumber = (min, max) => {
	let random = Math.random();
	return Math.floor(random*max+min);
}