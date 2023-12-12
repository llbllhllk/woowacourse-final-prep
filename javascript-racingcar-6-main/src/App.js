import RacingGameController from './controller/RacingGameController.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  #racingGameController;

  constructor() {
    const Service = new Service();
    this.#racingGameController = new RacingGameController(Service, InputView, OutputView);
  }

  async play() {
    return this.#racingGameController.start();
  }
}

export default App;
