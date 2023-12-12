import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

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
      if (name.length > CONSTANTS.carNames.maxLength) throw new Error(ERROR.carNames.length);
    });
  }

  #formatCarNames(carNames) {
    return carNames
      .split(CONSTANTS.carNames.separator)
      .map(element => element.trim())
      .filter(Boolean);
  }
}

export default CarNames;
