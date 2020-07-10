import { getCookie, setCookie, checkCookie } from '/js/utils/cookie.js'

function hideGreeting() {
  const greeting = document.querySelector(".greeting");
  greeting.classList.add("hide");
}

function hideLogInButton() {
  const logInButton = document.querySelector(".login-btn");
  logInButton.classList.add("hide");
}

function hideLinks() {
  const links = document.querySelector(".links");
  links.classList.add("hide");
}

function paintLogOutButton() {
  const logOutButton = document.querySelector('.logout-btn');
  logOutButton.classList.remove("hide");
}

function handleLoginButtonClick(e) {
  window.location.href = '/signin';
}

function handleLogOutButtonClick(e) {
  window.location.href = '/auth/logout'
}

function handleSignUpLinkClick(e) {
  window.location.href = '/signup';
}

const logInButton = document.querySelector(".login-btn");
const logOutButton = document.querySelector(".logout-btn");
const signUpLink = document.querySelector(".links__signup");

logInButton.addEventListener('click', handleLoginButtonClick);
logOutButton.addEventListener('click', handleLogOutButtonClick);
signUpLink.addEventListener('click', handleSignUpLinkClick);

function init() {
  const isLogin = checkCookie('id');
  
  if (isLogin) {
    hideGreeting();
    hideLogInButton();
    hideLinks();
    paintLogOutButton();
  }
}

init();
