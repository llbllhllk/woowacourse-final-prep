import Attempts from '../domain/Attempts.js';
import CarNames from '../domain/CarNames.js';

class RacingGameController {
  #inputView;

  #outputView;

  constructor(inputView, outputView) {
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  start() {
    return this.#inputCarNames();
  }

  async #inputCarNames() {
    const carNames = await this.#inputView.readCarNames();
    const formattedCarNames = new CarNames(carNames);

    this.#inputAttempts();
  }

  async #inputAttempts() {
    const attempts = await this.#inputView.readAttempts();
    const formattedAttempts = new Attempts(attempts);

    console.log(formattedAttempts);
  }
}

export default RacingGameController;
