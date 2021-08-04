const navMenu = document.getElementById("menu-btn");
const showNav = document.getElementById("show-nav");
const topHeader = document.getElementById("main-header");
const body = document.getElementById("main");
console.log(body);

navMenu.addEventListener("click", function () {
  showNav.classList.toggle("hidden");
  topHeader.classList.toggle("header-shadow");
  navMenu.classList.toggle("active");
  body.classList.toggle("menu-is-open");
});

window.addEventListener("scroll", function () {
  topHeader.classList.toggle("header-shadow", window.scrollY > 0);
});
