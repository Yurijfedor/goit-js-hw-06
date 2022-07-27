const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const formData = {
    email: formElements.email.value,
    password: formElements.password.value,
    checkField() {
      !this.email || !this.password
        ? alert("All fields must be filled!")
        : console.log(formData);
    },
  };
  formData.checkField();
  this.reset();
}
