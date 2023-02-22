const inputRef = document.querySelector(`#validation-input`);
const count = inputRef.getAttribute(`data-length`);

inputRef.addEventListener("blur", () => {
  if (inputRef.value.length === Number(count)) {
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
});
