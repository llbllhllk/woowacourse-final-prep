import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Profit from './Profit.js';
import CONSTANTS from '../constants/constants.js';

class LottoMachine {
  #lottos;

  #matchResult;

  constructor(numberOfPurchase) {
    this.#lottos = Array.from({ length: numberOfPurchase }, () => {
      const lottoNumber = this.#generateLottoNumber();
      return new Lotto(lottoNumber);
    });
  }

  lottosString() {
    return this.#lottos.map(lotto => lotto.lottoString());
  }

  matchResult(winningNumbers, bonusNumber) {
    const matchCount = CONSTANTS.matchResult;

    this.#lottos.forEach(lotto => {
      const index = lotto.checkLotto(winningNumbers, bonusNumber);
      matchCount[index + CONSTANTS.index.next] += 1;
    });

    return (this.#matchResult = matchCount);
  }

  profit(amount) {
    return new Profit(this.#matchResult, amount).profit();
  }

  #generateLottoNumber() {
    const randomNumbers = Random.pickUniqueNumbersInRange(
      CONSTANTS.lotto.min,
      CONSTANTS.lotto.max,
      CONSTANTS.lotto.length,
    );

    return this.#sortNumbers(randomNumbers);
  }

  #sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }
}

export default LottoMachine;
