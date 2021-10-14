const listWithId = document.querySelector('#categories');

const listItemsLength = listWithId.children.length;

const listItemsSum = `Number of categories: ${listItemsLength}`

console.log(listItemsSum);


const listRef = listWithId.querySelectorAll('.item');

const title = listRef.forEach(element => {

        const titleFirstEl = element.firstElementChild;
        const titleText = titleFirstEl.textContent;

    const titleLastEl = element.lastElementChild;
    const titleLastElLeng = titleLastEl.children.length;

    console.log(`Category: ${titleText}`);
    console.log(`Elements: ${titleLastElLeng}`);
});
  