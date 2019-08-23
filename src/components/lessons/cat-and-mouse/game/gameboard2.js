const map = [
	{
		id: 1,		// 0
		isStart: true,	// If mouse is at starting point
		isEnd: false,		// If mouse reaches end point
		result: null,		// 0 - Cat wins, 1 - Mouse wins, null - Game not end
		position: {		// Position of the mouse
			left: 87,
			top: 40
		},
		left: 2,
		right: 1
	},
	{
		id: 2,	// 1
		isStart: false,
		isEnd: false,
		result: null,
		position: {
			left: 67,
			top: 3
		},		
		left: 4,
		right: 3
	},
	{
		id: 3,	// 2
		isStart: false,
		isEnd: false,
		result: null,
		position: {
			left: 69,
			top: 78
		},		
		left: 5,
		right: 8
	},
	{
		id: 4,	// 3
		isStart: false,
		isEnd: false,
		result: null,
		position: {
			left: 28,
			top: 5
		},		
		left: 4,
		right: 7
	},
	{
		id: 5,	// 4
		isStart: false,
		isEnd: false,
		result: null,
		position: {
			left: 26,
			top: 40
		},		
		left: 7,
		right: 8
	},
	{
		id: 6,	// 5
		isStart: false,
		isEnd: true,
		result: 0,
		position: {
			left: 43,
			top: 77
		},		
		left: 6,
		right: 4
	},
	{
		id: 7,	// 6
		isStart: false,
		isEnd: false,
		result: null,
		position: {
			left: 16,
			top: 77
		},
		left: 7,
		right: 4
	},
	{
		id: 8,	// 7
		isStart: false,
		isEnd: true,
		result: 0,	// cat wins
		position: {
			left: 2,
			top: 43
		}		
		// Mouse move ends here, no left and right property
	},
	{
		id: 9,	// 8
		isStart: false,
		isEnd: true,
		result: 1,	// mouse wins
		position: {
			left: 53,
			top: 40
		}
		// Mouse move ends here, no left and right property
	}
];

export default {
	id: 2,
	map
}