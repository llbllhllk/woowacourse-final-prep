import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  #Controller;

  constructor() {
    const Service = new Service();
    this.#Controller = new Controller(Service, InputView, OutputView);
  }

  async play() {
    return this.#Controller.start();
  }
}

export default App;
