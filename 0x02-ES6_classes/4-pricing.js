import Currency from './3-currency.js'; // eslint-disable-line

export default class Pricing {
  constructor(amount, currency) {
    if (Number.isInteger(amount) || amount === undefined) {
      this._amount = amount;
    } else {
      throw (new TypeError('Amount must be a number'));
    }
    if (currency instanceof Currency || currency === undefined) {
      this._currency = currency;
    } else {
      throw (new TypeError('Currency must be a Currency'));
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (Number.isInteger(amount)) {
      this._amount = amount;
    } else {
      throw (new TypeError('Amount must be a number'));
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw (new TypeError('Currency must be a Currency'));
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
