const header = document.querySelector("header");
const tags = document.querySelectorAll(".tag");
const tagFilterContainer = document.querySelector(".tag-filter-container");
const cards = document.querySelectorAll(".card");
const filter = document.querySelector(".filter");
const clear = document.querySelector(".clear-btn");

const uniqueTexts = [];

tags.forEach((tag) => {
  const text = tag.textContent;

  if (!uniqueTexts.includes(text)) {
    uniqueTexts.push(text);
  }
});

uniqueTexts.sort();

//console.log(uniqueTexts);

uniqueTexts.forEach((text) => {
  const tagFilter = document.createElement("div");
  tagFilter.classList.add("tag-filter");

  const textNode = document.createTextNode(text);
  tagFilter.appendChild(textNode);

  const btnFilter = document.createElement("button");
  btnFilter.classList.add("btn-filter");
  btnFilter.textContent = "x";

  tagFilter.appendChild(btnFilter);

  tagFilterContainer.appendChild(tagFilter);

  //const tagName = tagFilter.childNodes[0].nodeValue.trim();
  //console.log(tagName, "x");

  tagFilter.style.display = "none";
});

// filter.style.display = "none";

const filterDisplay = () => {
  let count = 0;
  const tagFilters = document.querySelectorAll(".tag-filter");
  tagFilters.forEach((tagFilter) => {
    if (tagFilter.style.display === "none") {
      count++;
    }
  });
  if (count === tagFilters.length) {
    filter.style.display = "none";
    header.style.marginBottom = "0";
  } else {
    filter.style.display = "block";
    header.style.marginBottom = "-30px";
  }
};
filterDisplay();

const cardDisplay = () => {
  cards.forEach((card) => {
    const cardTags = Array.from(card.querySelectorAll(".tag")).map((t) =>
      t.textContent.trim()
    );

    const tagsInFilter = Array.from(
      tagFilterContainer.querySelectorAll(".tag-filter")
    )
      .map((t) => {
        if (t.style.display === "block") {
          return t.childNodes[0].nodeValue.trim();
        }
      })
      .filter(Boolean);

    const shouldDisplay = tagsInFilter.every((tag) => cardTags.includes(tag));

    card.style.display = shouldDisplay ? "block" : "none";
  });
};

const tagFilters = document.querySelectorAll(".tag-filter");

tags.forEach((tag) => {
  tag.addEventListener("click", () => {
    filter.style.display = "block";
    header.style.marginBottom = "-30px";
    tagFilters.forEach((tagFilter) => {
      const tagName = tagFilter.childNodes[0].nodeValue.trim();

      const clickedTag = tag.textContent;
      if (clickedTag === tagName) {
        tagFilter.style.display = "block";
        cardDisplay();
      }
    });
  });
});

const btnFilters = document.querySelectorAll(".tag-filter");

btnFilters.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const tagFilter = event.target.closest(".tag-filter");
    tagFilter.style.display = "none";
    cardDisplay();
    filterDisplay();
  });
});

clear.addEventListener("click", () => {
  const tagFilters = document.querySelectorAll(".tag-filter");
  tagFilters.forEach((tagFilter) => {
    tagFilter.style.display = "none";
  });
  cardDisplay();
  filterDisplay();
});
