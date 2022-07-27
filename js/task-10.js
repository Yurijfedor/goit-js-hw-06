const inputEl = document.querySelector("#controls");
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const divContainer = document.querySelector("#boxes");

btnCreateEl.addEventListener("click", createBoxes);
function createBoxes() {
  const elements = [];
  const inputValue = Number(inputEl.firstElementChild.value);
  for (let i = 0; i < inputValue; i += 1) {
    const divEl = document.createElement("div");
    let widthEl = 30;
    let heightEl = 30;
    divEl.style.width = `${widthEl + i * 10}px`;
    divEl.style.height = `${heightEl + i * 10}px`;
    divEl.style.backgroundColor = `${getRandomHexColor()}`;
    elements.push(divEl);
  }
  divContainer.append(...elements);
}

btnDestroyEl.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  const inputValue = Number(inputEl.firstElementChild.value);
  for (let i = 0; i < inputValue; i += 1) {
    divContainer.firstChild.remove();
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
