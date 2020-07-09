const idFormInput = document.querySelector(".id-form__input");
const passwordFormInput = document.querySelector(".password-form__input");
const passwordCheckFormInput = document.querySelector(".password-check-form__input");
const emailDomainSelector = document.querySelector(".email-domain-selector__list");
const nameFormInput = document.querySelector(".name-form__input");
const mobileFormInput = document.querySelector(".mobile-form__input");
const mobileFormmodal = document.querySelector('.mobile-form__modal');
const mobileFormValidBtn = document.querySelector(".mobile-form__valid-btn");
const mobileFormCloseBtn = document.querySelector(".close");          

idFormInput.addEventListener("blur", idInputHandler);
passwordFormInput.addEventListener("blur", passwordInputHandler);
passwordCheckFormInput.addEventListener("blur", passwordChecker);
emailDomainSelector.addEventListener("change", emailDomainHandler);
nameFormInput.addEventListener("blur", nameInputHandler);
mobileFormInput.addEventListener("blur", mobileInputHandler);
mobileFormValidBtn.addEventListener("click", modalHandler);
mobileFormCloseBtn.addEventListener("click", closeHandler);
