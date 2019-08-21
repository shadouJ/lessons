/**
 * Throw a dice once  i.e. Generate a number randomly from 1, 2, 3, 4, 5, 6 
 * @return Number
 */
export const throwDiceOnce = () => {	
	return Math.floor(Math.random() * 6) + 1;
}

/**
 * Generate animals parts array based on the number of animals
 * @param {Number} numberOfAnimals - 2 or 3
 * @returns {Array} the array for animals parts
 */
export const generateAnimalsParts = (numberOfAnimals) => {
	if(numberOfAnimals === 2) {
		return [
			['Gir', 'H'],
			['a', 'or'],
			['ffe', 'se']
		]
	} else if(numberOfAnimals === 3) {
		return [
			['Gir', 'H', 'D'],
			['a', 'or', 'u'],
			['ffe', 'se', 'ck']
		]
	} else {
		return [];
	}
}

/**
 * Generate all different combinations of animals parts
 * @param {Number} numberOfAnimals - 2 or 3
 * @returns {Array} Each item in the array is also an array
 * which indicates the combination of animal parts
 * e.g. [0,2,1] - the first element of head(Gir), the second element of body(u), the third element of leg(se)
 * by number we can know the array represents the animal of Giruse.
 * Here the function generates all possible combinations(animals)
 */
export const generateCombinations = (numberOfAnimals) => {
	switch(numberOfAnimals) {
		case 2:
			return [
				[0, 0, 0],
				[0, 0, 1],
				[0, 1, 0],
				[0, 1, 1],
				[1, 0, 0],
				[1, 0, 1],
				[1, 1, 0],
				[1, 1, 1]
			];
		case 3:
			return [
				[0, 0, 0], [0, 0, 1], [0, 0, 2],
				[0, 1, 0], [0, 1, 1], [0, 1, 2],
				[0, 2, 0], [0, 2, 1], [0, 2, 2],
				[1, 0, 0], [1, 0, 1], [1, 0, 2],
				[1, 1, 0], [1, 1, 1], [1, 1, 2],
				[1, 2, 0], [1, 2, 1], [1, 2, 2],
				[2, 0, 0], [2, 0, 1], [2, 0, 2],
				[2, 1, 0], [2, 1, 1], [2, 1, 2],
				[2, 2, 0], [2, 2, 1], [2, 2, 2]
			];
		default:
			return [];
	}
}
/**
 * Based on the number of dice, return an animal part
 * @param {Number} diceNumber - a random number between 1 - 6
 * @param {Number} numberOfAnimals 
 * @returns Number an animal part represented by 0, 1, or 2.
 *  0 - the animal part is from 'giraffe', 
 * 	1 - the animal part is from 'horse',
 *  2 - the animal part is from 'dark'
 */
export const getAnimalsPart = (diceNumber, numberOfAnimals) => {
	if(numberOfAnimals === 2) { 
		if(diceNumber === 1 || diceNumber === 2 || diceNumber === 3) {
			return 0;	
		}
		if(diceNumber === 4 || diceNumber === 5 || diceNumber === 6) {
			return 1;
		}
	} else if(numberOfAnimals === 3) { 
		if(diceNumber === 1 || diceNumber === 2) {
			return 0;
		}
		if(diceNumber === 3 || diceNumber === 4 ) {
			return 1;
		}
		if(diceNumber === 5 || diceNumber === 6 ) {
			return 2;
		}
	} else {
		return null;
	}
}
