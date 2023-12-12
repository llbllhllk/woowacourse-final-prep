class Attempts {
  #formattedAttempts;

  constructor(attempts) {
    this.#validate(this.#formatAttempts(attempts));
    this.#formattedAttempts = this.#formatAttempts(attempts);
  }

  getFormattedCoachNames() {
    return this.#formattedAttempts;
  }

  #validate(attempts) {
    if (Number.isNaN(attempts)) throw new Error('[ERROR] 숫자가 아닙니다.');
  }

  #formatAttempts(attempts) {
    return Number(attempts);
  }
}

export default Attempts;
