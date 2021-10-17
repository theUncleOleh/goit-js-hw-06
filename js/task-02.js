const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("ul");
console.log(ingredientsList);
const newElement = ingredients.map((ingredient) => {
const ingredientEl = document.createElement("li");
ingredientEl.classList.add("item");
// console.log(ingredientEl);
ingredientEl.textContent = ingredient;
return ingredientEl;
});
// console.log(newElement);
ingredientsList.append(...newElement);



