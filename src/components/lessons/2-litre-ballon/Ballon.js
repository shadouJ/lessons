class Ballon {
  /**
   * unit indicates the type of number, its value is one of these:
   * 'D' - 'diameter', 'R' - 'radius', 'C' - 'circumference' or 'V' - 'volume'
   */
  constructor(unit, number) {
    this.unit = unit;
    if (isNaN(number) || number < 0) {
      this.diameter = null;
      this.radius = null;
      this.circumference = null;
      this.volume = null;
      return;
    }
    switch (unit) {
      case "D":
        this.diameter = number;
        this.radius = this.diameter / 2;
        this.circumference = this.calculateCir(this.radius);
        this.volume = this.calculateVolume(this.radius);
        break;
      case "R":
        this.radius = number;
        this.diameter = this.radius * 2;
        this.circumference = this.calculateCir(this.radius);
        this.volume = this.calculateVolume(this.radius);
        break;
      case "C":
        this.circumference = number;
        this.radius = this.calculateRadiusFromCir(this.circumference);
        this.diameter = this.radius * 2;
        this.volume = this.calculateVolume(this.radius);
        break;
      case "V":
        this.volume = number;
        this.radius = this.calculateRadiusFromVolume(this.volume);
        this.diameter = this.radius * 2;
        this.circumference = this.calculateCir(this.radius);
        break;
      default:
        this.diameter = null;
        this.radius = null;
        this.circumference = null;
        this.volume = null;
    }
  }

  /** Calculate volume based on radius(r) */
  calculateVolume(r) {
    let volume = ((4 / 3) * Math.PI * Math.pow(r, 3)) / 1000;
    return Number(volume.toFixed(6));
  }

  /** Calculate circumference based on radius(r) */
  calculateCir(r) {
    let circumference = Math.PI * r * 2;
    return Number(circumference.toFixed(6));
  }

  /** Calculate radius from volume */
  calculateRadiusFromVolume(v) {
    let radius = Math.pow(((v * 1000) / Math.PI) * (3 / 4), 1 / 3);
    return Number(radius.toFixed(6));
  }

  /** Calculate radius from circumference */
  calculateRadiusFromCir(c) {
    let radius = c / (Math.PI * 2);
    return Number(radius.toFixed(6));
  }

  getValue(unit) {
    switch (unit) {
      case "D":
        return this.diameter;
      case "R":
        return this.radius;
      case "C":
        return this.circumference;
      case "V":
        return this.volume;
      default:
        return null;
    }
  }
}

export default Ballon;
