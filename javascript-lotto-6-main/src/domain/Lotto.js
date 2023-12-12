class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  lottoString() {
    return `[${this.#numbers.join(', ')}]`;
  }

  checkLotto(winningNumbers, bonusNumber) {
    const matchCount = this.#countMatchingNumbers(winningNumbers);
    const bonusMatch = this.#numbers.includes(bonusNumber);

    switch (matchCount) {
      case 3:
        return 0;
      case 4:
        return 1;
      case 5:
        return bonusMatch ? 3 : 2;
      case 6:
        return 4;
      default:
        return -1;
    }
  }

  #countMatchingNumbers(winningNumbers) {
    return this.#numbers.filter(number => winningNumbers.includes(number)).length;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    numbers.forEach(number => {
      if (number < 1 || number > 45)
        throw new Error('[ERROR] 로또 번호는 1~45의 숫자 범위를 가집니다.');
    });
  }
}

export default Lotto;
