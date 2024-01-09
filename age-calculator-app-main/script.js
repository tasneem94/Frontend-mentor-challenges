const monthOf30 = [4, 6, 9, 11];
const monthOf31 = [1, 3, 5, 7, 8, 10, 12];

const outputYears = document.querySelector(".output-years");
const outputMonths = document.querySelector(".output-months");
const outputDays = document.querySelector(".output-days");

const btn = document.querySelector(".button-circle");

const inputYears = document.querySelector("#year");
const inputMonths = document.querySelector("#month");
const inputDays = document.querySelector("#day");

const errorDay = document.querySelector(".error-day");
const errorMonth = document.querySelector(".error-month");
const errorYear = document.querySelector(".error-year");

const smallerText = document.querySelector(".smaller-text");
const dateText = document.querySelectorAll(".date-text");
const dayMonthYear = document.querySelectorAll(".day-month-year");

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();

const isLeapYear = (year) =>
  year > 0 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));

const maxValidDayLength = (month, year) => {
  if (monthOf31.includes(month)) {
    return 31;
  } else if (monthOf30.includes(month)) {
    return 30;
  } else if (month === 2 && isLeapYear(year)) {
    return 29;
  } else if (month === 2 && !isLeapYear(year)) {
    return 28;
  } else {
    return 31; //when month and year is empty
  }
};

let dayError = () => {
  inputDays.addEventListener("input", (e) => {
    let month = +inputMonths.value;
    let year = +inputYears.value;
    let maxDayLength = maxValidDayLength(month, year);
    if (
      +inputYears.value === currentYear &&
      +inputMonths.value === currentMonth
    ) {
      errorDay.style.visibility =
        +inputDays.value < 0 || +inputDays.value > currentDay
          ? "visible"
          : "hidden";
    } else {
      errorDay.style.visibility =
        +inputDays.value < 0 || +inputDays.value > maxDayLength
          ? "visible"
          : "hidden";
    }
  });
};

let monthError = () => {
  inputMonths.addEventListener("input", (e) => {
    if (+inputYears.value === currentYear) {
      errorMonth.style.visibility =
        +inputMonths.value < 0 || +inputMonths.value > currentMonth
          ? "visible"
          : "hidden";
    } else {
      errorMonth.style.visibility =
        +inputMonths.value < 0 || +inputMonths.value > 12
          ? "visible"
          : "hidden";
    }
    let month = +inputMonths.value;
    let year = +inputYears.value;
    let maxDayLength = maxValidDayLength(month, year);
    if (
      +inputYears.value === currentYear &&
      +inputMonths.value === currentMonth
    ) {
      errorDay.style.visibility =
        +inputDays.value < 0 || +inputDays.value > currentDay
          ? "visible"
          : "hidden";
    } else {
      errorDay.style.visibility =
        +inputDays.value < 0 || +inputDays.value > maxDayLength
          ? "visible"
          : "hidden";
    }
  });
};

let YearError = () => {
  inputYears.addEventListener("input", (e) => {
    errorYear.style.visibility =
      +inputYears.value < 0 || +inputYears.value > currentYear
        ? "visible"
        : "hidden";

    let month = +inputMonths.value;
    let year = +inputYears.value;
    let maxDayLength = maxValidDayLength(month, year);
    if (+inputYears.value === currentYear) {
      errorMonth.style.visibility =
        +inputMonths.value < 0 || +inputMonths.value > currentMonth
          ? "visible"
          : "hidden";
    } else {
      errorMonth.style.visibility =
        +inputMonths.value < 0 || +inputMonths.value > 12
          ? "visible"
          : "hidden";
    }
    if (
      +inputYears.value === currentYear &&
      +inputMonths.value === currentMonth
    ) {
      errorDay.style.visibility =
        +inputDays.value < 0 || +inputDays.value > currentDay
          ? "visible"
          : "hidden";
    } else {
      errorDay.style.visibility =
        +inputDays.value < 0 || +inputDays.value > maxDayLength
          ? "visible"
          : "hidden";
    }
  });
};

dayError();
monthError();
YearError();

const ageCal = (birthDay, birthMonth, birthYear) => {
  let ageMonth = currentMonth - birthMonth;
  let ageDay = currentDay - birthDay;
  let ageYear = currentYear - birthYear;

  if (ageDay < 0) {
    ageMonth--;
    ageDay += new Date(currentYear, currentMonth, 0).getDate();
    // console.log(new Date(currentYear, currentMonth, 0).getDate());
  }

  if (ageMonth < 0) {
    ageYear--;
    ageMonth += 12;
  }

  return {
    years: ageYear,
    months: ageMonth,
    days: ageDay,
  };
};

btn.addEventListener("click", () => {
  if (+inputDays.value === 0) {
    errorDay.style.visibility = "visible";
  }
  if (+inputMonths.value === 0) {
    errorMonth.style.visibility = "visible";
  }
  if (+inputYears.value === 0) {
    errorYear.style.visibility = "visible";
  }

  if (
    errorDay.style.visibility === "hidden" &&
    errorMonth.style.visibility === "hidden" &&
    errorYear.style.visibility === "hidden"
  ) {
    const calculatedAge = ageCal(
      +inputDays.value,
      +inputMonths.value,
      +inputYears.value
    );
    outputYears.textContent = `${calculatedAge.years} `;
    outputMonths.textContent = `${calculatedAge.months} `;
    outputDays.textContent = `${calculatedAge.days} `;
    dayMonthYear.forEach((element) => {
      element.style.color = "hsl(0, 1%, 44%)";
    });
  } else {
    dayMonthYear.forEach((element) => {
      element.style.color = "hsl(0, 100%, 67%)";
    });
    outputYears.textContent = "-- ";
    outputMonths.textContent = "-- ";
    outputDays.textContent = "-- ";
  }
});
