const listWithId = document.querySelector('#categories');

const listItemsLength = listWithId.children.length;

const listItemsSum = `Number of categories: ${listItemsLength}`

console.log(listItemsSum);


const listRef = listWithId.querySelectorAll('.item');

const title = listRef.forEach(element => {

        const titleEl = element.firstElementChild;
        const titleText = titleEl.textContent;

    const titleUl = titleEl.nextElementSibling;
    const titleLi = titleUl.children.length;

    console.log(`Category: ${titleText}`);
    console.log(`Elements: ${titleLi}`);
});
  