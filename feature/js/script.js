"use strict";

// Add even on element

const addEvenOnElm = (elem, type, callBack) => {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callBack);
        }
    } else {
        elem.addEventListener(type, callBack);
    }
}

// navbar toggle
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEvenOnElm(navTogglers, "click", toggleNavbar);

const closeNavbar = () => {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}

addEvenOnElm(navbarLinks, "click", closeNavbar);

// header sticky & back-top-btn active
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = () => {
    if (window.scrollY > 150) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
}

addEvenOnElm(window, "scroll", headerActive);

let lastScrollPOS = 0;
const headerSticky = () => {
    if (lastScrollPOS >= window.scrollY) {
        header.classList.remove("header-hide");
    } else {
        header.classList.add("header-hide");
    }

    lastScrollPOS = window.scrollY;
}

addEvenOnElm(window, "scroll", headerSticky);



// Scroll reveal effect 

const section = document.querySelectorAll("[data-section]");

const scrollReveal = ()=>{
    for (let i = 0; i < section.length; i++) {
        if (section[i].getBoundingClientRect().top < window.innerHeight / 2) {
            section[i].classList.add("active");
        }        
    }
}
scrollReveal();

addEvenOnElm(window,"scroll",scrollReveal);