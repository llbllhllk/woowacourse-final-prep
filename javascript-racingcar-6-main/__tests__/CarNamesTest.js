import CarNames from '../src/domain/CarNames.js';

describe('CarNames 클래스 테스트', () => {
  describe('getFormattedCarNames 메서드는 carNames를 입력받아 자동차 배열을 반환한다.', () => {
    const cases = [
      { carNames: 'pobi, byeon, hyeon', expected: ['pobi', 'byeon', 'hyeon'] },
      { carNames: 'kang, byeon, hyeon', expected: ['kang', 'byeon', 'hyeon'] },
    ];

    test.each(cases)(
      '자동차 이름의 $carNames가 주어지는 경우, getFormattedCarNames()는  $expected를 반환한다.',
      ({ carNames, expected }) => {
        // when
        const result = new CarNames(carNames).getFormattedCarNames();

        // then
        expect(result).toEqual(expected);
      },
    );
  });
});
