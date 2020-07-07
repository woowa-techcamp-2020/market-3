const { logIn } = require("../../api/login");
const { database } = require("../../database/db.js");
const { User } = require("../../database/userSchema");

describe("logIn", () => {
  beforeEach(() => {
    const user1 = new User("user1", "123123");
    database.insert(user1);
  });

  afterEach(() => {
    database.clear();
  });

  describe("가입한 유저의 유효한 아이디와 비밀번호를 입력했을 때,", () => {
    test("로그인에 성공한다", () => {
      expect(logIn("user1", "123123")).toEqual("loginSuccess");
    });
  });

  describe("가입한 유저의 아이디와 틀린 입력했을 때,", () => {
    test("로그인에 실패한다.", () => {
      expect(logIn("user1", "0000")).toEqual("loginFail");
    });
  });

  describe("가입하지 않은 유저 정보를 입력했을 때,", () => {
    test("데이터베이스 에러가 발생한다.", () => {
      const err = new Error("No user has found in database");
      expect(logIn("user100", "0000")).toEqual(err);
    });
  });
});
