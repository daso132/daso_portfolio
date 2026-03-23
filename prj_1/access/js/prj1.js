const menuBar = document.querySelector(".nav_mobile");
const menuOverLay = document.getElementById("overlay_for_mobile_device");
const menuOpenButton = document.querySelector(".hamberger_bar");
function openMenu(){
    menuBar.classList.add("show_menu");
}

function closeMenu(){
    menuBar.classList.remove("show_menu");
}

