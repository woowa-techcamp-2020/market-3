import { hasNumber } from "../../public/js/utils/validations";

//given 파트는
//  테스트에서 구체화하고자 하는 행동을 시작하기 전에 테스트 상태를 설명하는 부분이다.
//when 파트는
//  구체화하고자 하는 그 행동이 된다.
//then 파트는
//  어떤 특정한 행동 때문에 발생할거라고 예상되는 변화에 대해 설명하는 부분이다.

describe("hasNumber", () => {
  // given
  describe("문자열을 인자로 받았을 때", () => {
    // when
    describe("문자열에 숫자가 포함되어 있다면", () => {
        const strWithNumber = 'dummy123';
      // then
      it("True를 리턴한다", () => {
          expect(hasNumber(strWithNumber)).toBeTruthy();
      });
    });

    // when
    describe("문자열에 숫자가 포함되어 있지 않다면", () => {
        // then
        const strWithoutNumber = 'dummy';
        it("false를 리턴한다", () => {
            expect(hasNumber(strWithoutNumber)).toBeFalsy();
        });
      });
  });

//   // given
//   describe("", () => {
//     // when
//     describe("", () => {
//       // then
//       it("", () => {});
//     });
//   });
});
