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
    console.log(carNames);
  }
}

export default RacingGameController;
