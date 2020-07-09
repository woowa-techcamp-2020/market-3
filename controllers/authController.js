const { getUserById, verifyPassword } = require("../services/authService");

async function login(req, res) {
  const { id, password } = req.body;

  const user = await getUserById(id);
  const isValid = await verifyPassword(password, user);
  console.log(isValid);
  if (isValid) {
    res.cookie("id", id);
    res.status(200).send("login Success");
    // res.redirect("../..");
  } else {
    res.status(401).send("login Fail");
  }
}

async function logout(req, res) {
  res.status(200).send("api logout called");
}

module.exports = {
  login,
  logout,
};
