import MENU from '../constants/menu.js';
import Order from '../domain/Order.js';
import VisitDate from '../domain/VisitDate.js';
import formatCurrency from '../utils/formatCurrency.js';

class EventService {
  #visitDate;

  #order;

  #ddayDiscount;

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
  setDDayDiscount() {
    if (this.#visitDate >= 1 && this.#visitDate <= 25) {
      this.#ddayDiscount = 1000 + (this.#visitDate - 1) * 100;
      return this.#ddayDiscount;
    }
  }

  ddayDiscountString() {
    if (this.#ddayDiscount !== undefined)
      return `크리스마스 디데이 할인: -${formatCurrency(this.#ddayDiscount)}원`;
  }
}

export default EventService;
