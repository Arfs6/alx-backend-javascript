export default class Building {
  constructor(sqft) {
    if (Number.isInteger(sqft) || sqft === undefined) {
      this._sqft = sqft;
    } else {
      throw (new TypeError('Sqft must be a number'));
    }
  }

  get sqft() {
    return this._sqft;
  }

  /* set sqft(sqft) {
    if (Number.isInteger(sqft) || sqft === undefined) {
      this._sqft = sqft;
    } else {
      throw (new TypeError('Sqft must be a number'));
    }
  } */

  evacuationWarningMessage() {
    throw (new Error('Class extending Building must override evacuationWarningMessage'));
  }
}
