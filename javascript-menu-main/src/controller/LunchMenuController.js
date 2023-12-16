import reTry from '../utils/reTry.js';

class LunchMenuController {
  #lunchMenuService;

  #inputView;

  #outputView;

  constructor(lunchMenuService, inputView, outputView) {
    this.#lunchMenuService = lunchMenuService;
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  start() {
    return this.#inputCoachNames();
  }

  async #inputCoachNames() {
    return reTry(async () => {
      const coachNames = await this.#inputView.readCoachNames();
      console.log(coachNames);
    });
  }
}

export default LunchMenuController;
