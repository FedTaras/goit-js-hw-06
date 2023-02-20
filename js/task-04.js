const decrementBtnRef = document.querySelector(
  `button[data-action="decrement"]`
);
const incrementBtnRef = document.querySelector(
  `button[data-action="increment"]`
);
const spanCounterRef = document.querySelector(`#value`);

const counterValue = {
  textScreen: 0,
  increment() {
    this.textScreen += 1;
  },
  decrement() {
    this.textScreen -= 1;
  },
};

decrementBtnRef.addEventListener(`click`, () => {
  counterValue.decrement();
  spanCounterRef.textContent = counterValue.textScreen;
});

incrementBtnRef.addEventListener(`click`, () => {
  counterValue.increment();
  spanCounterRef.textContent = counterValue.textScreen;
});
