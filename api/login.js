const { database } = require("../database/db.js");

function logIn(id, password) {
  let user = null;
  try {
    user = database.findById(id);
  } catch (error) {
    return error;
  }

  if (password === user.password) return "loginSuccess";
  else return "loginFail";
}

module.exports = {
  logIn,
};
