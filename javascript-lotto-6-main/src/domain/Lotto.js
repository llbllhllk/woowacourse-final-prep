import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  lottoString() {
    return `[${this.#numbers.join(CONSTANTS.string.separator)}]`;
  }

  checkLotto(winningNumbers, bonusNumber) {
    const matchCount = this.#countMatchingNumbers(winningNumbers);
    const bonusMatch = this.#numbers.includes(bonusNumber);

    switch (matchCount) {
      case CONSTANTS.matchCount.three:
        return CONSTANTS.matchIndex.three;
      case CONSTANTS.matchCount.four:
        return CONSTANTS.matchIndex.four;
      case CONSTANTS.matchCount.five:
        return bonusMatch ? CONSTANTS.matchIndex.bonus : CONSTANTS.matchIndex.five;
      case CONSTANTS.matchCount.six:
        return CONSTANTS.matchIndex.six;
      default:
        return CONSTANTS.matchIndex.default;
    }
  }

  #countMatchingNumbers(winningNumbers) {
    return this.#numbers.filter(number => winningNumbers.includes(number)).length;
  }

  #validate(numbers) {
    if (numbers.length !== CONSTANTS.lotto.length) {
      throw new Error(ERROR.lotto.length);
    }

    numbers.forEach(number => {
      if (number < CONSTANTS.lotto.min || number > CONSTANTS.lotto.max)
        throw new Error(ERROR.lotto.range);
    });
  }
}

export default Lotto;
