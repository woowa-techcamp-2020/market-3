const express = require("express");
const app = express();
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
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user")

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/user", userRouter);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
