import MENU from '../constants/menu.js';
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

  orderString() {
    return this.#order.map(item => {
      return `${item[0]} ${item[1]}개`;
    });
  }

  beforeDiscountAmount() {
    const totalAmount = this.#order.reduce((acc, [menuName, quantity]) => {
      const menu = Object.values(MENU.list)
        .flat()
        .find(item => item.name === menuName);
      return acc + (menu ? menu.prize * quantity : 0);
    }, 0);
    return totalAmount;
  }

  giftMenu(beforeDiscountAmount) {
    if (beforeDiscountAmount > 120000) return '샴페인 1개';
    return '없음';
  }

  // Benefit
  ddayDiscount() {
    if (this.#visitDate >= 1 && this.#visitDate <= 25) {
      return 1000 + (this.#visitDate - 1) * 100;
    }
    return false;
  }
}

export default EventService;
