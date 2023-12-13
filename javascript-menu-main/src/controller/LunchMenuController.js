import CoachName from '../domain/CoachName.js';
import UnwantedMenu from '../domain/UnwantedMenu.js';
import reTry from '../utils/reTry.js';

class LunchMenuController {
  // #service;

  #inputView;

  #outputView;

  constructor(inputView, outputView) {
    // param: service
    // this.#service = service;
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  start() {
    this.#outputView.printStartString();
    return this.#inputCoachName();
  }

  async #inputCoachName() {
    return reTry(async () => {
      const coachName = await this.#inputView.readCoachName();
      const formattedCoachName = new CoachName(coachName).getFormattedCoachName();

      return this.#inputUnwantedMenu(formattedCoachName);
    });
  }

  async #inputUnwantedMenu(formattedCoachName) {
    return reTry(async () => {
      await formattedCoachName.reduce(async (promise, name) => {
        await promise;
        const unwantedMenu = await this.#inputView.readUnwantedMenu(name);
        const formattedUnwantedMenu = new UnwantedMenu(unwantedMenu).getFormattedUnwantedMenu();
      }, Promise.resolve());
    });
  }
}

export default LunchMenuController;
