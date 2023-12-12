class CarNames {
  #formattedCarNamees;

  constructor(carNames) {
    this.#validate(this.#formatCarNames(carNames));
    this.#formattedCarNamees = this.#formatCarNames(carNames);
  }

  getFormattedCarNames() {
    return this.#formattedCarNamees;
  }

  #validate(carNames) {
    carNames.forEach(name => {
      if (name.length > 5) throw new Error('[ERROR] 자동차 이름은 5자 이하여야합니다.');
    });
  }

  #formatCarNames(carNames) {
    return carNames
      .split(',')
      .map(element => element.trim())
      .filter(Boolean);
  }
}

export default CarNames;
