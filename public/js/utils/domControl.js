function generateNodeElement() {
  return document.createElement("p");
}

function makeWarningNode(nodeElement, inputFormNode, msg) {
  writeMsgInNodeElement(nodeElement, msg);
  addClassInNodeElement(nodeElement, "warning-text");
  addClassInNodeElement(inputFormNode, "warning");
}

function makeSuccessNode(nodeElement, inputFormNode, msg) {
  writeMsgInNodeElement(nodeElement, msg);
  addClassInNodeElement(nodeElement, "success-text");
  removeClassInNodeElement(inputFormNode, "warning");
}

function writeMsgInNodeElement(nodeElement, msg) {
  nodeElement.innerHTML = msg;
  return nodeElement;
}

function removeClassInNodeElement(targetNode, className) {
  targetNode.classList.remove(className);
}

function addClassInNodeElement(targetNode, className) {
  targetNode.classList.add(className);
}

function appendNodeMsg(nodeElement, parentNodeElement) {
  return parentNodeElement.lastElementChild.tagName === "P"
    ? parentNodeElement.replaceChild(nodeElement, parentNodeElement.lastElementChild)
    : parentNodeElement.appendChild(nodeElement);
}
