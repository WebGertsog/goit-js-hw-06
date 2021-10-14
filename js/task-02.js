const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');

const newItems = ingredients.map(element => {

  const createElem = document.createElement('li');

  createElem.textContent = element;

  createElem.classList.add('item');

  return createElem;

});

listRef.append(...newItems);
