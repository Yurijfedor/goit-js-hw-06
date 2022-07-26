const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onCheckNumberOfCharacters);

function onCheckNumberOfCharacters(event) {
  if (event.currentTarget.value.length < inputEl.dataset.length) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  } else {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  }
}
