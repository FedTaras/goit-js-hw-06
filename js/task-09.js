function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const bthRef = document.querySelector(".change-color");
const spanColorRef = document.querySelector(".color");

bthRef.addEventListener(`click`, () => {
  spanColorRef.textContent = bodyRef.style.backgroundColor =
    getRandomHexColor();
  // spanColorRef.textContent = getRandomHexColor();
});
