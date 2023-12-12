import ERROR from '../constants/error.js';

class Attempts {
  #formattedAttempts;

  constructor(attempts) {
    this.#validate(this.#formatAttempts(attempts));
    this.#formattedAttempts = this.#formatAttempts(attempts);
  }

  getFormattedAttempts() {
    return this.#formattedAttempts;
  }

  #validate(attempts) {
    if (Number.isNaN(attempts)) throw new Error(ERROR.attempts.isNaN);
  }

  #formatAttempts(attempts) {
    return Number(attempts);
  }
}

export default Attempts;
