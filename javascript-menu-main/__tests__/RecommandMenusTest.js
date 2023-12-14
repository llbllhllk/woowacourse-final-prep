import RecommandMenus from '../src/domain/RecommandMenus.js';
import { Random } from '@woowacourse/mission-utils';

const mockRandoms = numbers => {
  Random.shuffle = jest.fn();
  numbers.map(number => Random.shuffle.mockReturnValueOnce(number));
};

const generateNumberArray = count => {
  const baseArray = [2, 4, 1, 3, 5, 6, 7, 8, 9];
  return Array.from({ length: count }, () => baseArray);
};

describe('RecommandMenus 클래스 테스트', () => {
  describe('recommandMenus메서드는 randomCategories를 입력받아 메뉴 추천과 해당 코치이름을 배열 형태로 반환한다.', () => {
    const cases = [
      {
        numbers: generateNumberArray(20),
        coachName: ['홍길동', '강병현'],
        unwantedMenu: [
          ['비빔밥', '똠양꿍'],
          ['규동', '김밥'],
        ],
        randomCategories: ['일식', '한식', '중식', '아시안', '양식'],
        expected: [
          ['홍길동', ['우동', '김치찌개', '볶음면', '카오 팟', '그라탱']],
          ['강병현', ['우동', '김치찌개', '볶음면', '카오 팟', '그라탱']],
        ],
      },
    ];

    test.each(cases)(
      '랜덤한 카테고리 $randimCategories, 코치들의 이름 $coachName,  못 먹는 메뉴인 $unwantedMenu, 카테고리 $randomCategories이 주어지는 경우, recommandMenus()는 메뉴 추천과 해당 코치 이름인 $expected를 반환한다.',
      ({ numbers, coachName, unwantedMenu, randomCategories, expected }) => {
        // given
        mockRandoms(numbers);

        // when
        const result = new RecommandMenus(coachName, unwantedMenu).recommandMenus(randomCategories);

        // then
        expect(result).toEqual(expected);
      },
    );
  });
});
