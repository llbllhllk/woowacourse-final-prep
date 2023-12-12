class WinningNumbers {
  #formattedWinningNumbers;

  constructor(winningNumbers) {
    this.#validate(this.#formatWinningNumbers(winningNumbers));
    this.#formattedWinningNumbers = this.#formatWinningNumbers(winningNumbers);
  }

  getFormattedCoachNames() {
    return this.#formattedWinningNumbers;
  }

  #validate(winningNumbers) {
    if (winningNumbers.length !== 6) throw new Error('[ERROR] 당첨 번호는 6개 이어야한다.');

    winningNumbers.forEach(number => {
      if (number < 1 || number > 45) throw new Error('[ERROR] 1~45의 정수값을 가져야합니다.');
    });
  }

  #formatWinningNumbers(winningNumbers) {
    return winningNumbers
      .split(',')
      .map(element => element.trim())
      .filter(Boolean);
  }
}

export default WinningNumbers;
