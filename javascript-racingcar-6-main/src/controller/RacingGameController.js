class RacingGameController {
  #service;

  #inputView;

  #outputView;

  constructor(service, inputView, outputView) {
    this.#service = service;
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  start() {}
}

export default RacingGameController;