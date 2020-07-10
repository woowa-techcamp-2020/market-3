import {
  generateNodeElement,
  makeSuccessNode,
  makeWarningNode,
  appendNodeMsg,
  blockInput,
  unblockInput,
  emailBlockInput,
} from "/js/utils/domControl.js";
import {
  isValidId,
  hasCapital,
  hasSpeical,
  hasKorean,
  isRightIdLength,
  isValidPassword,
  isValidPasswordChecking,
  isValidPhoneNumber,
  isValidName,
} from "/js/utils/validations.js";

export function idInputHandler(e) {
  const targetNode = e.target;
  const id = targetNode.value;
  const parentNode = targetNode.parentNode;
  const nodeElement = generateNodeElement();

  if (isValidId(id)) {
    makeSuccessNode(nodeElement, targetNode, "사용 가능한 아이디입니다");
  } else {
    if (hasCapital(id)) {
      makeWarningNode(
        nodeElement,
        targetNode,
        "대문자는 아이디로 사용이 불가합니다"
      );
    } else if (hasSpeical(id)) {
      makeWarningNode(
        nodeElement,
        targetNode,
        "특수기호는 (-),(_)만 사용 가능합니다"
      );
    } else if (hasKorean(id)) {
      makeWarningNode(
        nodeElement,
        targetNode,
        "한글은 아이디로 사용이 불가합니다"
      );
    } else if (!isRightIdLength(id)) {
      makeWarningNode(nodeElement, targetNode, "아이디는 4~20자로 제한됩니다");
    }
  }
  appendNodeMsg(nodeElement, parentNode);
}

export function passwordInputHandler(e) {
  const targetNode = e.target;
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

export function passwordChecker(e) {
  const targetNode = e.target;
  const parentNode = targetNode.parentNode;
  const firstPassword =
    targetNode.parentNode.previousSibling.firstElementChild.value;
  const secondPassword = targetNode.value;
  const nodeElement = generateNodeElement();

  if (isValidPasswordChecking(firstPassword, secondPassword)) {
    makeSuccessNode(nodeElement, targetNode, "");
  } else {
    makeWarningNode(nodeElement, targetNode, "비밀번호가 일치하지 않습니다");
  }
  appendNodeMsg(nodeElement, parentNode);
}

export function emailDomainHandler(e) {
  const targetNode = e.target;
  const parentNode = targetNode.parentNode;
  const emailDomainInputForm = parentNode.previousSibling.lastElementChild;
  const emailDomains =
    targetNode.options[targetNode.options.selectedIndex].value;

  if (emailDomains === "others") {
    unblockInput(emailDomainInputForm);
  } else {
    emailBlockInput(emailDomainInputForm, targetNode);
  }
}

export function nameInputHandler(e) {
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

export function mobileInputHandler(e) {
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

export function mobileModalHandler(e) {
  e.preventDefault();
  const targetNode = e.target;
  const mobilePhoneNumber = targetNode.previousSibling.value;
  const certTime = document.querySelector(".cert-time");

  if (isValidPhoneNumber(mobilePhoneNumber)) {
    mobileFormModal.style.display = "block";
    printTime(certTime);
  }
}

export function printTime(nodeElement) {
  let timeLeft = 120;
  const interval = setInterval(function () {
    nodeElement.innerHTML = `${Math.floor(timeLeft / 60)}분 ${
      timeLeft % 60
    }초 남았습니다`;
    timeLeft -= 1;
    if (timeLeft < 0) {
      clearInterval(interval);
      nodeElement.innerHTML = "입력 시간이 초과되었습니다";
    } else if (mobileFormModal.style.display === "none") {
      clearInterval(interval);
    }
  }, 1000);
}

export function mobileModalcloser(e) {
  mobileFormModal.style.display = "none";
}

export function addressInputChecker(e) {
  const targetNode = e.target;

  if (targetNode.checked) {
    unblockInput(zipcodeInputForm);
    unblockInput(addressInputForm);
    unblockInput(addressInputFormDetail);
    addressSearchBtn.disabled = false;
  } else {
    blockInput(zipcodeInputForm);
    blockInput(addressInputForm);
    blockInput(addressInputFormDetail);
    addressSearchBtn.disabled = true;
  }
}

export function addressModalHandler(e) {
  e.preventDefault();
  if (addressFormCheckbox.checked) {
    addressFormModal.style.display = "block";
  }
}

export function addressModalcloser(e) {
  addressFormModal.style.display = "none";
}

export function agreementFormAllHandler(e) {
  if (agreementFormAll.checked) {
    agreementFormMust.checked = true;
    agreementFormOptional.checked = true;
  } else {
    agreementFormMust.checked = false;
    agreementFormOptional.checked = false;
  }
}

export function agreementFormHandler(e) {
  if (agreementFormMust.checked && agreementFormOptional.checked) {
    agreementFormAll.checked = true;
  } else {
    agreementFormAll.checked = false;
  }
}

export function signUpFailHandler(e) {
  const warningNode = [
    idFormInput,
    passwordFormInput,
    passwordCheckFormInput,
    nameFormInput,
    mobileFormInput,
  ].filter((node) => hasWarningMsg(node));

  if (warningNode.length > 0) {
    e.preventDefault();
    warningNode[0].focus();
  }
}
