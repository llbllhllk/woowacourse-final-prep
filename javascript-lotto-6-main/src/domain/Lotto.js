class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  lottoString() {
    return `[${this.#numbers.join(', ')}]`;
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
