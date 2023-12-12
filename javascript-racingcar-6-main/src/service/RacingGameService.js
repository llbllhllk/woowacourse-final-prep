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
    return this.#cars.map(car => car.statusString().split(' : '));
  }

  getMoveMax() {
    return Math.max(...this.#cars.map(car => car.statusString().split(' : ')[1].length));
  }

  getWinners() {
    return this.getStatus()
      .map(car => {
        if (car[1].length >= this.getMoveMax()) return car[0];
      })
      .filter(Boolean);
  }
}

export default RacingGameService;
