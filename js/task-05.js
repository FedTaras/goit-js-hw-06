const inputRef = document.querySelector(`#name-input`);
const spanRef = document.querySelector(`#name-output`);
const spanText = spanRef.textContent;

inputRef.addEventListener(`input`, (ev) => {
  if (ev.currentTarget.value !== ``) {
    spanRef.textContent = ev.currentTarget.value;
  } else {
    spanRef.textContent = spanText;
  }
});
