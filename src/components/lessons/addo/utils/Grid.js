import { BLANK_GRID_DATA } from "./settings";

class Grid {
  constructor(name, data) {
    this.name = name || "";
    this.data = data || BLANK_GRID_DATA;
  }

  setGrid(name, data) {
    this.name = name || "";
    this.data = data || BLANK_GRID_DATA;
  }
}

export default Grid;
