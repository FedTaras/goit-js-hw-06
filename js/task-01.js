const categoriesItemEl = document.querySelectorAll(`li.item`);
console.log(`Number of categories: ${categoriesItemEl.length}`);

categoriesItemEl.forEach((liItem) => {
  console.log(`Category:`, liItem.firstElementChild.textContent);
  const itemsListRef = liItem.querySelector(`ul`);
  console.log(`Elements:`, itemsListRef.children.length);
});
