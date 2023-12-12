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

    this.#inputAttempts();
  }

  async #inputAttempts() {
    const attempts = await this.#inputView.readAttempts();

    console.log(attempts);
  }
}

export default RacingGameController;
