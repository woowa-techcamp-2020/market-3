import {
    idInputHandler,
    passwordInputHandler,
    passwordChecker,
    emailDomainHandler,
    nameInputHandler,
    mobileInputHandler,
    mobileModalHandler,
    mobileModalcloser,
    addressInputChecker,
    addressModalHandler,
    addressModalcloser,
    agreementFormAllHandler,
    agreementFormHandler,
    signUpFailHandler
} from '/js/utils/inputHandlers.js'


const idFormInput = document.querySelector(".id-form__input");
const passwordFormInput = document.querySelector(".password-form__input");
const passwordCheckFormInput = document.querySelector(".password-check-form__input");
const emailDomainSelector = document.querySelector(".email-domain-selector__list");
const nameFormInput = document.querySelector(".name-form__input");
const mobileFormInput = document.querySelector(".mobile-form__input");
const mobileFormCloseBtn = document.querySelector(".mobile-form_modal-close");
const mobileFormValidBtn = document.querySelector(".mobile-form__valid-btn");
const mobileFormModal = document.querySelector('.mobile-form__modal');
const addressFormCheckbox = document.querySelector(".option-check__checkbox");    
const zipcodeInputForm = document.querySelector(".zipcode-form__input");    
const addressInputForm = document.querySelector(".address-form__address-input");    
const addressInputFormDetail = document.querySelector(".address-form__detail-address-input");    
const addressSearchBtn = document.querySelector(".zipcode-form__valid-btn");    
const addressFormModal = document.querySelector('.address-form__modal');
const agreementFormAll = document.querySelector('.agreement-form-all__checkbox');
const agreementFormMust = document.querySelector('.agreement-form-must-checkbox');
const agreementFormOptional = document.querySelector('.address-form-optional-checkbox');
const completeBtn = document.querySelector('.complete-btn');

idFormInput.addEventListener("blur", idInputHandler);

passwordFormInput.addEventListener("blur", passwordInputHandler);
passwordCheckFormInput.addEventListener("blur", passwordChecker);

emailDomainSelector.addEventListener("change", emailDomainHandler);

nameFormInput.addEventListener("blur", nameInputHandler);

mobileFormInput.addEventListener("blur", mobileInputHandler);
mobileFormValidBtn.addEventListener("click", mobileModalHandler);
mobileFormCloseBtn.addEventListener("click", mobileModalcloser);

addressFormCheckbox.addEventListener("change", addressInputChecker);

zipcodeInputForm.addEventListener("click", addressModalHandler);

addressInputForm.addEventListener("click", addressModalHandler);
addressInputFormDetail.addEventListener("click", addressModalHandler);
addressSearchBtn.addEventListener("click", addressModalHandler);
addressFormModal.addEventListener("click", addressModalcloser);

agreementFormAll.addEventListener("change", agreementFormAllHandler);
agreementFormMust.addEventListener("change", agreementFormHandler);
agreementFormOptional.addEventListener("change", agreementFormHandler);

completeBtn.addEventListener("click", signUpFailHandler);

