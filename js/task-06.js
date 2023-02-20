const inputRef = document.querySelector(`#validation-input`);
const count = inputRef.getAttribute(`data-length`);
console.dir(inputRef);

inputRef.addEventListener(`input`, blurCount);

function blurCount(blur) {
  console.log(blur.currentTarget.value.length);
}
/// ще не завершив
