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

  // 주문 메뉴와 개수를 반환하는 기능
  orderString() {
    return this.#order.map(item => {
      return `${item[0]} ${item[1]}개`;
    });
  }
}

export default EventService;
