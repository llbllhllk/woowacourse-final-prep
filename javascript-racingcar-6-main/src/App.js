import RacingGameController from './controller/RacingGameController.js';
import RacingGameService from './service/RacingGameService.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  #racingGameController;

  constructor() {
    const racingGameService = new RacingGameService();
    this.#racingGameController = new RacingGameController(racingGameService, InputView, OutputView);
  }

  async play() {
    return this.#racingGameController.start();
  }
}

export default App;
