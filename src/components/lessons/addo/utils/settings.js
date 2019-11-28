export const JAYNE_GRID_DATA = [
  [9, 6, 2],
  [1, 10, 24],
  [4, 7, 20]
];

export const KERRY_GRID_DATA = [
  [10, 5, 6],
  [1, 0, 3],
  [8, 4, 14]
];

export const KATE_GRID_DATA = [
  [12, 6, 3],
  [4, 10, 9],
  [1, 14, 11]
];

export const STRATEGY_JKK_GRID_NAME = ["Jayne", "Kerry", "Kate"];

export const BLANK_STRATEGY = {
  strategyData: [
    {
      id: 1,
      name: "Grid1",
      data: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
      isChecked: true
    },
    {
      id: 2,
      name: "Grid2",
      data: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
      isChecked: true
    },
    {
      id: 3,
      name: "Grid3",
      data: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
      isChecked: true
    }
  ]
};

export const DEFAULT_STRATEGIES_LIST = [
  {
    id: 0,
    name: "Blank",
    strategyData: [
      {
        id: 1,
        name: "Grid1",
        data: [
          [null, null, null],
          [null, null, null],
          [null, null, null]
        ],
        isChecked: true
      },
      {
        id: 2,
        name: "Grid2",
        data: [
          [null, null, null],
          [null, null, null],
          [null, null, null]
        ],
        isChecked: true
      },
      {
        id: 3,
        name: "Grid3",
        data: [
          [null, null, null],
          [null, null, null],
          [null, null, null]
        ],
        isChecked: true
      }
    ]
  },
  {
    id: 1,
    name: "Jayne Kerry and Kate",
    strategyData: [
      {
        id: 1,
        name: STRATEGY_JKK_GRID_NAME[0],
        data: JAYNE_GRID_DATA,
        isChecked: true
      },
      {
        id: 2,
        name: STRATEGY_JKK_GRID_NAME[1],
        data: KERRY_GRID_DATA,
        isChecked: true
      },
      {
        id: 3,
        name: STRATEGY_JKK_GRID_NAME[2],
        data: KATE_GRID_DATA,
        isChecked: true
      }
    ]
  }
];
