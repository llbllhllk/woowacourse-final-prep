import EventController from './controller/EventController.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import EventService from './service/EventService.js';

class App {
  #eventController;

  constructor() {
    const eventService = new EventService();
    this.#eventController = new EventController(eventService, InputView, OutputView);
  }

  async run() {
    return this.#eventController.start();
  }
}

export default App;
