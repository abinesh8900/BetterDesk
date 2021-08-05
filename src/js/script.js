const navMenu = document.getElementById("menu-btn");
const showNav = document.getElementById("show-nav");
const topHeader = document.getElementById("main-header");
const body = document.getElementById("main");

navMenu.addEventListener("click", function () {
  showNav.classList.toggle("hidden");
  topHeader.classList.toggle("header-shadow");
  topHeader.classList.toggle("full-height");
  navMenu.classList.toggle("active");
  body.classList.toggle("menu-is-open");
});

window.addEventListener("scroll", function () {
  topHeader.classList.toggle("header-shadow", window.scrollY > 0);
});

const accordions = document.getElementsByClassName("accordion-item");

for (const accordion of accordions) {
  accordion.addEventListener("click", function () {
    accordion.classList.toggle("open");
  });
}
