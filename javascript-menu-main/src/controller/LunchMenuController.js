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
    return this.#inputCoachName();
  }

  async #inputCoachName() {
    const coachName = await this.#inputView.readCoachName();

    return this.#inputUnwantedMenu(coachName);
  }

  async #inputUnwantedMenu(coachName) {
    await coachName.reduce(async (promise, name) => {
      await promise;
      const unwantedMenu = await this.#inputView.readUnwantedMenu(name);
    }, Promise.resolve());
  }
}

export default LunchMenuController;
