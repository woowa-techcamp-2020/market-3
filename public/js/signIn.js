import { idInputHandler } from '/js/utils/inputHandlers.js'

function handleSignUpLinkClick(e) {
    window.location.href = '/signup';
}

const signUpLink = document.querySelector('.others__signup-link');
signUpLink.addEventListener('click', handleSignUpLinkClick);

const idFormInput = document.querySelector(".id-form__input");
idFormInput.addEventListener("blur", idInputHandler);
