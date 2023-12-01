import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    if (typeof range === 'string' || range === undefined) {
      this._range = range;
    } else {
      throw new TypeError('Range must be a string');
    }
  }

  cloneCar() {
    return new Car();
  }
}
