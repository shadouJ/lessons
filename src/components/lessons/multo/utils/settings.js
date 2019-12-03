export const JULI_GRID_DATA = [
  [6, 7, 11, 16],
  [35, 50, 91, 43],
  [25, 15, 21, 24],
  [56, 8, 28, 45]
];

export const STEVE_GRID_DATA = [
  [4, 3, 2, 1],
  [15, 23, 99, 65],
  [18, 81, 16, 45],
  [19, 20, 21, 22]
];

export const CHARLES_GRID_DATA = [
  [9, 16, 12, 18],
  [5, 0, 15, 20],
  [54, 72, 48, 63],
  [24, 23, 71, 2]
];

export const BLANK_STRATEGY = {
  strategyData: [
    {
      id: 1,
      name: "Grid1",
      data: [
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null]
      ],
      isChecked: true
    },
    {
      id: 2,
      name: "Grid2",
      data: [
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null]
      ],
      isChecked: true
    },
    {
      id: 3,
      name: "Grid3",
      data: [
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null]
      ],
      isChecked: true
    }
  ]
};

export const DEFAULT_STRATEGIES_LIST = [
  {
    id: 0,
    name: "Blank",
    strategyData: BLANK_STRATEGY.strategyData
  },
  {
    id: 1,
    name: "Juli Steve and Charles",
    strategyData: [
      {
        id: 1,
        name: "Juli",
        data: JULI_GRID_DATA,
        isChecked: true
      },
      {
        id: 2,
        name: "Steve",
        data: STEVE_GRID_DATA,
        isChecked: true
      },
      {
        id: 3,
        name: "Charles",
        data: CHARLES_GRID_DATA,
        isChecked: true
      }
    ]
  }
];
