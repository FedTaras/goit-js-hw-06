const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const ulRef = document.querySelector(`#ingredients`);

// ingredients.forEach((ingredient) => {
//   const liRef = document.createElement(`li`);
//   liRef.textContent = ingredient;
//   liRef.classList = "item";
//   ulRef.appendChild(liRef);
// });

// console.log(ulRef);

const listRef = ingredients.map((vegitable) => {
  const liRef = document.createElement(`li`);
  liRef.textContent = vegitable;
  liRef.classList = "item";
  return liRef;
});

const ulRef = document.querySelector(`#ingredients`);
ulRef.append(...listRef);
console.log(ulRef);
