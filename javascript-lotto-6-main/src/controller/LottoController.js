import BonusNumber from '../domain/BonusNumber.js';
import Purchase from '../domain/Purchase.js';
import WinningNumbers from '../domain/WinningNumbers.js';

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
    const formattedAmount = new Purchase(amount);

    return this.#inputWinningNumbers();
  }

  async #inputWinningNumbers() {
    const winningNumbers = await this.#inputView.readWinningNumbers();
    const formattedWinningNumbers = new WinningNumbers(winningNumbers);

    console.log(formattedWinningNumbers);
    this.#inputBonusNumber();
  }

  async #inputBonusNumber() {
    const bonusNumber = await this.#inputView.readBonusNumber();
    const formattedBonusNumber = new BonusNumber(bonusNumber);

    console.log(formattedBonusNumber);
  }
}

export default LottoController;
