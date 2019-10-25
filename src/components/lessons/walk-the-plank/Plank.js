class Plank {
  constructor(length) {
    this.length = Number(length);
    this.direction = null; // direction: -1: shark direction, 1 - boat direction
    this.walk = {
      direction: null, // walk.direction: -1: shark direction, 1 - boat direction
      steps: 0 // walk.steps: a random number between 1 - 3, how many steps to move
    };
    this.hasDirection = false; // If this.direction has set
    this.hasWalk = false; // If this.walk is has set
    this.position = 0; // The position of plank, a number between -this.length -- this.length
    this.turns = 0; // How many turns for completing a game
  }

  setDirection() {
    let random = Math.random();
    let direction;
    if (random < 0.5) {
      direction = -1;
    } else {
      direction = 1;
    }
    this.direction = direction;
    this.hasDirection = true;
  }

  setWalk() {
    let random = Math.random();
    let max = 3;
    let min = 1;
    this.walk = {
      direction: Math.random() < 0.5 ? -1 : 1,
      // direction: 1,
      steps: Math.floor(random * max + min)
    };
    this.hasWalk = true;
  }

  setPosition() {
    if (!this.hasDirection || !this.hasWalk) {
      this.position = 0;
    } else {
      let moveDirection = this.direction * this.walk.direction;
      if (moveDirection < 0) {
        // Move to shark direction
        this.position =
          this.position - this.walk.steps < -1 * this.length
            ? -1 * this.length - 1
            : this.position - this.walk.steps;
      } else {
        // Move to boat direction
        this.position =
          this.position + this.walk.steps > this.length
            ? this.length + 1
            : this.position + this.walk.steps;
      }
    }
  }

  playOneGameAndGetTurns() {
    while (true) {
      this.turns++;
      this.setDirection();
      this.setWalk();
      this.setPosition();
      if (this.position < -1 * this.length || this.position > this.length) {
        break;
      }
    }
    return this.turns;
  }

  getDirection() {
    return this.direction;
  }

  getWalk() {
    return this.walk;
  }

  getPosition() {
    return this.position;
  }
}

export default Plank;
