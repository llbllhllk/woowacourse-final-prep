const random = Object.freeze({
  from: 0,
  to: 9,
});

const winners = Object.freeze({
  separator: ', ',
});

const string = Object.freeze({
  empty: '',
});

const carNames = Object.freeze({
  maxLength: 5,
  separator: ',',
});

const car = Object.freeze({
  move: 4,
  status: '-',
});

const status = Object.freeze({
  separator: ' : ',
  name: 0,
  move: 1,
});

const CONSTANTS = Object.freeze({ status, carNames, string, winners, car, random });

export default CONSTANTS;
