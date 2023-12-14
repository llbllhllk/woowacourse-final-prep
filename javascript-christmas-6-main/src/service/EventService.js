import MENU from '../constants/menu.js';
import Order from '../domain/Order.js';
import VisitDate from '../domain/VisitDate.js';
import checkWeekdayOrWeekend from '../utils/checkWeekdayOrWeekend.js';
import formatCurrency from '../utils/formatCurrency.js';

class EventService {
  #visitDate;

  #order;

  #beforeDiscountAmount;

  // benefit
  #ddayDiscount;
  #weekDayDiscount;
  #weekendDiscount;
  #specialDayDiscount;

  constructor() {
    this.#ddayDiscount = 0;
    this.#weekDayDiscount = 0;
    this.#weekendDiscount = 0;
    this.#specialDayDiscount = 0;
  }

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

  setBeforeDiscountAmount() {
    const totalAmount = this.#order.reduce((acc, [menuName, quantity]) => {
      const menu = Object.values(MENU.list)
        .flat()
        .find(item => item.name === menuName);
      return acc + (menu ? menu.prize * quantity : 0);
    }, 0);
    this.#beforeDiscountAmount = totalAmount;
  }

  beforeDiscountAmount() {
    return this.#beforeDiscountAmount;
  }

  giftMenu() {
    if (this.#beforeDiscountAmount > 120000) return '샴페인 1개';
    return '없음';
  }

  // Benefit

  // DDay
  setDDayDiscount() {
    if (this.#visitDate >= 1 && this.#visitDate <= 25) {
      this.#ddayDiscount -= 1000 + (this.#visitDate - 1) * 100;
      return this.#ddayDiscount;
    }
  }

  ddayDiscountString() {
    if (this.#ddayDiscount !== 0)
      return `크리스마스 디데이 할인: ${formatCurrency(this.#ddayDiscount)}원`;
    return false;
  }

  // Weekday
  setWeekDayDiscount() {
    const MONTH = 12;
    const YEAR = 2023;
    if (checkWeekdayOrWeekend(YEAR, MONTH, this.#visitDate) === '평일') {
      this.#order.forEach(([menuName, quantity]) => {
        const dessertMenu = MENU.list['디저트'].find(menu => menu.name === menuName);
        if (dessertMenu) {
          const discountPerItem = 2023;
          const discountAmount = discountPerItem * quantity;
          this.#weekDayDiscount -= discountAmount;
        }
      });
    }
    return this.#weekDayDiscount;
  }

  weekDayDiscountString() {
    if (this.#weekDayDiscount !== 0) return `평일 할인: ${formatCurrency(this.#weekDayDiscount)}원`;
    return false;
  }

  // Weekend
  setWeekendDiscount() {
    const MONTH = 12;
    const YEAR = 2023;
    if (checkWeekdayOrWeekend(YEAR, MONTH, this.#visitDate) === '주말') {
      this.#order.forEach(([menuName, quantity]) => {
        const mainMenu = MENU.list['메인'].find(menu => menu.name === menuName);
        if (mainMenu) {
          const discountPerItem = 2023;
          const discountAmount = discountPerItem * quantity;
          this.#weekendDiscount -= discountAmount;
        }
      });
    }
    return this.#weekendDiscount;
  }

  weekendDiscountString() {
    if (this.#weekendDiscount !== 0) return `주말 할인: ${formatCurrency(this.#weekendDiscount)}원`;
    return false;
  }

  setSpecialDayDiscount() {
    const MONTH = 12;
    const YEAR = 2023;
    const inputDate = new Date(YEAR, MONTH - 1, this.#visitDate);
    const dayOfWeek = inputDate.getDay();
    if (this.#visitDate === 25 || dayOfWeek === 0)
      this.#specialDayDiscount = this.#beforeDiscountAmount - 1000;
  }

  specialDayDiscount() {
    if (this.#specialDayDiscount !== 0)
      return `특별 할인: ${formatCurrency(this.#specialDayDiscount)}원`;
    return false;
  }
}

export default EventService;
