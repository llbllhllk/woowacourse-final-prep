import Attempts from '../src/domain/Attempts.js';

describe('Attempts 클래스 테스트', () => {
  describe('getFormattedAttempts 메서드는 attempts를 입력받아 정수형의 시도횟수를 반환한다.', () => {
    const cases = [
      { attempts: '3', expected: 3 },
      { attempts: '5', expected: 5 },
      { attempts: '4', expected: 4 },
    ];

    test.each(cases)(
      '시도횟수의 $attempts 주어지는 경우, getFormattedAttempts()는  $expected를 반환한다.',
      ({ attempts, expected }) => {
        // when
        const result = new Attempts(attempts).getFormattedAttempts();

        // then
        expect(result).toEqual(expected);
      },
    );
  });
});
