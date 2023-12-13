import { Random } from '@woowacourse/mission-utils';
import BonusNumber from '../domain/BonusNumber.js';
import Purchase from '../domain/Purchase.js';
import WinningNumbers from '../domain/WinningNumbers.js';
import Lotto from '../domain/Lotto.js';

class LottoService {
  #amount;

  #winningNumbers;

  #bonusNumber;

  #lottos;

  #matchResult;

  constructor() {
    this.#lottos = [];
    this.#matchResult = [0, 0, 0, 0, 0, 0];
  }

  // Amount
  setAmount(purchase) {
    this.#amount = new Purchase(purchase).getFormattedAmount();
  }

  // WinningNumbers
  setWinningNumbers(winningNumbers) {
    this.#winningNumbers = new WinningNumbers(winningNumbers).getFormattedWinningNumbers();
  }

  // BonusNumber
  setBonusNumber(bonusNumber) {
    this.#bonusNumber = new BonusNumber(bonusNumber).getFormattedBonusNumber();
  }

  // Lottos
  setLottos() {
    this.#lottos = Array.from({ length: this.numberOfPurchase() }, () => {
      const lottoNumber = this.#generateLottoNumber();
      return new Lotto(lottoNumber);
    });
  }

  lottosString() {
    return this.#lottos.map(lotto => lotto.lottoString());
  }

  #generateLottoNumber() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return this.#sortNumbers(randomNumbers);
  }

  #sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  // MatchResult
  matchResult() {
    this.#lottos.forEach(lotto => {
      const index = lotto.checkLotto(this.#winningNumbers, this.#bonusNumber);
      this.#matchResult[index + 1] += 1;
    });

    return this.#matchResult;
  }

  // Profit
  profit() {
    this.#matchResult.shift();
    const matchValues = [5000, 50000, 1500000, 30000000, 2000000000];
    const multipliedValues = this.#multipliedValues(matchValues);
    const totalPrize = this.#totalPrize(multipliedValues);
    const totalProfit = this.#totalProfit(totalPrize);

    return totalProfit;
  }

  #multipliedValues(matchValues) {
    return this.#matchResult.map((element, index) => element * matchValues[index]);
  }

  #totalPrize(multipliedValues) {
    return multipliedValues.reduce((acc, currentValue) => acc + currentValue, 0);
  }

  #totalProfit(totalPrize) {
    return ((totalPrize / this.#amount) * 100).toFixed(1);
  }

  // etc
  numberOfPurchase() {
    return this.#amount / 1000;
  }
}

export default LottoService;
