/* Adding a class to the nav element when the button is clicked.----------- */
const button = document.querySelector(".menu-btn");
const nav = document.querySelector(".header__nav");

button.addEventListener("click", () => {
  nav.classList.toggle("header__nav--desactive");
});

/* This is the code that is making the hamburger menu button animate.------- */
const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

