import CONSTANTS from '../constants/constants.js';
import Car from '../domain/Car.js';

class RacingGameService {
  #cars;

  constructor() {
    this.#cars = [];
  }

  getCars(formattedCarNames) {
    return (this.#cars = formattedCarNames.map(name => new Car(name)));
  }

  moveCars() {
    this.#cars.forEach(car => car.move());
  }

  getStatusString() {
    return this.#cars.map(car => car.statusString());
  }

  getStatus() {
    return this.#cars.map(car => car.statusString().split(CONSTANTS.status.separator));
  }

  getMoveMax() {
    return Math.max(
      ...this.#cars.map(
        car => car.statusString().split(CONSTANTS.status.separator)[CONSTANTS.status.move].length,
      ),
    );
  }

  getWinners() {
    return this.getStatus()
      .map(car => {
        if (car[CONSTANTS.status.move].length >= this.getMoveMax())
          return car[CONSTANTS.status.name];
      })
      .filter(Boolean);
  }
}

export default RacingGameService;
