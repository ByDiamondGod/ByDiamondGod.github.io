const button = document.querySelector(".header__button");
const nav = document.querySelector(".header__nav");

button.addEventListener("click", () => {
  nav.classList.toggle("header__nav--active");
});



/* const open = document.querySelector(".mob-open");
const close = document.querySelector(".mob-close");

const wrapper = document.querySelector(".mob-wrapper").classList;

open.addEventListener("click", () => {
  wrapper.toggle("opened");
  wrapper.toggle("close");
});

close.addEventListener("click", () => {
  wrapper.toggle("opened");
  wrapper.toggle("close");
}); */