'use strict';

// navbar variables
const navbarNav = document.querySelector('.navbar-nav');
const navbarToggleBtn = document.querySelector('.nav-toggle-btn');

// navbar toggle functionality
navbarToggleBtn.addEventListener('click', function () {

  navbarNav.classList.toggle('active');
  this.classList.toggle('active');

});


// JavaScript for scroll animation
const section = document.querySelector('.category');

function checkScroll() {
    let sectionPos = section.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (sectionPos < windowHeight * 0.75) {
        section.classList.add('active');
    }
}

// Initial check on page load
checkScroll();

// Listen for scroll events
window.addEventListener('scroll', checkScroll);
