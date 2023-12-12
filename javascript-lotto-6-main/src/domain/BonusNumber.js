class BonusNumber {
  #formattedBonusNumber;

  constructor(bonusNumber) {
    this.#validate(this.#formatBonusNumber(bonusNumber));
    this.#formattedBonusNumber = this.#formatBonusNumber(bonusNumber);
  }

  getFormattedCoachNames() {
    return this.#formattedBonusNumber;
  }

  #validate(bonusNumber) {
    if (Number.isNaN(bonusNumber)) throw new Error('[ERROR] 숫자가 아닌 다른 값을 입력하셨습니다.');
    if (bonusNumber < 1 || bonusNumber > 45)
      throw new Error('[ERROR] 1~45의 정수값을 가져야합니다.');
  }

  #formatBonusNumber(bonusNumber) {
    return Number(bonusNumber);
  }
}

export default BonusNumber;
