class LottoController {
  // #service;

  #inputView;

  #outputView;

  constructor(inputView, outputView) {
    // param: service
    // this.#service = service;
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  start() {
    return this.#inputPurchase();
  }

  async #inputPurchase() {
    const amount = await this.#inputView.readPurchase();

    return this.#inputWinningNumbers();
  }

  async #inputWinningNumbers() {
    const winningNumbers = await this.#inputView.readWinningNumbers();

    this.#inputBonusNumber();
  }

  async #inputBonusNumber() {
    const bonusNumber = await this.#inputView.readBonusNumber();

    console.log(bonusNumber);
  }
}

export default LottoController;
