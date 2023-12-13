import LottoController from './controller/LottoController.js';
import LottoService from './service/LottoService.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  #lottoController;

  constructor() {
    const lottoService = new LottoService();
    this.#lottoController = new LottoController(lottoService, InputView, OutputView);
  }

  async play() {
    return this.#lottoController.start();
  }
}

export default App;
