export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand === 'string' || brand === undefined) {
      this._brand = brand;
    } else {
      throw new TypeError('Brand must be a string');
    }
    if (typeof motor === 'string' || motor === undefined) {
      this._motor = motor;
    } else {
      throw new TypeError('Motor must be a string');
    }
    if (typeof color === 'string' || color === undefined) {
      this._color = color;
    } else {
      throw new TypeError('Color must be a string');
    }
  }

  cloneCar() {
    return new this.constructor();
  }
}
