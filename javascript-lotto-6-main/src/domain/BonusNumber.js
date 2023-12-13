import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

class BonusNumber {
  #formattedBonusNumber;

  constructor(bonusNumber) {
    this.#validate(this.#formatBonusNumber(bonusNumber));
    this.#formattedBonusNumber = this.#formatBonusNumber(bonusNumber);
  }

  getFormattedBonusNumber() {
    return this.#formattedBonusNumber;
  }

  #validate(bonusNumber) {
    if (Number.isNaN(bonusNumber)) throw new Error('[ERROR] 숫자가 아닌 다른 값을 입력하셨습니다.');
    if (bonusNumber < CONSTANTS.lotto.min || bonusNumber > CONSTANTS.lotto.max)
      throw new Error(ERROR.bonusNumber.range);
  }

  #formatBonusNumber(bonusNumber) {
    return Number(bonusNumber);
  }
}

export default BonusNumber;
