const slider = document.querySelector(".slider");
const sliderStage = document.querySelector(".slider-stage");
const slides = document.querySelectorAll(".slider li");
const prev = document.querySelector(".previous-arrow");
const next = document.querySelector(".next-arrow");

const slideWidth = slides[0].clientWidth;
let currentInex = 0;
let slidesNumber = slides.length - 1;

function goToSlide(index) {
  if (index < 0) {
    index = slidesNumber;
  } else if (index > slidesNumber) {
    index = 0;
  }

  slider.style.left = index * -slideWidth + "px";
  currentInex = index;
}

function slideToNext() {
  goToSlide(currentInex + 1);
}

function slideToPrev() {
  goToSlide(currentInex - 1);
}

prev.addEventListener("click", slideToPrev);
next.addEventListener("click", slideToNext);

const goUpBtn = document.querySelector(".go-up button");

goUpBtn.addEventListener("click", function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const readMoreLessBtns = document.querySelectorAll(".read-more-less-btn");

function showHideText() {
  const siblingText = this.previousElementSibling;

  if (
    siblingText.style.display === "none" ||
    siblingText.style.display === ""
  ) {
    siblingText.style.display = "block";
    this.textContent = "Czytaj mniej";
  } else {
    siblingText.style.display = "none";
    this.textContent = "Czytaj więcej";
  }
}

for (let i = 0; i < readMoreLessBtns.length; i++) {
  readMoreLessBtns[i].addEventListener("click", showHideText);
}

document.addEventListener("DOMContentLoaded", function () {
  let links = document.querySelectorAll('nav a[href^="#"]');

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      let targetId = this.getAttribute("href").substring(1);
      let targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
