const inputRef = document.querySelector(`#font-size-control`);
const spanRef = document.querySelector(`#text`);

inputRef.addEventListener(`input`, fontSizeChange);

function fontSizeChange(event) {
  spanRef.style.fontSize = `${event.currentTarget.value}px`;
  console.log(event.currentTarget.value);
}
