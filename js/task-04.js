let counterValue = 0;

const buttonDecr = document.querySelector('button[data-action="decrement"]');

const valueRefById = document.querySelector('#value');

const buttonIncr = document.querySelector('button[data-action="increment"]');


buttonDecr.addEventListener('click', () => {

  counterValue --;
  valueRefById.textContent = counterValue;
});

 buttonIncr.addEventListener('click', () => {

  counterValue ++;
  valueRefById.textContent = counterValue;
});
