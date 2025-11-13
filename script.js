'use strict';


// NAV BUTTON 

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}


const navbar = document.querySelector('[data-navbar]');
const navToggler = document.querySelector('[data-nav-toggler]');
const navLinks = document.querySelectorAll('[data-nav-link]');

const toggleNav = function () {
    navbar.classList.toggle("active")
    this.classList.toggle("active")
}

navToggler.addEventListener("click", toggleNav)


const navClose = () => {
    navbar.classList.remove("active")
    navToggler.classList.remove("active")
}

addEventOnElements(navLinks, "click", navClose)



//SCROLL POP HEADER



const header = document.querySelector("[data-header]");

const activeEl = function () {
    if (window.scrollY > 100) {
        header.classList.add("active")
    }
    else {
        header.classList.remove("active")
    }
}

window.addEventListener("scroll", activeEl)


// BUTTON HOVER ANIMATION


const buttons = document.querySelectorAll("[data-btn]")

const buttonHoverRipple = function (event) {
    this.style.setProperty("--top", `${event.offsetY}px`)
    this.style.setProperty("--left", `${event.offsetX}px`)
}

addEventOnElements(buttons, "mousemove", buttonHoverRipple)



//scroll animation 



const revealElement = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
    for(let i = 0, len = revealElement.length; i < len; i++){
        const isElementInsideWindow = revealElement[i].getBoundingClientRect().top < window.innerHeight / 1.1;

        if(isElementInsideWindow){
            revealElement[i].classList.add("revealed")
        }
    }
}

window.addEventListener("scroll", revealElementOnScroll)
window.addEventListener("load", revealElementOnScroll)



