import Car from './10-car.js'; // eslint-disable-line

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    if (typeof range === 'string' || range === undefined) {
      this._range = range;
    } else {
      throw new TypeError('Range must be a string');
    }
  }

  static get [Symbol.species]() {
    console.log('.../.../...');
    return Car;
  }
}
