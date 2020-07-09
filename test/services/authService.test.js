const { database } = require("../../database/db.js");
const { User } = require("../../database/userSchema");
const { getUserById, verifyPassword } = require("../../services/authService");

const dummyUserData = {
  id: "user1",
  password: "123123",
};

describe("getUserById", () => {
  beforeEach(async () => {
    const user1 = new User(dummyUserData.id, dummyUserData.password);
    database.insert(user1);
  });

  afterEach(() => {
    database.clear();
  });

  describe("db 에 가입한 유저의 정보가 존재할 때", () => {
    it("유저 정보를 가져온다", async () => {
      const fetchedUser = await getUserById(dummyUserData.id);
      expect(fetchedUser.id).toEqual(dummyUserData.id);
      expect(fetchedUser.password).toEqual(dummyUserData.password);
    });
  });

  describe("db에 가입한 유저의 정보가 존재하지 않을 때", () => {
    it("데이터베이스 에러를 리턴한다", async () => {
      await database.clear();
      const err = new Error("No user has found in database");
      const result = await getUserById(dummyUserData.id);
      expect(result).toEqual(err);
    });
  });
});

describe("verifyPassword", () => {});
