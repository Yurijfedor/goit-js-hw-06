const inputEl = document.querySelector("#controls");
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const divContainer = document.querySelector("#boxes");

let inputValue;

inputEl.firstElementChild.addEventListener("blur", getInputValue);

function getInputValue() {
  inputValue = Number(inputEl.firstElementChild.value);
}

btnCreateEl.addEventListener("click", () => createBoxes(inputValue));

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

// ------------------------------------------ЯК ВАРІАНТ, ЯКЩО ПОТРІБНО ВИКОРИСТАТИ АТРИБУТ "MAX"--------------------------------------------------------------
// function destroyBoxes() {
//   let num = Number(inputEl.firstElementChild.getAttribute("max"));
//   for (let i = 0; i <= num; i += 1)
//     if (divContainer.firstChild) {
//       divContainer.firstChild.remove();
//     }
// }
// ----------------------------------------------------АБО ТАК---------------------------------------------------------------------------------------------------
function destroyBoxes() {
  let num = divContainer.childElementCount;
  for (let i = 0; i <= num; i += 1)
    if (divContainer.firstChild) {
      divContainer.firstChild.remove();
    }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
