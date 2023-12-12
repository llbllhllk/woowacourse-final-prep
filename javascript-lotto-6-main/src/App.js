import LottoController from './controller/LottoController.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  #lottoController;

  constructor() {
    // const Service = new Service();
    this.#lottoController = new LottoController(InputView, OutputView);
  }

  async play() {
    return this.#lottoController.start();
  }
}

export default App;
