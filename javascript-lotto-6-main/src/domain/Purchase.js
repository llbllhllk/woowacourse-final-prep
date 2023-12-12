class Purchase {
  #formattedInput;

  constructor(purchase) {
    this.#validate(this.#formatPurchase(purchase));
    this.#formattedInput = this.#formatPurchase(purchase);
  }

  getFormattedAmount() {
    return this.#formattedInput;
  }

  #validate(purchase) {
    if (purchase % 1000 !== 0) throw new Error('[ERROR] 구입금액은 1,000 단위여야합니다.');
  }

  #formatPurchase(purchase) {
    return Number(purchase);
  }
}

export default Purchase;
