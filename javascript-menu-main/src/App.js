import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import LunchMenuController from './controller/LunchMenuController.js';
import LunchMenuService from './service/LunchMenuService.js';

class App {
  #lunchMenuController;

  constructor() {
    const lunchMenuService = new LunchMenuService();
    this.#lunchMenuController = new LunchMenuController(lunchMenuService, InputView, OutputView);
  }

  async play() {
    return this.#lunchMenuController.start();
  }
}

export default App;

const app = new App();
app.play();
