import reTry from '../utils/reTry.js';

class EventController {
  #eventService;

  #inputView;

  #outputView;

  constructor(eventService, inputView, outputView) {
    this.#eventService = eventService;
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  start() {
    return this.#inputVisitDate();
  }

  async #inputVisitDate() {
    return reTry(async () => {
      const visitDate = await this.#inputView.readVisitDate();
      console.log(visitDate);
    });
  }
}

export default EventController;
