const { database } = require("../database/db");
const bcrypt = require('bcrypt');

async function getUserById(id) {
  let user = null;
  try {
    user = await database.findById(id);
  } catch (error) {
    return error;
  }
  return user;
}

async function verifyPassword(passwordInput, user) {
  try {
    const result = await bcrypt.compare(passwordInput, user.password);
    return result;
  } catch {
    return false;
  }
}

module.exports = {
  getUserById,
  verifyPassword,
};
