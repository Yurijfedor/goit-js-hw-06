let counterValue = 0;

const counterValueEl = document.querySelector("#value");
const incrementEl = document.querySelector('button[data-action="increment"]');
const decrementEl = document.querySelector('button[data-action="decrement"]');

incrementEl.addEventListener("click", () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
});

decrementEl.addEventListener("click", () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
});
