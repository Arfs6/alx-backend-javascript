import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (Number.isInteger(floors) || floors === undefined) {
      this._floors = floors;
    } else {
      throw (new TypeError('floors must be a number'));
    }
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
