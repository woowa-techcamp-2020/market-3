export function isValidId(id) {
  return (
    !hasCapital(id) && !hasSpeical(id) && !hasKorean(id) && isRightIdLength(id)
  );
}

export function hasNumber(id) {
  const regexp = /[0-9]/;
  return regexp.test(id);
}

export function hasCapital(id) {
  const regexp = /[A-Z]/;
  return regexp.test(id);
}

export function hasSpeical(id) {
  const regexp = /[\{\}\[\]\/?.,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/;
  return regexp.test(id);
}

export function hasKorean(id) {
  const regexp = /[ㄱ-힣]/;
  return regexp.test(id);
}

export function isRightIdLength(id) {
  return id.length >= 4 && id.length <= 20;
}

export function isValidPassword(password) {
  return !hasInvalidPasswordInput(password) && isRightPasswordLength(password);
}

export function hasInvalidPasswordInput(password) {
  const regexp = /[^a-zA-Z0-9]/;
  return regexp.test(password);
}

export function isRightPasswordLength(password) {
  return password.length >= 8 && password.length <= 20;
}

export function isValidPasswordChecking(firstPassword, secondPassword) {
  return firstPassword === secondPassword;
}

export function isValidName(name) {
  return !hasSpeical(name) && !hasNumber(name);
}

export function isValidPhoneNumber(phoneNumber) {
  return hasNumber(phoneNumber);
}

export function hasWarningMsg(nodeElement) {
  return nodeElement.classList.contains('warning');
}
