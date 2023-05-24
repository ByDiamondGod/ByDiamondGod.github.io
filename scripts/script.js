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

// Obtener todos los enlaces dentro del elemento "nav"
const links = document.querySelectorAll("nav a");

// Manejar el evento de clic en los enlaces
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Evitar la acción predeterminada del enlace
    const href = link.getAttribute("href"); // Obtener el valor del atributo "href"
    const targetElement = document.querySelector(href); // Buscar el elemento de destino utilizando el valor del atributo "href"
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" }); // Desplazarse al elemento de destino de manera suave
    }
  });
});
