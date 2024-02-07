const labelsObject = [
  {href: "../index.html", text: "home", classList: ["boxes-menu-bot", "box-home"]},
  {href: "./explore.html", text: "explore", classList: ["boxes-menu-bot", "box-explore"]},
  {href: "./post.html", text: "POST", classList: ["boxes-menu-bot", "box-publicar"]},
  {href: "./mesages.html", text: "notifications", classList: ["boxes-menu-bot", "box-post"]},
  {href: "./me.html", text: "me", classList: ["boxes-menu-bot", "box-me"]},
]

const navContainer = document.getElementById("menu-bot");
addElementToNav = function (userElement) {
  const {href, text, classList} = userElement;
  // Create A label
  const createReferenceElement = document.createElement('a');
  createReferenceElement.setAttribute("href", href);
  createReferenceElement.classList.add(...classList);
  // Create i label - Icon
  const createIconElement = document.createElement('i');
  createIconElement.classList.add("fa-solid", "fa-home");
  // Create span 
  const createSpanElement = document.createElement('span');
  createSpanElement.innerText = text;
  // Join elements
  createReferenceElement.appendChild(createIconElement);
  createReferenceElement.appendChild(createSpanElement);
  navContainer.appendChild(createReferenceElement);
}

/*---------- RUN PROGRAM ----------*/
for (const element of labelsObject) {
  addElementToNav(element)
}