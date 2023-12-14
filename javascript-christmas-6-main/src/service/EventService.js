import VisitDate from '../domain/VisitDate.js';

class EventService {
  #visitDate;
  constructor() {}

  setVisitDate(visitDate) {
    this.#visitDate = new VisitDate(visitDate);
  }
}

export default EventService;
