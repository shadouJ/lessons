const map = [
	{
		id: 1,		// 0 
		result: null,		// 0 - Cat wins, 1 - Mouse wins, null - Game not end
		position: {		// Position of the mouse
			left: 21,
			top: 52
		},
		left: 1,	// left, right - indicate the index of next position on map
		right: 2
	},
	{
		id: 2,		// 1 
		result: null,
		position: {
			left: 22,
			top: 3
		},
		left: 5,
		right: 3
	},
	{
		id: 3,		// 2 
		result: null,
		position: {
			left: 41,
			top: 39
		},
		left: 3,
		right: 4
	},
	{
		id: 4,		// 3 
		result: null,
		position: {
			left: 60,
			top: 6
		},
		left: 6,
		right: 4
	},
	{
		id: 5,	// 4 
		result: null,
		position: {
			left: 66,
			top: 66
		},
		left: 6,
		right: 5
	},
	{
		id: 6,	// 5 
		result: 0,		// Game over: cat wins
		position: {
			left: 2,
			top: 40
		},
		// It's the end of map, no left and right property
	},
	{
		id: 7,		// 6 
		result: 1,		// Game over: mouse wins
		position: {
			left: 86,
			top: 35
		}
		// It's the end of map, no left and right property
	}
];

export default {
	id: 1,
	map
};