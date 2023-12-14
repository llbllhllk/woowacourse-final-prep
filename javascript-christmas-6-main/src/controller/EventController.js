import reTry from '../utils/reTry.js';

class EventController {
  #eventService;

  #inputView;

  #outputView;

  constructor(eventService, inputView, outputView) {
    this.#eventService = eventService;
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  start() {}
}

export default EventController;
