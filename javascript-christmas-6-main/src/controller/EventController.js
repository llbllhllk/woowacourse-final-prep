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
    this.#eventService.setBeforeDiscountAmount();
    const beforeDiscountAmount = this.#eventService.beforeDiscountAmount();
    this.#outputView.printbeforeDiscountAmountString(formatCurrency(beforeDiscountAmount));
    return this.#printGiftMenu();
  }

  #printGiftMenu() {
    const giftMenu = this.#eventService.giftMenu();
    this.#outputView.printGiftMenuString(giftMenu);
    return this.#printBenfitLog();
  }

  #printBenfitLog() {
    this.#eventService.setDDayDiscount();
    const ddayDiscountString = this.#eventService.ddayDiscountString();

    this.#eventService.setWeekDayDiscount();
    const weekDayDiscountString = this.#eventService.weekDayDiscountString();

    this.#eventService.setWeekendDiscount();
    const weekendDiscountString = this.#eventService.weekendDiscountString();

    this.#eventService.setSpecialDayDiscount();
    const specialDayDiscountString = this.#eventService.specialDayDiscountString();

    this.#eventService.setGiftMenuDiscount();
    const giftMenuDiscountString = this.#eventService.giftMenuDiscountString();

    this.#outputView.printBenefitLogString(
      ddayDiscountString,
      weekDayDiscountString,
      weekendDiscountString,
      specialDayDiscountString,
      giftMenuDiscountString,
    );
  }
}

export default EventController;
