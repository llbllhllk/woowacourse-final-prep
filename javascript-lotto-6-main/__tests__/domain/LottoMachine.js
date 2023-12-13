import { Random } from '@woowacourse/mission-utils';
import LottoMachine from '../../src/domain/LottoMachine.js';

const mockRandoms = numbers => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.map(number => Random.pickUniqueNumbersInRange.mockReturnValueOnce(number));
};

describe('LottoMachine 클래스 테스트', () => {
  describe('lottoString 메서드는 string 타입의 로또 번호로 반환한다.', () => {
    const cases = [
      {
        numbers: [
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
        ],
        numberOfPurchase: 3,
        expected: ['[1, 2, 3, 4, 5, 6]', '[1, 2, 3, 4, 5, 6]', '[1, 2, 3, 4, 5, 6]'],
      },
    ];

    test.each(cases)(
      '로또 구매 개수가 주어지는 경우, lottosString()는 string 타입의 로또 번호 $expected를 반환한다.',
      ({ numbers, numberOfPurchase, expected }) => {
        // given
        mockRandoms(numbers);

        // when
        const lottoString = new LottoMachine(numberOfPurchase).lottosString();

        // then
        expect(lottoString).toStrictEqual(expected);
      },
    );
  });

  describe('matchResult 메서드는 winningNumber와 bonusNumber를 가지고 matchCount를 반환한다.', () => {
    const cases = [
      {
        numbers: [
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
        ],
        numberOfPurchase: 3,
        winningNumbers: [1, 2, 3, 4, 5, 45],
        bonusNumber: 45,
        expected: [0, 0, 0, 3, 0, 0],
      },
    ];

    test.each(cases)(
      '당첨 번호인 $winningNumbers와 보너스 번호인 $bonusNumber가 주어진 경우 matchResult()는 matchCount인 $expected를 반환한다.',
      ({ numbers, numberOfPurchase, winningNumbers, bonusNumber, expected }) => {
        // given
        mockRandoms(numbers);

        // when
        const matchResult = new LottoMachine(numberOfPurchase).matchResult(
          winningNumbers,
          bonusNumber,
        );

        // then
        expect(matchResult).toStrictEqual(expected);
      },
    );
  });
});
