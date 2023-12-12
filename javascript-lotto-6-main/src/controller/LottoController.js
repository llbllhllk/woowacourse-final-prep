import { Random } from '@woowacourse/mission-utils';
import BonusNumber from '../domain/BonusNumber.js';
import Lotto from '../domain/Lotto.js';
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
    const formattedAmount = new Purchase(amount).getFormattedAmount();

    return this.#printNumberOfPurchase(formattedAmount);
  }

  #printNumberOfPurchase(formattedAmount) {
    const numberOfPurchase = formattedAmount / 1000;
    this.#outputView.printNumberOfPurchase(numberOfPurchase);

    return this.#printLottos(numberOfPurchase);
  }

  #printLottos(numberOfPurchase) {
    const lottosString = Array.from({ length: numberOfPurchase }, () => {
      const lottoNumber = this.#generateLottoNumber();
      return new Lotto(lottoNumber).lottoString();
    });
    this.#outputView.printLottosString(lottosString);

    return this.#inputWinningNumbers();
  }

  #generateLottoNumber() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return this.#sortNumbers(randomNumbers);
  }

  #sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  async #inputWinningNumbers() {
    const winningNumbers = await this.#inputView.readWinningNumbers();
    const formattedWinningNumbers = new WinningNumbers(winningNumbers);

    this.#inputBonusNumber();
  }

  async #inputBonusNumber() {
    const bonusNumber = await this.#inputView.readBonusNumber();
    const formattedBonusNumber = new BonusNumber(bonusNumber);
    this.#outputView.printResultHeader();
  }
}

export default LottoController;
