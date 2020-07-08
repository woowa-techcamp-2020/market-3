const cookie = document.cookie;
const [ _ , id ] = cookie.split('=')

function hideGreeting() {
  const greeting = document.querySelector(".greeting");
  greeting.classList.add("hide");
}

function init() {
  if (id) hideGreeting();
}

init();
