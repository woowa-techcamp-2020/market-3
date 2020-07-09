const {
  insertUser,
  generateHashedPassword,
} = require("../services/userService");
const bcrypt = require("bcrypt");

async function createUser(req, res) {
  const hashedPassword = await generateHashedPassword(req.body.password);
  
  // Todo: pass email, phone and other data as well
  const userObj = {
    id: req.body.id,
    password: hashedPassword,
  };
  try {
    await insertUser(userObj);
    // Todo: set Cookies for new registerd user
    res.status(200).redirect('../../signupsuccess');
  } catch {
    res.status(500).send("user has not been created");
  }
}

module.exports = {
  createUser,
};
