import reTry from '../utils/reTry.js';
import formatCurrency from '../utils/formatCurrency.js';

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
    this.#outputView.printbeforeDiscountAmountString(formatCurrency(beforeDiscountAmount));
    return this.#printGiftMenu(beforeDiscountAmount);
  }

  #printGiftMenu(beforeDiscountAmount) {
    const giftMenu = this.#eventService.giftMenu(beforeDiscountAmount);
    this.#outputView.printGiftMenuString(giftMenu);
    return this.#printBenfitLog();
  }

  #printBenfitLog() {
    const ddayDiscount = this.#eventService.ddayDiscount();
    console.log(ddayDiscount);
  }
}

export default EventController;
