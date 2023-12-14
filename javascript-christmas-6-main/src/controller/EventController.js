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
    this.#outputView.printGreetingString();
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
      this.#eventService.setOrder(order);
      return this.#printOrderMenu();
    });
  }

  #printOrderMenu() {
    this.#outputView.printPreviewHeaderString();
    const orderString = this.#eventService.orderString();
    this.#outputView.printOrderString(orderString);
    return this.#printBeforeDiscountAmount();
  }

  #printBeforeDiscountAmount() {
    const beforeDiscountAmount = this.#eventService.beforeDiscountAmount();
    console.log(beforeDiscountAmount);
  }
}

export default EventController;
