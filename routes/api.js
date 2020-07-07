const express = require("express");
const router = express.Router();
const { logIn } = require("../api/login");

router.post("/login", (req, res) => {
  // TODO: validate req received from signIn pug page
  const { id, password } = req.body;
  const result = logIn(id, password);

  if (result === "loginFail") res.status(401).send("loginFail");
  else {
    res.cookie("id", id);
    res.status(200);
    res.redirect("../..");
  }
});

router.get("/logout", (req, res) => {
  res.status(200).send("api logout called");
});

module.exports = router;
