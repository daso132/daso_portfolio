const menuBar = document.querySelector(".nav_mobile");
const menuOverLay = document.querySelector(".overlay_for_mobile_device");
const menuOpenButton = document.querySelector(".hamberger_bar");
const body = document.querySelector("body");
const paralax = document.querySelector(".background_parallax");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  body.style.backgroundPositionY = scrollY * -0.2 + "px";
  paralax.style.backgroundPositionY = scrollY * -0.4 + "px";
});

function openMenu(){
    menuBar.classList.add("show_menu");
    menuBar.removeAttribute("inert");
    menuOverLay.classList.add("show_overlay");
}

function closeMenu(){
    menuBar.classList.remove("show_menu");
    menuBar.setAttribute("inert","");
    menuOverLay.classList.remove("show_overlay");
}

