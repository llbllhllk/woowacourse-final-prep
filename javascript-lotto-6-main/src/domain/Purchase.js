import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

class Purchase {
  #formattedPurchase;

  constructor(purchase) {
    this.#validate(this.#formatPurchase(purchase));
    this.#formattedPurchase = this.#formatPurchase(purchase);
  }

  getFormattedAmount() {
    return this.#formattedPurchase;
  }

  numberOfPurchase() {
    return this.#formattedPurchase / 1000;
  }

  #validate(purchase) {
    if (purchase % CONSTANTS.purchase.unit !== CONSTANTS.number.zero)
      throw new Error(ERROR.purchase.unit);
  }

  #formatPurchase(purchase) {
    return Number(purchase);
  }
}

export default Purchase;
