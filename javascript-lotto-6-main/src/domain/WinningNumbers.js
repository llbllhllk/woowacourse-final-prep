import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

class WinningNumbers {
  #formattedWinningNumbers;

  constructor(winningNumbers) {
    this.#validate(this.#formatWinningNumbers(winningNumbers));
    this.#formattedWinningNumbers = this.#formatWinningNumbers(winningNumbers);
  }

  getFormattedWinningNumbers() {
    return this.#formattedWinningNumbers;
  }

  #validate(winningNumbers) {
    if (winningNumbers.length !== CONSTANTS.lotto.length)
      throw new Error(ERROR.winningNumbers.length);

    winningNumbers.forEach(number => {
      if (number < CONSTANTS.lotto.min || number > CONSTANTS.lotto.max)
        throw new Error(ERROR.winningNumbers.range);
    });
  }

  #formatWinningNumbers(winningNumbers) {
    return winningNumbers
      .split(CONSTANTS.lotto.separator)
      .map(element => Number(element.trim()))
      .filter(Boolean);
  }
}

export default WinningNumbers;
