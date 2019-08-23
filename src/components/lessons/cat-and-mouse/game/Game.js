import gameboards from './gameboards';
import { gameboardSrcs, gameboardCustSrcs } from './gameboardSrcs';

class Game {
	constructor(gameboardIndex, rule) {
		// gameboardIndex is a number(0, 1, 2 or 3) to indicate which gameboard is used
		// rule is an object with two properties - type and moveLeft: 
		// rule.type = 'dice' or 'decimal' 
		// rule.moveLeft = [2, 4] (any number(s) in 1, 2, 3, 4, 5, 6, if rule.type = 'dice')
		// or rule.moveLeft = 0.3(a random number between 0 - 1 if rule.type = 'decimal')
		// position: The position of mouse on the gameboard
		const { type, moveLeft} = rule;
		this.ruleType = type;
		this.ruleLeft = moveLeft === null ? 0.5 : moveLeft;	
		// Based on the logic of change rules, if null value for moveLeft, give it 0.5 by default
		this.gameboard = gameboards[gameboardIndex];
		if(this.ruleLeft.toString() == '1,3,5')	//  If moveLeft is an array of [1, 3, 5], then a different types of maps are used
			this.gameboardSrc = gameboardSrcs[gameboardIndex];
		else 
			this.gameboardSrc = gameboardCustSrcs[gameboardIndex];
		this.positionIndex = 0;	// It is the index of gameboard.map array.
		this.position = this.gameboard.map[this.positionIndex].position;
		this.initPosition = this.gameboard.map[0].position;
		this.step = 0;
	}

	getPosition() {
		this.position = this.gameboard.map[this.positionIndex].position;
		return this.position;
	}

	/**
	 * Create a random number based on the rule type
	 */
	createRandomNumber() {	
		switch(this.ruleType) {
			case 'default':
			case 'dice':	// If rule type is 'dice', generate a random number between 1 - 6
				return Math.floor(Math.random() * 6) + 1;
			case 'decimal':	// If rule type is 'decimal', generate a random number between 0 - 1
				return Number(Math.random().toFixed(3));
			default:
				return 0;
		} 
	}

	/**
	 * Decide the mouse should move left or right based on the number created
	 * return 'L' means move left, return 'R' means move right
	 */
	getMoveDirection(randomNumber) {
		// const randomNumber = this.createRandomNumber();
		if(this.ruleType === 'dice' || this.ruleType === 'default') {
			if(this.ruleLeft.indexOf(randomNumber) !== -1) {
				return 'L';
			} else {
				return 'R';
			}
		}
		if(this.ruleType === 'decimal') {
			if(randomNumber < this.ruleLeft) {
				return 'L';
			} else {
				return 'R';
			}
		}
	}

	/**
	 * Given the random number, decide the next position mouse should move to
	 */
	moveToNextPosition(randomNumber) {
		let direction = this.getMoveDirection(randomNumber);
		switch(direction) {
			case 'L':
				this.positionIndex = this.gameboard.map[this.positionIndex].left;
				break;
			case 'R':
				this.positionIndex = this.gameboard.map[this.positionIndex].right;
				break;
			default:
				break;
		}		
		this.position = this.gameboard.map[this.positionIndex].position;
		this.step++;
		return this.position;
	}

	/** Get the result of a game:
	 * mouse wins - return 1,
	 * cat wins   - return 0，
	 * Not end    - return null
	 */
	getResult() {
		return this.gameboard.map[this.positionIndex].result;
	}

}

export default Game;