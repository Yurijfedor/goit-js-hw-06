const inputEl = document.querySelector("#controls");
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const divContainer = document.querySelector("#boxes");
let amounts;

inputEl.firstElementChild.addEventListener("blur", getInputValue);

function getInputValue() {
  amounts = Number(inputEl.firstElementChild.value);
}

btnCreateEl.addEventListener("click", () => createBoxes(amounts));

function createBoxes(amount) {
  const elements = [];
  let widthEl = 30;
  let heightEl = 30;
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = `${widthEl + i * 10}px`;
    divEl.style.height = `${heightEl + i * 10}px`;
    divEl.style.backgroundColor = `${getRandomHexColor()}`;
    elements.push(divEl);
  }
  divContainer.append(...elements);
}

btnDestroyEl.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  for (let i = 0; i < amounts; i += 1) {
    if (divContainer.firstChild) {
      divContainer.firstChild.remove();
    }
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
