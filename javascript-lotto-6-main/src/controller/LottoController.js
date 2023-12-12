import { Random } from '@woowacourse/mission-utils';
import BonusNumber from '../domain/BonusNumber.js';
import Lotto from '../domain/Lotto.js';
import Purchase from '../domain/Purchase.js';
import WinningNumbers from '../domain/WinningNumbers.js';
import CONSTANTS from '../constants/constants.js';

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

    return this.#printLottos(numberOfPurchase, formattedAmount);
  }

  #printLottos(numberOfPurchase, formattedAmount) {
    this.#lottos = Array.from({ length: numberOfPurchase }, () => {
      const lottoNumber = this.#generateLottoNumber();
      return new Lotto(lottoNumber);
    });

    const lottosString = this.#lottos.map(lotto => lotto.lottoString());
    this.#outputView.printLottosString(lottosString);

    return this.#inputWinningNumbers(formattedAmount);
  }

  #generateLottoNumber() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return this.#sortNumbers(randomNumbers);
  }

  #sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  async #inputWinningNumbers(formattedAmount) {
    const winningNumbers = await this.#inputView.readWinningNumbers();
    const formattedWinningNumbers = new WinningNumbers(winningNumbers).getFormattedWinningNumbers();

    this.#inputBonusNumber(formattedWinningNumbers, formattedAmount);
  }

  async #inputBonusNumber(formattedWinningNumbers, formattedAmount) {
    const bonusNumber = await this.#inputView.readBonusNumber();
    const formattedBonusNumber = new BonusNumber(bonusNumber).getFormattedBonusNumber();

    return this.#printResult(formattedWinningNumbers, formattedBonusNumber, formattedAmount);
  }

  #printResult(formattedWinningNumbers, formattedBonusNumber, formattedAmount) {
    this.#outputView.printResultHeader();
    const matchResult = [0, 0, 0, 0, 0, 0];
    this.#lottos.forEach(lotto => {
      const index = lotto.checkLotto(formattedWinningNumbers, formattedBonusNumber);
      matchResult[index + 1] += 1;
    });
    this.#outputView.printResult(matchResult);

    return this.#printProfit(matchResult, formattedAmount);
  }

  #printProfit(matchResult, formattedAmount) {
    matchResult.shift();
    const matchValues = [5000, 50000, 1500000, 30000000, 2000000000];
    const multipliedValues = matchResult.map((element, index) => element * matchValues[index]);
    const totalPrize = multipliedValues.reduce((acc, currentValue) => acc + currentValue, 0);
    const totalProfit = ((totalPrize / formattedAmount) * 100).toFixed(1);

    this.#outputView.printProfit(totalProfit);
  }
}

export default LottoController;
