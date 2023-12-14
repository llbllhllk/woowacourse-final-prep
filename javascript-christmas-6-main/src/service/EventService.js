import Order from '../domain/Order.js';
import VisitDate from '../domain/VisitDate.js';

class EventService {
  #visitDate;

  #order;

  constructor() {}

  setVisitDate(visitDate) {
    this.#visitDate = new VisitDate(visitDate).getFormattedVisitDate();
  }

  setOrder(order) {
    this.#order = new Order(order).getFormattedOrder();
  }
}

export default EventService;
