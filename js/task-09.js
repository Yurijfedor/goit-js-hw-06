const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
const bodyEl = document.body;

btnEl.addEventListener("click", onChangeColorOfBody);

function onChangeColorOfBody(event) {
  const numberOfColor = getRandomHexColor();
  spanEl.textContent = `${numberOfColor}`;
  bodyEl.style.backgroundColor = `${numberOfColor}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
