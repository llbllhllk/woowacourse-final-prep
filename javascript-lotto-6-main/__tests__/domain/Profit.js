import Profit from '../../src/domain/Profit.js';

describe('Profit 클래스 테스트', () => {
  describe('profit 메서드는 총 수익률인 반환한다.', () => {
    const cases = [
      {
        matchResult: [0, 0, 0, 3, 0, 0],
        amount: 3000,
        expected: '150000.0',
      },
      {
        matchResult: [0, 0, 0, 0, 1, 0],
        amount: 3000,
        expected: '1000000.0',
      },
    ];

    test.each(cases)(
      ' 주어지는 경우, calcultaeStrikeCount()는 개수 $expected를 반환한다.',
      ({ matchResult, amount, expected }) => {
        // when
        const profit = new Profit(matchResult, amount).profit();

        // then
        expect(profit).toStrictEqual(expected);
      },
    );
  });
});
