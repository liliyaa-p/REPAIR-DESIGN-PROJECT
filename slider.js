const entities = [
  {
    city: "Rostov-on-Don<br />LCD admiral",
    square: "81 m2",
    time: "3.5 months",
    img: "images/01.png",
  },
  {
    city: "Sochi<br />Thieves",
    square: "105 m2",
    time: "4 months",
    img: "images/02.png",
  },
  {
    city: "Rostov-on-Don<br />Patriotic",
    square: "93 m2",
    time: "3 months",
    img: "images/03.png",
  },
];
const img = document.querySelector(".projects__image");
// const city = document.querySelectorAll(".span")[0];
// const square = document.querySelectorAll(".span")[1];
// const time = document.querySelectorAll(".span")[2];
const [city, square, time] = document.querySelectorAll(".span");
const items = document.querySelectorAll(".projects__item");

let currentIndex = 0;
let entitiesLength = entities.length;

const setEntity = (index) => {
  city.innerHTML = entities[index].city;
  square.innerHTML = entities[index].square;
  time.innerHTML = entities[index].time;
  img.style.backgroundImage = `url(${entities[index].img})`;

  items.forEach((item) => {
    item.classList.remove("item-active");
  });
  items[index].classList.add("item-active");
};

const activeDot = (dots, dot) => {
  dots.forEach((dot) => {
    dot.classList.remove("dot-active");
  });
  dot.classList.add("dot-active");
};

// clicking on arrows
const prev = document.querySelector(".projects__arrow-left");
const next = document.querySelector(".projects__arrow-right");

prev.addEventListener("click", () => {
  if (currentIndex === 0) {
    currentIndex = entitiesLength - 1;
  } else {
    currentIndex -= 1;
  }
  setEntity(currentIndex);
  activeDot(dots, dots[currentIndex]);
});

next.addEventListener("click", () => {
  if (currentIndex === entitiesLength - 1) {
    currentIndex = 0;
  } else {
    currentIndex += 1;
  }
  setEntity(currentIndex);
  activeDot(dots, dots[currentIndex]);
});

// Clicking on links
items.forEach((item, i) => {
  item.addEventListener("click", () => {
    currentIndex = i;
    setEntity(currentIndex);
    activeDot(dots, dots[currentIndex]);
  });
});

// Clicking on dots
const dots = document.querySelectorAll(".projects__dot");

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    activeDot(dots, dot);
    currentIndex = i;
    setEntity(currentIndex);
  });
});
