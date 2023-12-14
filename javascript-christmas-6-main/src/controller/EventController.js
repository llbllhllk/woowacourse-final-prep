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
      this.#eventService.setVisitDate(visitDate);

      return this.#inputOrder();
    });
  }

  async #inputOrder() {
    return reTry(async () => {
      const order = await this.#inputView.readOrder();

      console.log(order);
    });
  }
}

export default EventController;
