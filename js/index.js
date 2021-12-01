const elHamburgerBtn = document.querySelector(".header__hamburger");
const elHeader = document.querySelector(".header");

elHamburgerBtn.addEventListener('click', ()=> {
  elHeader.classList.toggle('header--open');
})



// const elHamburgerBt = document.querySelector(".header__hamburger");
// const elFooter = document.querySelector(".footer__top");

// elHamburgerBt.addEventListener('click', ()=> {
//   elFooter.classList.toggle('header--open');
// })