const map = [
	{		// Game start
		id: 1,		// 0 
		result: null,		// 0 - Cat wins, 1 - Mouse wins, null - Game not end
		position: {		// Position of the mouse
			left: 44,
			top: 65
		},
		left: 4,
		right: 1
	},
	{
		id: 2,	// 1
		result: null,
		position: {
			left: 45,
			top: 4
		},
		left: 2,
		right: 3
	},
	{
		id: 3,	// 2
		result: null,
		position: {
			left: 20,
			top: 4
		},
		left: 4,
		right: 6
	},
	{
		id: 4,	// 3
		result: null,
		position: {
			left: 65,
			top: 4
		},
		left: 7,
		right: 5
	},
	{
		id: 5,	// 4
		result: null,
		position: {
			left: 20,
			top: 65
		},
		left: 2,
		right: 0
	},
	{
		id: 6,	// 5
		result: null,
		position: {
			left: 65,
			top: 65
		},
		left: 7,
		right: 0
	},
	{
		id: 7,	// 6
		result: 0,		// Game over: Cat wins
		position: {
			left: 2,
			top: 40
		}
		// Mouse move ends here, no left and right property
	},
	{
		id: 8,	// 7
		result: 1,		// Game over: mouse wins
		position: {
			left: 87,
			top: 36
		}
		// Mouse move ends here, no left and right property
	}
];

export default {
	id: 1,
	map
};