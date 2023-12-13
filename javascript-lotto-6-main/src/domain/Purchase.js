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
    if (purchase % 1000 !== 0) throw new Error('[ERROR] 구입금액은 1,000 단위여야합니다.');
  }

  #formatPurchase(purchase) {
    return Number(purchase);
  }
}

export default Purchase;
