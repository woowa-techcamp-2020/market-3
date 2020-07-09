const idFormInput = document.querySelector(".id-form__input");
const passwordFormInput = document.querySelector(".password-form__input")
const passwordCheckFormInput = document.querySelector(".password-check-form__input")

idFormInput.addEventListener("blur", idInputHandler);
passwordFormInput.addEventListener("blur", passwordInputHandler);
passwordCheckFormInput.addEventListener("blur", passwordChecker);
