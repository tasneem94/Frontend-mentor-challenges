const smallPics = document.querySelectorAll(".small-pic");
const largePic = document.querySelector(".large-pic");
const largerPic = document.querySelector(".larger-pic");
const no = document.querySelector(".no");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const btn = document.querySelector(".btn");
const cartItemIndicator = document.querySelector(".cart-item-indicator");
const cart = document.querySelector(".cart");
const cartCard = document.querySelector(".cart-card");
const cartCardEmpty = document.querySelector(".cart-card-empty");
const itemNum = document.querySelector(".item-num");
const total = document.querySelector(".total");
const checkoutBtn = document.querySelector(".checkout-btn");
const delBtn = document.querySelector(".cb-del-btn");
const closeBtn = document.querySelector(".close-btn");
const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");
const previousBtnMini = document.querySelector(".previous-btn-mini");
const nextBtnMini = document.querySelector(".next-btn-mini");
const container = document.querySelector(".container");
const relativePicContainer = document.querySelector(".relative-pic-container");
const navBar = document.querySelector(".navbar");
const navContainer = document.querySelector(".nav-container");
const bright = document.querySelectorAll(".bright");
const menuToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const menuClose = document.querySelector(".menu-close");

const body = document.body;

let currIndex = 0;
smallPics.forEach((smallPic, index) => {
  smallPic.addEventListener("click", () => {
    smallPics.forEach((pic) => pic.classList.remove("small-pic-selected"));
    smallPic.classList.add("small-pic-selected");
    if (index <= 3) smallPics[index + 4].classList.add("small-pic-selected");
    if (index > 3) smallPics[index - 4].classList.add("small-pic-selected");
    largePic.style.backgroundImage = `url("images/image-product-${
      (index % 4) + 1
    }.jpg")`;
    largerPic.style.backgroundImage = `url("images/image-product-${
      (index % 4) + 1
    }.jpg")`;
    currIndex = index % 4;
  });
});

// largePic.addEventListener("click", ()=>{

// })

let noOfItems = 0;

plus.addEventListener("click", () => {
  no.textContent = `${++noOfItems}`;
});

minus.addEventListener("click", () => {
  if (noOfItems > 0) {
    no.textContent = `${--noOfItems}`;
  }
});

btn.addEventListener("click", () => {
  if (noOfItems > 0) {
    cartItemIndicator.textContent = `${noOfItems}`;
    cartItemIndicator.style.display = "block";
    cartItemIndicator.style.display = "flex";
    cartItemIndicator.style.justifyContent = "center";
    cartItemIndicator.style.alignItems = "center";
  } else {
    cartItemIndicator.style.display = "none";
  }
});

let isCardCartVisible = false;
let isCardCartEmptyVisible = false;
cartItemIndicator.style.display = "none";

cart.addEventListener("click", () => {
  if (cartItemIndicator.style.display !== "none") {
    const unitItems = parseInt(cartItemIndicator.textContent);
    itemNum.textContent = `${unitItems}`;

    const totalPrice = 125 * unitItems;
    total.textContent = `\$${totalPrice}.00`;

    cartCard.style.display = isCardCartVisible ? "none" : "block";
    isCardCartVisible = !isCardCartVisible;
  } else {
    cartCardEmpty.style.display = isCardCartEmptyVisible ? "none" : "block";
    isCardCartEmptyVisible = !isCardCartEmptyVisible;
  }
});

document.addEventListener("click", (event) => {
  if (isCardCartVisible && !cart.contains(event.target)) {
    isCardCartVisible = false;
    cartCard.style.display = "none";
  } else if (isCardCartEmptyVisible && !cart.contains(event.target)) {
    isCardCartEmptyVisible = false;
    cartCardEmpty.style.display = "none";
  }
});

delBtn.addEventListener("click", () => {
  cartItemIndicator.style.display = "none";
  isCardCartEmptyVisible = true;
  cartCard.style.display = "none";
  cartCardEmpty.style.display = "none";
  noOfItems = 0;
  no.textContent = "0";
});

largePic.addEventListener("click", () => {
  if (window.innerWidth > 768) {
    navBar.classList.add("darken");
    container.classList.add("darken");
    //   body.classList.add("darken");
    relativePicContainer.style.display = "block";
    bright.forEach((e) => {
      e.classList.add("bright");
    });
  }
});

closeBtn.addEventListener("click", () => {
  relativePicContainer.style.display = "none";
  navBar.classList.remove("darken");
  container.classList.remove("darken");
});

closeBtn.addEventListener("click", () => {
  relativePicContainer.style.display = "none";
  navBar.classList.remove("darken");
  container.classList.remove("darken");
});

nextBtn.addEventListener("click", () => {
  const nextIndex = (currIndex + 1) % 4;
  currIndex = nextIndex;
  smallPics.forEach((pic) => pic.classList.remove("small-pic-selected"));
  smallPics[nextIndex].classList.add("small-pic-selected");
  if (nextIndex <= 3)
    smallPics[nextIndex + 4].classList.add("small-pic-selected");
  if (nextIndex > 3)
    smallPics[nextIndex - 4].classList.add("small-pic-selected");
  largePic.style.backgroundImage = `url("images/image-product-${
    nextIndex + 1
  }.jpg")`;
  largerPic.style.backgroundImage = `url("images/image-product-${
    nextIndex + 1
  }.jpg")`;
});

previousBtn.addEventListener("click", () => {
  const previousIndex = (currIndex - 1 + 4) % 4;
  currIndex = previousIndex;
  smallPics.forEach((pic) => pic.classList.remove("small-pic-selected"));
  smallPics[previousIndex].classList.add("small-pic-selected");
  if (previousIndex <= 3)
    smallPics[previousIndex + 4].classList.add("small-pic-selected");
  if (previousIndex > 3)
    smallPics[previousIndex - 4].classList.add("small-pic-selected");
  largePic.style.backgroundImage = `url("images/image-product-${
    previousIndex + 1
  }.jpg")`;
  largerPic.style.backgroundImage = `url("images/image-product-${
    previousIndex + 1
  }.jpg")`;
});

menuToggle.addEventListener("click", () => {
  navMenu.classList.add("menu-active");
  menuClose.style.display = "block";
});

menuClose.addEventListener("click", () => {
  navMenu.classList.remove("menu-active");
  menuClose.style.display = "none";
});

let nextIndex = 2;
let prevIndex = 4;
nextBtnMini.addEventListener("click", () => {
  console.log("nextIndex", nextIndex);
  largePic.style.backgroundImage = `url("images/image-product-${nextIndex}.jpg")`;

  if (nextIndex < 4) nextIndex++;
  else nextIndex = 1;
});

previousBtnMini.addEventListener("click", () => {
  console.log("prevIndex", prevIndex);
  largePic.style.backgroundImage = `url("images/image-product-${prevIndex}.jpg")`;

  if (prevIndex > 1) prevIndex--;
  else prevIndex = 4;
});
