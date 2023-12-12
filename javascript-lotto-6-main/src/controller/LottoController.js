import { Random } from '@woowacourse/mission-utils';
import BonusNumber from '../domain/BonusNumber.js';
import Lotto from '../domain/Lotto.js';
import Purchase from '../domain/Purchase.js';
import WinningNumbers from '../domain/WinningNumbers.js';

class LottoController {
  // #service;

  #inputView;

  #outputView;

  #lottos;

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
    this.#lottos = Array.from({ length: numberOfPurchase }, () => {
      const lottoNumber = this.#generateLottoNumber();
      return new Lotto(lottoNumber);
    });

    const lottosString = this.#lottos.map(lotto => lotto.lottoString());
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
    const formattedWinningNumbers = new WinningNumbers(winningNumbers).getFormattedWinningNumbers();

    this.#inputBonusNumber(formattedWinningNumbers);
  }

  async #inputBonusNumber(formattedWinningNumbers) {
    const bonusNumber = await this.#inputView.readBonusNumber();
    const formattedBonusNumber = new BonusNumber(bonusNumber).getFormattedBonusNumber();

    return this.#printResult(formattedWinningNumbers, formattedBonusNumber);
  }

  #printResult(formattedWinningNumbers, formattedBonusNumber) {
    this.#outputView.printResultHeader();
    const matchResult = [0, 0, 0, 0, 0, 0];
    this.#lottos.forEach(lotto => {
      const index = lotto.checkLotto(formattedWinningNumbers, formattedBonusNumber);
      matchResult[index + 1] += 1;
    });
    
    this.#outputView.printResult();
  }
}

export default LottoController;
