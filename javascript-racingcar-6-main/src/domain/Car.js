import { Random } from '@woowacourse/mission-utils';
import CONSTANTS from '../constants/constants.js';

class Car {
  #name;

  #moveStatus;

  constructor(name) {
    this.#name = name;
    this.#moveStatus = [];
  }

  move() {
    const randomNumber = Random.pickNumberInRange(CONSTANTS.random.from, CONSTANTS.random.to);
    if (randomNumber >= CONSTANTS.car.move) this.#moveStatus.push(CONSTANTS.car.status);
  }

  statusString() {
    return `${this.#name} : ${this.#moveStatus.join(CONSTANTS.string.empty)}`;
  }
}

export default Car;
