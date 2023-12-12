import Attempts from '../domain/Attempts.js';
import Car from '../domain/Car.js';
import CarNames from '../domain/CarNames.js';

class RacingGameController {
  #racingGameService;

  #inputView;

  #outputView;

  constructor(racingGameService, inputView, outputView) {
    this.#racingGameService = racingGameService;
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  start() {
    return this.#inputCarNames();
  }

  async #inputCarNames() {
    const carNames = await this.#inputView.readCarNames();
    const formattedCarNames = new CarNames(carNames).getFormattedCarNames();

    return this.#inputAttempts(formattedCarNames);
  }

  async #inputAttempts(formattedCarNames) {
    const attempts = await this.#inputView.readAttempts();
    const formattedAttempts = new Attempts(attempts).getFormattedAttempts();

    return this.#printResult(formattedCarNames, formattedAttempts);
  }

  #printResult(formattedCarNames, formattedAttempts) {
    this.#outputView.printResultHeaderString();
    this.#racingGameService.getCars(formattedCarNames);

    Array.from({ length: formattedAttempts }, () => {
      this.#racingGameService.moveCars();
      const statusString = this.#racingGameService.getStatusString();
      this.#outputView.printStatusString(statusString);
    });

    return this.#printWinners();
  }

  #printWinners() {
    const winners = this.#racingGameService.getWinners();
    this.#outputView.printWinners(winners);
  }
}

export default RacingGameController;
