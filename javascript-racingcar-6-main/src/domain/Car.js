import { Random } from '@woowacourse/mission-utils';

class Car {
  #name;

  #moveStatus;

  constructor(name) {
    this.#name = name;
    this.#moveStatus = [];
  }

  move() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.#moveStatus.push('-');
    }
  }

  statusString() {
    return `${this.#name} : ${this.#moveStatus.join(' ')}`;
  }
}

export default Car;
