const {
  insertUser,
  generateHashedPassword,
} = require("../services/userService");
const bcrypt = require("bcrypt");

async function createUser(req, res) {
  const hashedPassword = await generateHashedPassword(req.body.password);

  const email = req.body.emailId + "@" + req.body.emailDomain;
  const address = req.body.address
    ? req.body.address + " " + req.body.addressDetail
    : null;

  
  const userObj = {
    id: req.body.id,
    password: hashedPassword,
    email: email,
    name: req.body.name,
    phone: req.body.phone,
    zipcode: req.body.zipcode,
    address: req.body.address,
  };

  try {
    await insertUser(userObj);
    // Todo: set Cookies for new registerd user
    res.status(200).redirect("../../signupsuccess");
  } catch {
    res.status(500).send("user has not been created");
  }
}

module.exports = {
  createUser,
};
