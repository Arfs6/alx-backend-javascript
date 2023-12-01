export default class Building {
  constructor(sqft) {
    if (Number.isInteger(sqft) || sqft === undefined) {
      this._sqft = sqft;
    } else {
      throw (new TypeError('Sqft must be a number'));
    }
    if (new.target !== Building && !this.evacuationWarningMessage) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
