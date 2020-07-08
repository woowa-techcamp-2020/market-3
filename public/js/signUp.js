const idFormInput = document.querySelector(".id-form__input");

idFormInput.addEventListener("blur", handleIdInputBlur);

function handleIdInputBlur(e) {
  const parentNode = e.target.parentNode;
  let warning = null;
  const id = idFormInput.value;

  if (isValid(id)) {
    warning = generateWarningDOM("사용 가능한 아이디입니다");
    e.target.classList.remove("warning");
  } else {
    if (hasCapital(id)) {
      warning = generateWarningDOM("영문 대문자는 아이디로 사용이 불가합니다");
    } else if (hasSpeical(id)) {
      warning = generateWarningDOM("특수기호는 (-),(_)만 사용 가능합니다");
    } else if (hasKorean(id)) {
      warning = generateWarningDOM("한글은 아이디로 사용이 불가합니다");
    } else if (!isRightLength(id)) {
      warning = generateWarningDOM("아이디는 4~20자로 제한됩니다");
    }
    e.target.classList.add("warning");
  }

  updateWarning(warning, parentNode);
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

function isRightLength(id) {
  return id.length >= 4 && id.length <= 20;
}

function isValid(id) {
  return (
    !hasCapital(id) && !hasSpeical(id) && !hasKorean(id) && isRightLength(id)
  );
}

function generateWarningDOM(errorMessage) {
  const warning = document.createElement("p");
  warning.classList.add("warning__text");
  warning.innerHTML = errorMessage;
  return warning;
}

function updateWarning(next, parent) {
  const lastChild = parent.lastElementChild;

  if (lastChild.className === "warning__text") {
    parent.replaceChild(next, lastChild);
  } else {
    parent.appendChild(next);
  }
}
