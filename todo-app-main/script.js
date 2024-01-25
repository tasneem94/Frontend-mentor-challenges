const container = document.querySelector(".container");
const inputTask = document.querySelector("#input-task");
const addTodoCheckbox = document.querySelector("#add-task");
const form = document.querySelector("form");
const extraTaskTileContainer = document.querySelector(
  ".extra-task-tile-container"
);
const extraTaskTile = document.querySelector(".extra-task-tile");
const noOfItemsLeft = document.querySelector(".no-of-items-left");
const clearCompleted = document.querySelector(".clear-completed");
const all = document.querySelector(".all");
const active = document.querySelector(".active");
const completed = document.querySelector(".completed");
const dayNightBtn = document.querySelector(".day-night");
const bgImage = document.querySelector(".bg-img");
const body = document.querySelector("body");
const allActiveCompletedTile = document.querySelector(".all-active-completed");
let day = true;
let bgColors = document.querySelectorAll(".bg-col");

let itemsRemaining = 0;
extraTaskTileContainer.style.visibility = "hidden";
const showExtraTaskTileContainer = () => {
  extraTaskTileContainer.style.visibility = "visible";
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputTask.value !== "") {
    console.log(inputTask.value);
    const newElement = document.createElement("div");
    newElement.classList.add("task-tile");

    newElement.classList.add("bg-col");
    newElement.textContent = `${inputTask.value}`;

    container.appendChild(newElement);
    itemsRemaining++;
    noOfItemsLeft.textContent = `${itemsRemaining}`;
    showExtraTaskTileContainer();
    completeCheckerFunc(newElement);
    deleteBtnFunc(newElement);
  }
  bgColors = document.querySelectorAll(".bg-col");
  if (day) {
    bgColors.forEach((bgColor) => {
      bgColor.style.backgroundColor = "#fff";
      bgColor.style.color = "#000";
    });
  } else {
    bgColors.forEach((bgColor) => {
      bgColor.style.backgroundColor = "hsl(235, 24%, 19%)";
      bgColor.style.color = "hsl(0, 0%, 98%)";
    });
  }
  inputTask.value = "";
});

const completeCheckerFunc = (parentClass) => {
  let firstClick = false;
  const newCompleteElement = document.createElement("div");
  newCompleteElement.classList.add("complete-checker");
  parentClass.appendChild(newCompleteElement);
  newCompleteElement.addEventListener("click", () => {
    newCompleteElement.classList.add("checked");
    newCompleteElement.parentNode.classList.add("completed-task");
    if (firstClick === false) {
      itemsRemaining--;
      noOfItemsLeft.textContent = `${itemsRemaining}`;
      firstClick = true;
    }
  });
};

const deleteBtnFunc = (parentClass) => {
  const newDelElement = document.createElement("div");
  newDelElement.classList.add("delete-btn");
  parentClass.appendChild(newDelElement);

  newDelElement.addEventListener("click", () => {
    const checked = newDelElement.parentNode.querySelector(".checked");
    console.log(checked);
    if (checked === null) {
      itemsRemaining--;
      noOfItemsLeft.textContent = `${itemsRemaining}`;
    }
    newDelElement.parentNode.remove();
  });
};

clearCompleted.addEventListener("click", () => {
  const taskTiles = document.querySelectorAll(".task-tile");
  taskTiles.forEach((taskTile) => {
    const checked = taskTile.querySelector(".checked");
    if (checked !== null) {
      taskTile.remove();
    }
  });
});

all.addEventListener("click", () => {
  const taskTiles = document.querySelectorAll(".task-tile");
  taskTiles.forEach((taskTile) => {
    taskTile.style.display = "flex";
  });
  all.style.color = "#0096FF";
  active.style.color = "hsl(236, 9%, 61%)";
  completed.style.color = "hsl(236, 9%, 61%)";
});

active.addEventListener("click", () => {
  const taskTiles = document.querySelectorAll(".task-tile");
  taskTiles.forEach((taskTile) => {
    const checked = taskTile.querySelector(".checked");
    if (checked === null) {
      taskTile.style.display = "flex";
    } else {
      taskTile.style.display = "none";
    }
  });
  all.style.color = "hsl(236, 9%, 61%)";
  active.style.color = "#0096FF";
  completed.style.color = "hsl(236, 9%, 61%)";
});

completed.addEventListener("click", () => {
  const taskTiles = document.querySelectorAll(".task-tile");
  taskTiles.forEach((taskTile) => {
    const checked = taskTile.querySelector(".checked");
    if (checked !== null) {
      taskTile.style.display = "flex";
    } else {
      taskTile.style.display = "none";
    }
  });
  all.style.color = "hsl(236, 9%, 61%)";
  active.style.color = "hsl(236, 9%, 61%)";
  completed.style.color = "#0096FF";
});

dayNightBtn.addEventListener("click", () => {
  bgColors = document.querySelectorAll(".bg-col");

  if (day) {
    day = false;
    bgImage.style.backgroundImage = "url('images/bg-desktop-dark.jpg')";

    dayNightBtn.style.backgroundImage = "url('images/icon-sun.svg')";
    body.style.backgroundColor = "hsl(235, 21%, 11%)";
    bgColors.forEach((bgColor) => {
      bgColor.style.backgroundColor = "hsl(235, 24%, 19%)";
      bgColor.style.color = "hsl(0, 0%, 98%)";
    });
  } else {
    day = true;
    bgImage.style.backgroundImage = "url('images/bg-desktop-light.jpg')";
    dayNightBtn.style.backgroundImage = "url('images/icon-moon.svg')";
    body.style.backgroundColor = "hsl(0, 0%, 98%)";
    bgColors.forEach((bgColor) => {
      bgColor.style.backgroundColor = "#fff";
      bgColor.style.color = "#000";
    });
  }
});
