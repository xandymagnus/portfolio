/* ============================================
   MENU.JS
============================================ */

const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav-menu a");

/* MENU MOBILE */

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

/* FECHAR MENU AO CLICAR */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});

/* HEADER AO ROLAR */

window.addEventListener("scroll", () => {

    if(window.scrollY > 20){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});