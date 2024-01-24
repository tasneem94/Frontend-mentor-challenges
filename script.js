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
    newElement.textContent = `${inputTask.value}`;
    container.appendChild(newElement);
    itemsRemaining++;
    noOfItemsLeft.textContent = `${itemsRemaining}`;
    showExtraTaskTileContainer();
    completeCheckerFunc(newElement);
    deleteBtnFunc(newElement);
  }
  inputTask.value = "";
});

const completeCheckerFunc = (parentClass) => {
  const newCompleteElement = document.createElement("div");
  newCompleteElement.classList.add("complete-checker");
  parentClass.appendChild(newCompleteElement);
  newCompleteElement.addEventListener("click", () => {
    newCompleteElement.classList.add("checked");
    newCompleteElement.parentNode.classList.add("completed-task");
    itemsRemaining--;
    noOfItemsLeft.textContent = `${itemsRemaining}`;
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
