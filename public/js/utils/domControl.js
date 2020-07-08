function generateWarningDOM(WarningMsg) {
  const newDOM = document.createElement("p");
  newDOM.classList.add("warning__text");
  newDOM.innerHTML = WarningMsg;
  return newDOM;
}

function updateWarningDOM(next, parent) {
  return parent.lastElementChild.className === "warning__text"
    ? parent.replaceChild(next, parent.lastElementChild)
    : parent.appendChild(next);
}
