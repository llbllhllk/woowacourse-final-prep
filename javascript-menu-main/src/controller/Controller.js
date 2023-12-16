import reTry from '../utils/reTry.js';

class Controller {
  #Service;

  #inputView;

  #outputView;

  constructor(Service, inputView, outputView) {
    this.#Service = Service;
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  start() {}
}

export default Controller;
