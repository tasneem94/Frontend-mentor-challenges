// function updateDisplay(value) {
//   document.querySelector(".display-container").value = value;
// }
const display = document.querySelector(".calculation-container");
const roundBtns = document.querySelectorAll(".round-btn");
const resetBtn = document.querySelector(".reset-btn");
const equalBtn = document.querySelector(".equal-btn");
const themeBtns = document.querySelector(".theme-btns");
const themeBtnOne = document.querySelector(".theme-btn-1");
const themeBtnTwo = document.querySelector(".theme-btn-2");
const themeBtnThree = document.querySelector(".theme-btn-3");
const labels = document.querySelectorAll(".label");
const body = document.body;
const container = document.querySelector(".container");
const displayContainer = document.querySelector(".display-container");
const calculationContainer = document.querySelector(".calculation-container");
const buttonContainer = document.querySelector(".button-container");
const delBtn = document.querySelector(".del-btn");
// const toggleBar = document.querySelector(".toggle-bar");
const texts = document.querySelectorAll(".txt");

roundBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.value === "DEL") {
      display.value = display.value.slice(0, -1);
    } else {
      display.value += btn.value;
    }
  });
});

resetBtn.addEventListener("click", () => {
  display.value = "";
});

equalBtn.addEventListener("click", () => {
  display.value = eval(display.value);
});

themeBtnOne.addEventListener("click", () => {
  body.style.backgroundColor = "hsl(222, 26%, 31%)";
  container.style.backgroundColor = "hsl(222, 26%, 31%)";
  calculationContainer.style.backgroundColor = "hsl(224, 36%, 15%)";
  buttonContainer.style.backgroundColor = "hsl(223, 31%, 20%)";
  resetBtn.style.backgroundColor = "hsl(225, 21%, 49%)";
  equalBtn.style.backgroundColor = "hsl(6, 63%, 50%)";
  roundBtns.forEach((btn) => {
    btn.style.backgroundColor = "hsl(30, 25%, 89%)";
    btn.style.color = "#000";
    btn.style.boxShadow = "0 3px 2px hsl(28, 16%, 65%)";
  });
  delBtn.style.backgroundColor = "hsl(225, 21%, 49%)";
  delBtn.style.color = "#fff";
  delBtn.style.boxShadow = "0 3px 2px hsl(224, 28%, 35%)";
  resetBtn.style.color = "#fff";
  resetBtn.style.boxShadow = "0 3px 2px hsl(224, 28%, 35%)";
  equalBtn.style.color = "#fff";
  equalBtn.style.boxShadow = "0 3px 2px hsl(6, 70%, 34%)";
  //   toggleBar.style.backgroundColor = "hsl(224, 36%, 15%)";
  texts.forEach((txt) => {
    txt.style.color = "#fff";
  });
  themeBtns.style.backgroundColor = "hsl(223, 31%, 20%)";
  themeBtnOne.style.backgroundColor = "hsl(6, 63%, 50%)";
  themeBtnTwo.style.backgroundColor = "hsl(223, 31%, 20%)";
  themeBtnThree.style.backgroundColor = "hsl(223, 31%, 20%)";
});

themeBtnTwo.addEventListener("click", () => {
  body.style.backgroundColor = "hsl(0, 0%, 90%)";
  container.style.backgroundColor = "hsl(0, 0%, 90%)";
  calculationContainer.style.backgroundColor = "hsl(0, 0%, 93%)";
  buttonContainer.style.backgroundColor = "hsl(0, 5%, 81%)";
  resetBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
  equalBtn.style.backgroundColor = "hsl(25, 98%, 40%)";
  roundBtns.forEach((btn) => {
    btn.style.backgroundColor = "hsl(45, 7%, 89%)";
    btn.style.color = "#000";
    btn.style.boxShadow = "0 3px 2px hsl(35, 11%, 61%)";
  });
  delBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
  delBtn.style.color = "#fff";
  delBtn.style.boxShadow = "0 3px 2px hsl(185, 58%, 25%)";
  resetBtn.style.color = "#fff";
  resetBtn.style.boxShadow = "0 3px 2px hsl(185, 58%, 25%)";
  equalBtn.style.color = "#fff";
  equalBtn.style.boxShadow = "0 3px 2px hsl(25, 99%, 27%)";
  //   toggleBar.style.backgroundColor = "hsl(0, 5%, 81%)";
  texts.forEach((txt) => {
    txt.style.color = "#000";
  });
  themeBtns.style.backgroundColor = "hsl(0, 5%, 81%)";
  themeBtnOne.style.backgroundColor = "hsl(0, 5%, 81%)";
  themeBtnTwo.style.backgroundColor = "hsl(25, 98%, 40%)";
  themeBtnThree.style.backgroundColor = "hsl(0, 5%, 81%)";
});

themeBtnThree.addEventListener("click", () => {
  body.style.backgroundColor = "hsl(268, 75%, 9%)";
  container.style.backgroundColor = "hsl(268, 75%, 9%)";
  calculationContainer.style.backgroundColor = "hsl(268, 71%, 12%)";
  buttonContainer.style.backgroundColor = "hsl(268, 71%, 12%)";
  resetBtn.style.backgroundColor = "hsl(281, 89%, 26%)";
  equalBtn.style.backgroundColor = "hsl(176, 100%, 44%)";
  roundBtns.forEach((btn) => {
    btn.style.backgroundColor = "hsl(268, 47%, 21%)";
    btn.style.color = "hsl(52, 100%, 62%)";
    btn.style.boxShadow = "0 3px 2px hsl(290, 70%, 36%)";
  });
  delBtn.style.backgroundColor = "hsl(281, 89%, 26%)";
  delBtn.style.color = "#fff";
  delBtn.style.boxShadow = "0 3px 2px hsl(285, 91%, 52%)";
  resetBtn.style.color = "#fff";
  resetBtn.style.boxShadow = "0 3px 2px hsl(285, 91%, 52%)";
  equalBtn.style.color = "#000";
  equalBtn.style.boxShadow = "0 3px 2px hsl(177, 92%, 70%)";
  //   toggleBar.style.backgroundColor = "hsl(268, 71%, 12%)";
  texts.forEach((txt) => {
    txt.style.color = "hsl(52, 100%, 62%)";
  });
  themeBtns.style.backgroundColor = "hsl(268, 71%, 12%)";
  themeBtnOne.style.backgroundColor = "hsl(268, 71%, 12%)";
  themeBtnTwo.style.backgroundColor = "hsl(268, 71%, 12%)";
  themeBtnThree.style.backgroundColor = "hsl(176, 100%, 44%)";
});
