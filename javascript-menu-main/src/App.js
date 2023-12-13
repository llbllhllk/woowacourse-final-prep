import LunchMenuController from './controller/LunchMenuController.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  #lunchMenuController;

  constructor() {
    // const Service = new Service();
    this.#lunchMenuController = new LunchMenuController(InputView, OutputView);
  }

  async play() {
    return this.#lunchMenuController.start();
  }
}

export default App;

const app = new App();
app.play();
