const { database } = require("../database/db");
const { User } = require("../database/userSchema");
const bcrypt = require("bcrypt");

const SALT = 2;

async function insertUser(userObj) {
  const user = new User(userObj.id, userObj.password);

  await database.insert(user);
  console.log(database);
}

async function generateHashedPassword(password) {
  try {
    const hashedPassword = await bcrypt.hash(password, SALT);
    return hashedPassword;
  } catch (err) {
    return err
  }
}

module.exports = {
  insertUser,
  generateHashedPassword
};
