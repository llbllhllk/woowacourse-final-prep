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
  }
}

export default RacingGameController;
