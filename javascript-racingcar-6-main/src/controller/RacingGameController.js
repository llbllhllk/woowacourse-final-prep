import Attempts from '../domain/Attempts.js';
import Car from '../domain/Car.js';
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
    const formattedCarNames = new CarNames(carNames).getFormattedCarNames();

    this.#inputAttempts(formattedCarNames);
  }

  async #inputAttempts(formattedCarNames) {
    const attempts = await this.#inputView.readAttempts();
    const formattedAttempts = new Attempts(attempts).getFormattedAttempts();

    return this.printResult(formattedCarNames, formattedAttempts);
  }

  printResult(formattedCarNames, formattedAttempts) {
    this.#outputView.printResultHeaderString();
    const cars = formattedCarNames.map(name => new Car(name));
    Array.from({ length: formattedAttempts }, () => {
      cars.forEach(car => car.move());
      const statusString = cars.map(car => car.statusString());
      this.#outputView.printStatusString(statusString);
    });
  }
}

export default RacingGameController;
