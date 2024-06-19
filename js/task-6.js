function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.getElementById("input-number");
const createBtn = document.getElementById("create-btn");
const destroyBtn = document.getElementById("destroy-btn");
const boxesContainer = document.getElementById("boxes-container");

createBtn.addEventListener("click", function () {
  const amount = parseInt(inputNumber.value);

  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  createBoxes(amount);
  inputNumber.value = "";
});

destroyBtn.addEventListener("click", function () {
  boxesContainer.innerHTML = "";
});

function createBoxes(amount) {
  boxesContainer.innerHTML = "";

  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();

    boxesContainer.appendChild(box);

    size += 10;
  }
}
