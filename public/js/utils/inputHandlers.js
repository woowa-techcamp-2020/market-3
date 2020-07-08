function idInputHandler(e) {
  const id = e.target.value;
  const parentNode = e.target.parentNode;
  let warningDOMElement = null;

  if (isValidId(id)) {
    warningDOMElement = generateWarningDOM("사용 가능한 아이디입니다");
    e.target.classList.remove("warning");
  } else {
    if (hasCapital(id)) {
      warningDOMElement = generateWarningDOM("영문 대문자는 아이디로 사용이 불가합니다");
    } else if (hasSpeical(id)) {
      warningDOMElement = generateWarningDOM("특수기호는 (-),(_)만 사용 가능합니다");
    } else if (hasKorean(id)) {
      warningDOMElement = generateWarningDOM("한글은 아이디로 사용이 불가합니다");
    } else if (!isRightIdLength(id)) {
      warningDOMElement = generateWarningDOM("아이디는 4~20자로 제한됩니다");
    }
8 
    e.target.classList.add("warning");
  }
  
  updateWarningDOM(warningDOMElement, parentNode);
}


function passwordInputHandler(e) {
  const password = e.target.value;
  const parentNode = e.target.parentNode;
  let warningDOMElement = null;
  
  if (isValidPassword(password)) {
    warningDOMElement = generateWarningDOM("");
    e.target.classList.remove("warning");
  } else {
    warningDOMElement = generateWarningDOM("유효하지 않은 비밀번호입니다");
    e.target.classList.add("warning");
  }
  updateWarningDOM(warningDOMElement, parentNode);
}

function passwordChecker(e) {
  const firstPassword = e.target.value;
  const SecondPassword = e.target.parentNode.previousSibling.firstElementChild.value;
  const parentNode = e.target.parentNode;
  let warningDOMElement = null;

  // if(isValidPasswordChecking(, password)) {

  // }
}
