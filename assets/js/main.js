//Navigation-hamburger icon for smaller devices 

var open = document.getElementById('hamburger');
var changeIcon = true;
// When the user clicks on the hamburger icon overlays the navigation elements on a coloured background.
open.addEventListener("click", function() {

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});

// Code directed by https://www.w3schools.com
//Get the button
mybutton = document.getElementById("to-top-btn");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the page
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//Toggle FAQs

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    });
});


//Scroll reveal
window.sr = ScrollReveal();
sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '64px',
    delay: '600'
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '320px',
    delay: '900'
});