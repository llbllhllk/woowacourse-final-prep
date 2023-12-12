import CONSTANTS from '../constants/constants.js';
import Car from '../domain/Car.js';

class RacingGameService {
  #cars;

  constructor() {
    this.#cars = [];
  }

  cars(formattedCarNames) {
    return (this.#cars = formattedCarNames.map(name => new Car(name)));
  }

  moveCars() {
    this.#cars.forEach(car => car.move());
  }

  statusString() {
    return this.#cars.map(car => car.statusString());
  }

  status() {
    return this.#cars.map(car => car.statusString().split(CONSTANTS.status.separator));
  }

  moveMax() {
    return Math.max(
      ...this.#cars.map(
        car => car.statusString().split(CONSTANTS.status.separator)[CONSTANTS.status.move].length,
      ),
    );
  }

  winners() {
    return this.status()
      .map(car => {
        if (car[CONSTANTS.status.move].length >= this.moveMax()) return car[CONSTANTS.status.name];
      })
      .filter(Boolean);
  }
}

export default RacingGameService;
