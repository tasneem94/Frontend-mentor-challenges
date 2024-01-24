const url = "https://api.adviceslip.com/advice";
const btn = document.querySelector(".btn-dice");
const adviceNo = document.querySelector(".advice-no");
const adviceText = document.querySelector(".advice-text");

const fetchNewAdvice = async () => {
  const response = await fetch(url);
  console.log(response);

  const data = await response.json();
  console.log(data.slip.id, data.slip.advice);

  adviceNo.textContent = `${data.slip.id}`;
  adviceText.textContent = `"${data.slip.advice}"`;
};

btn.addEventListener("click", fetchNewAdvice);
