const addButton = document.querySelector(".add"),
  removeButton = document.querySelector(".remove");

const currentCups = document.querySelector(".current-cups"),
  currentLiters = document.querySelector(".current-liters"),
  currentPercentage = document.querySelector(".current-percentage"),
  currentProgress = document.querySelector(".progress");

const max_cups = 10,
  min_cups = 0;

let cups = 0,
  liters = 0,
  percentage = 0;

addButton.addEventListener("click", addCup);
removeButton.addEventListener("click", removeCup);

function addCup() {
  cups++;
  liters += 250;
  percentage = (cups / max_cups) * 100;

  updateData();

  if (cups === max_cups) {
    addButton.disabled = true;
  } else {
    removeButton.disabled = false;
  }
}

function removeCup() {
  cups--;
  liters -= 250;
  percentage = (cups / max_cups) * 100;

  updateData();

  if (cups === min_cups) {
    removeButton.disabled = true;
  } else {
    addButton.disabled = false;
  }
}

function updateData() {
  currentCups.textContent = `${cups}/10`;
  currentLiters.textContent = `${liters / 1000}l/2.5l`;
  currentPercentage.textContent = `${percentage}%`;
  currentProgress.style.height = `${percentage}%`;
}