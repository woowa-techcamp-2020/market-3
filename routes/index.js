const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("main");
});

router.get("/signin", (req, res) => {
  res.render("signIn");
});

router.get("/signup", (req, res) => {
  res.render("signUp");
});

router.get("/signupsuccess", (req, res) => {
  res.render("signUpSuccess");
});

module.exports = router;
