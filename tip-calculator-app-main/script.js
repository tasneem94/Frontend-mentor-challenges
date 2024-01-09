const bill = document.querySelector("#bill");
const people = document.querySelector("#people");
const custom = document.querySelector(".custom-input");
const tipBtns = document.querySelectorAll(".tip-btn");
const tip = document.querySelector(".tip-dollar");
const total = document.querySelector(".total-dollar");
const resetBtn = document.querySelector(".reset-btn");
const billError = document.querySelector(".bill-error");
const peopleError = document.querySelector(".people-error");
const customBtn = document.querySelector(".custom-button");

bill.addEventListener("input", () => {
  if (+bill.value <= 0) {
    billError.style.visibility = "visible";
  } else {
    billError.style.visibility = "hidden";
  }
});

people.addEventListener("input", () => {
  if (+people.value <= 0) {
    peopleError.style.visibility = "visible";
  } else {
    peopleError.style.visibility = "hidden";
  }
});

custom.addEventListener("input", () => {
  if (+custom.value < 0) {
    custom.style.border = "1px solid red";
  } else {
    custom.style.border = "none";
  }
});

tipBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (+bill.value > 0 && +people.value > 0) {
      const billAmount = +bill.value;
      const peopleNum = +people.value;
      const tipPercentage = parseInt(btn.textContent.substring(0, 2));
      const tipAmount = (
        ((billAmount / peopleNum) * tipPercentage) /
        100
      ).toFixed(2);
      tip.textContent = `${tipAmount}`;
      const totalAmount = (
        parseFloat(total.textContent) + parseFloat(tipAmount)
      ).toFixed(2);
      total.textContent = `${totalAmount}`;

      custom.style.border = "none";
      custom.value = "";
    }

    if (+bill.value <= 0) {
      billError.style.visibility = "visible";
    } else {
      billError.style.visibility = "hidden";
    }
    if (+people.value <= 0) {
      peopleError.style.visibility = "visible";
    } else {
      peopleError.style.visibility = "hidden";
    }
  });
});

customBtn.addEventListener("click", () => {
  if (+bill.value > 0 && +people.value > 0 && +custom.value > 0) {
    const billAmount = +bill.value;
    const peopleNum = +people.value;
    const tipValue = parseFloat(+custom.value / 100);
    const tipAmount = ((billAmount / peopleNum) * tipValue).toFixed(2);
    tip.textContent = `${tipAmount}`;
    const totalAmount = (
      parseFloat(total.textContent) + parseFloat(tipAmount)
    ).toFixed(2);
    total.textContent = `${totalAmount}`;
  }

  if (+custom.value <= 0) {
    custom.style.border = "1px solid red";
  }

  if (+bill.value <= 0) {
    billError.style.visibility = "visible";
  } else {
    billError.style.visibility = "hidden";
  }
  if (+people.value <= 0) {
    peopleError.style.visibility = "visible";
  } else {
    peopleError.style.visibility = "hidden";
  }
});

resetBtn.addEventListener("click", () => {
  bill.value = "";
  people.value = "";
  custom.value = "";
  tip.textContent = "0.00";
  total.textContent = "0.00";
  billError.style.visibility = "hidden";
  peopleError.style.visibility = "hidden";
});
