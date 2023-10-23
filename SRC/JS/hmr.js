const menuButton = document.querySelector(".hamburger");
const menu = document.querySelector(".mobile-menu");
const bar = document.querySelector(".bar");
const bar_1 = document.querySelector(".bar-1");
const bar_2 = document.querySelector(".bar-2");
const bar_3 = document.querySelector(".bar-3");
const emptspc = document.querySelector('.empty-sp-cont')

menuButton.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
  bar.classList.toggle("bar-open");
  bar_1.classList.toggle("bar-1-open");
  bar_2.classList.toggle("bar-2-open");
  bar_3.classList.toggle("bar-3-open");
  emptspc.classList.toggle('show-menu');
});

// Close the menu when clicking outside of it
emptspc.addEventListener("click", ()=>{
    menu.classList.toggle("show-menu");
  bar.classList.toggle("bar-open");
  bar_1.classList.toggle("bar-1-open");
  bar_2.classList.toggle("bar-2-open");
  bar_3.classList.toggle("bar-3-open");
  emptspc.classList.toggle('show-menu');
});
