import MENU from '../constants/menu.js';

class Order {
  #formattedOrder;

  constructor(order) {
    this.#validate(this.#formatOrder(order));
    this.#formattedOrder = this.#formatOrder(order);
  }

  getFormattedOrder() {
    return this.#formattedOrder;
  }

  #validate(order) {
    this.#validateFormat(order);
    this.#validateMenu(order);
    this.#validateQuantity(order);
    this.#validateDuplicated(order);
  }

  #validateDuplicated(order) {
    const menus = order.map(([menuName, quantity]) => menuName);
    if (menus.length !== new Set(menus).size)
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  }

  #validateQuantity(order) {
    order.forEach(([menuName, quantity]) => {
      if (quantity < 1) throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    });
  }

  #validateFormat(order) {
    order.forEach(([menuName, quantity]) => {
      if (Number.isNaN(quantity))
        throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    });
  }

  #validateMenu(order) {
    order.forEach(([menuName, quantity]) => {
      const menuFound = Object.values(MENU.list).some(menuList =>
        this.#checkOrderValidity(menuName, menuList),
      );
      if (!menuFound) {
        throw new Error(`[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.`);
      }
    });
  }

  #checkOrderValidity(menuName, menuList) {
    return menuList.some(menu => menu.name === menuName);
  }

  #formatOrder(order) {
    return order
      .split(',')
      .map(menu => menu.split('-'))
      .map(([name, quantity]) => [name, parseInt(quantity)]);
  }
}

export default Order;
