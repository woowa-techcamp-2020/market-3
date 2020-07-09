const idFormInput = document.querySelector(".id-form__input");
const passwordFormInput = document.querySelector(".password-form__input");
const passwordCheckFormInput = document.querySelector(".password-check-form__input");
const emailDomainSelector = document.querySelector(".email-domain-selector__list");
const nameFormInput = document.querySelector(".name-form__input");

idFormInput.addEventListener("blur", idInputHandler);
passwordFormInput.addEventListener("blur", passwordInputHandler);
passwordCheckFormInput.addEventListener("blur", passwordChecker);
emailDomainSelector.addEventListener("change", emailDomainHandler);
nameFormInput.addEventListener("blur", nameInputHandler);