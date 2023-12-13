import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Profit from './Profit.js';

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
    const matchCount = [0, 0, 0, 0, 0, 0];

    this.#lottos.forEach(lotto => {
      const index = lotto.checkLotto(winningNumbers, bonusNumber);
      matchCount[index + 1] += 1;
    });

    return (this.#matchResult = matchCount);
  }

  profit(amount) {
    return new Profit(this.#matchResult, amount).profit();
  }

  #generateLottoNumber() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return this.#sortNumbers(randomNumbers);
  }

  #sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }
}

export default LottoMachine;
