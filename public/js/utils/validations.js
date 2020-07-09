function isValidId(id) {
  return (
    !hasCapital(id) && !hasSpeical(id) && !hasKorean(id) && isRightIdLength(id)
  );
}

function hasNumber(id) {
  const regexp = /[0-9]/;
  return regexp.test(id);
}

function hasCapital(id) {
  const regexp = /[A-Z]/;
  return regexp.test(id);
}

function hasSpeical(id) {
  const regexp = /[\{\}\[\]\/?.,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/;
  return regexp.test(id);
}

function hasKorean(id) {
  const regexp = /[ㄱ-힣]/;
  return regexp.test(id);
}

function isRightIdLength(id) {
  return id.length >= 4 && id.length <= 20;
}

function isValidPassword(password) {
  return !hasInvalidPasswordInput(password) && isRightPasswordLength(password);
}

function hasInvalidPasswordInput(password) {
  const regexp = /[^a-zA-Z0-9]/;
  return regexp.test(password);
}

function isRightPasswordLength(password) {
  return password.length >= 8 && password.length <= 20;
}

function isValidPasswordChecking(firstPassword, secondPassword) {
  return firstPassword === secondPassword;
}

function isValidName(name) {
  return !hasSpeical(name) && !hasNumber(name);
}