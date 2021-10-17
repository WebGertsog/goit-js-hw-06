function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsRef = document.querySelector('[type="number"]');
const createEl = document.querySelector('button[data-create]');
const destroyEl = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector("#boxes");
let sizeBox = 30;

function createBoxes(amount) {
  const arrEl =[];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${sizeBox}px`;
    box.style.height = `${sizeBox}px`;
    box.style.borderStyle = 'outset';
    box.style.marginLeft = 'auto';
    box.style.marginRight = 'auto';
    box.style.background = getRandomHexColor();
    arrEl.push(box);
    sizeBox += 10;
  }
  boxesRef.append(...arrEl);
};

createEl.addEventListener("click", (event) => {
    createBoxes(controlsRef.value);
  });

destroyEl.addEventListener("click", () => {
      sizeBox = 30;
      boxesRef.innerHTML = "";
    });
