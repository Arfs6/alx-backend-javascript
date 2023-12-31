export default class HolbertonClass {
  constructor(size, location) {
    if (Number.isInteger(size)) {
      this._size = size;
    } else {
      throw new TypeError('Size must be a number');
    }
    if (typeof location === 'string') {
      this._location = location;
    } else {
      throw new TypeError('Location must be a string');
    }
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return this._location;
    } if (hint === 'number') {
      return this._size;
    }
    return this._size;
  }
}
