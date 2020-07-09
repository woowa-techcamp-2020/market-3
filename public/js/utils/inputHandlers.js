function idInputHandler(e) {
  const targetNode = e.target;
  const id = targetNode.value;
  const parentNode = targetNode.parentNode;
  const nodeElement = generateNodeElement();

  if (isValidId(id)) {
    makeSuccessNode(nodeElement, targetNode, "사용 가능한 아이디입니다");
  } else {
    if (hasCapital(id)) {
      makeWarningNode(nodeElement, targetNode, "대문자는 아이디로 사용이 불가합니다");
    } else if (hasSpeical(id)) {
      makeWarningNode(nodeElement, targetNode, "특수기호는 (-),(_)만 사용 가능합니다");
    } else if (hasKorean(id)) {
      makeWarningNode(nodeElement, targetNode, "한글은 아이디로 사용이 불가합니다");
    } else if (!isRightIdLength(id)) {
      makeWarningNode(nodeElement, targetNode, "아이디는 4~20자로 제한됩니다");
    }
  }
  appendNodeMsg(nodeElement, parentNode);
}


function passwordInputHandler(e) {
  const targetNode = e.target
  const password = targetNode.value;
  const parentNode = targetNode.parentNode;
  const nodeElement = generateNodeElement();
  
  if (isValidPassword(password)) {
    makeSuccessNode(nodeElement, targetNode, "");
  } else {
    makeWarningNode(nodeElement, targetNode, "유효하지 않은 비밀번호입니다");
  }
  appendNodeMsg(nodeElement, parentNode);
}


function passwordChecker(e) {
  const targetNode = e.target
  const parentNode = targetNode.parentNode;
  const firstPassword = targetNode.parentNode.previousSibling.firstElementChild.value;
  const secondPassword = targetNode.value;
  const nodeElement = generateNodeElement();

  if(isValidPasswordChecking(firstPassword, secondPassword)) {
    makeSuccessNode(nodeElement, targetNode, "");
  } else {
    makeWarningNode(nodeElement, targetNode, "비밀번호가 일치하지 않습니다");
  }
  appendNodeMsg(nodeElement, parentNode);
}

function emailDomainHandler(e) {
  const targetNode = e.target;
  const parentNode = targetNode.parentNode;
  const emailDomainInputForm = parentNode.previousSibling.lastElementChild;
  const emailDomains = targetNode.options[targetNode.options.selectedIndex].value;

  if(emailDomains === 'others') {
    blockInput(emailDomainInputForm);
  } else {
    unblockInput(emailDomainInputForm, targetNode);
  }
}

function nameInputHandler(e) {
  const targetNode = e.target;
  const parentNode = targetNode.parentNode;
  const name = targetNode.value;
  const nodeElement = generateNodeElement();

  if (isValidName(name)) {
    makeSuccessNode(nodeElement, targetNode, "");
  } else {
    makeWarningNode(nodeElement, targetNode, "유효하지 않은 이름입니다");
  }
  appendNodeMsg(nodeElement, parentNode);
}

function mobileInputHandler(e) {
  const targetNode = e.target;
  const parentNode = targetNode.parentNode;
  const mobilePhoneNumber = targetNode.value;
  const nodeElement = generateNodeElement();
  if (isValidPhoneNumber(mobilePhoneNumber)) {
    makeSuccessNode(nodeElement, targetNode, "");
  } else {
    makeWarningNode(nodeElement, targetNode, "유효하지 않은 휴대폰 번호입니다");
  }
  appendNodeMsg(nodeElement, parentNode);
}


function modalHandler(e) {
  e.preventDefault()
  const targetNode = e.target;
  const mobilePhoneNumber = targetNode.previousSibling.value;
  const certTime = document.querySelector(".cert-time");

  if(isValidPhoneNumber(mobilePhoneNumber)) {
    mobileFormmodal.style.display = "block";
    printTime(certTime);
  }
}

function printTime(nodeElement) {
  let num = 3
  const interval = setInterval(function (){
    nodeElement.innerHTML = `${Math.floor(num / 60)}분 ${num % 60}초 남았습니다`;
    num -= 1;
    if(num < 0) {
      clearInterval(interval)
      nodeElement.innerHTML = '입력 시간이 초과되었습니다'
    }
  }, 1000)
}

function closeHandler(e) {
  mobileFormmodal.style.display = "none";
  clearInterval(printTime)
}