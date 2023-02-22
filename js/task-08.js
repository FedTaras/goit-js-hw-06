const formRef = document.querySelector(".login-form");

const alert = document.createElement("h1");
alert.textContent = "Всі поля повинні бути заповненні!";
alert.style.color = "rgb(255, 0, 0)";
alert.style.fontSize = "19px";
alert.style.textAlign = "center";

formRef.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    formRef.prepend(alert);
  }

  const emailUser = event.currentTarget.elements.email.value;
  const passwordlUser = event.currentTarget.elements.password.value;
  const objectData = { emailUser, passwordlUser };
  console.log(objectData);

  event.currentTarget.reset();
}
