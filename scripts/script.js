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

// Genera en HTML el año actual, asi evito cambiarlo cada año.
document.addEventListener('DOMContentLoaded', function () {
  var year = new Date().getFullYear();
  document.getElementById(
      'copyright',
  ).innerHTML = `<span class="footer-copyright__span"> © ${year} ∾ </span>
              <span class="footer-copyright__span footer-copyright__span--color"><a href="https://www.linkedin.com/in/eduardo-danderfer/" target="_blank" rel="noreferrer"> Eddev </a></span>`;
});
