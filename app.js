const express = require("express");
const app = express();
const pug = require("pug");
const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/signIn", (req, res) => {
  res.render("signIn");
});
app.get("/signUp", (req, res) => {
  res.render("signUp");
});
app.get("/signUpSuccess", (req, res) => {
  res.render("signUpSuccess");
});

app.get("/", (req, res) => {
  res.render("main");
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
