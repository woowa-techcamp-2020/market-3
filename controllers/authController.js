const { getUserById, verifyPassword } = require("../services/authService");

async function login(req, res) {
  const { id, password } = req.body;

  const user = await getUserById(id);
  const isValid = await verifyPassword(password, user);

  if (isValid) {
    res.cookie("id", id, { path: "/" });
    res.status(200).redirect("../..");
  } else {
    res
      .status(401)
      .send(
        '<script type="text/javascript">alert("아이디 또는 비밀번호를 확인해주세요");window.location.href = "/signin";</script>'
      );
  }
}

async function logout(req, res) {
  res.clearCookie("id");
  res.status(200).redirect("../..");
}

module.exports = {
  login,
  logout,
};
