let menuButton = document.querySelector(".main-header__button-toggle");
let menu = document.querySelector(".main-header__nav-menu");
let nav = document.querySelector(".main-header__nav");
let mainHeader = document.querySelector(".main-header");

menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("main-header__button-toggle--opened");
  menu.classList.toggle("nav-menu--opened");
  nav.classList.toggle("main-header__nav--full");
  mainHeader.classList.toggle("main-header--index-page-opened")
});
