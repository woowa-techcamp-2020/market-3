const express = require("express");
const app = express();
const pug = require("pug");
const cookieParser = require('cookie-parser');
const port = 3000;

app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.set("views", "./views");
app.set("view engine", "pug");

const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const apiRouter = require("./routes/api");

app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/api", apiRouter);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
