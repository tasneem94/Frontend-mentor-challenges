const btn = document.querySelector(".mark-btn");
const cards = document.querySelectorAll(".card");
const redCircles = document.querySelectorAll(".red-circle");
const notiNum = document.querySelector(".notification-number");
let num = 0;

cards.forEach((card, index) => {
  if (index > 4) {
    card.style.backgroundColor = "#fff";
  }
  if (card.style.backgroundColor !== "rgb(255, 255, 255)") {
    // "#fff" does not work. using rgb is best practice
    num++;
  }
});

notiNum.textContent = `${num}`;

btn.addEventListener("click", () => {
  cards.forEach((card) => {
    card.style.backgroundColor = "#fff";
  });
  redCircles.forEach((redCircle) => {
    redCircle.style.visibility = "hidden";
  });
  //   num = 0;
  //   notiNum.textContent = `${num}`;
  notiNum.style.visibility = "hidden";
});

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.style.backgroundColor = "#fff";
    const redCircle = card.querySelector(".red-circle");
    redCircle.style.visibility = "hidden";
    num--;
    notiNum.textContent = `${num}`;
    if (num === 0) {
      notiNum.style.visibility = "hidden";
    }
  });
});
