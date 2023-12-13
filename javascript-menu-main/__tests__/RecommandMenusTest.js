import { Random } from '@woowacourse/mission-utils';
import RecommandMenus from '../src/domain/RecommandMenus';

const mockRandoms = shuffle => {
  Random.shuffle = jest.fn();
  shuffle.map(number => Random.shuffle.mockReturnValueOnce(number));
};

describe('RecommandMenus 클래스 테스트', () => {
  describe('recommandMenus메서드는 categories를 입력받아 각 코치들의 추천 메뉴를 반환한다.', () => {
    const cases = [
      {
        shuffle: Array(20).fill(Array(10).fill(1)),
        coachNames: ['강병현', '홍길동'],
        unwantedMenu: [
          ['비빔밥', '쌈밥'],
          ['파인애플 볶음밥', '쌀국수'],
        ],
        categories: ['한식', '일식', '양식', '아시안', '중식'],
        expected: [
          ['강병현', ['김밥', '규동', '라자냐', '팟타이', '깐풍기']],
          ['홍길동', ['김밥', '규동', '라자냐', '팟타이', '깐풍기']],
        ],
      },
    ];

    test.each(cases)(
      '$categories가 주어지는 경우, recommandMenus()는 각 코치들의 추천 메뉴인 $expected를 반환한다.',
      ({ shuffle, coachNames, unwantedMenu, categories, expected }) => {
        // given
        mockRandoms(shuffle);

        // when
        const result = new RecommandMenus(coachNames, unwantedMenu).recommandMenus(categories);

        // then
        expect(result).toEqual(expected);
      },
    );
  });
});
