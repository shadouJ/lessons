/**
 * Throw a dice once  i.e. Generate a number randomly from 1, 2, 3, 4, 5, 6 
 * @return Number
 */
export const throwDice = () => {	
	return Math.floor(Math.random() * 6) + 1;
}