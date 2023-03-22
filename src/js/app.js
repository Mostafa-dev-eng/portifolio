import "../scss/app.scss";
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import "bootstrap/dist/js/bootstrap.bundle";

/* ---------- show menu -------------*/

let navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

/* ------------- menu show ------- */

navToggle.onclick = function () {
    navMenu.classList.add('show-menu')
};

/* ------------ menu hidden ----------- */

navClose.onclick = function () {
    navMenu.classList.remove('show-menu')
};

/* ------------ remove menu mobile ----------- */

const navLink = document.querySelectorAll(".nav-link");

const LinkAction = () => {
    const navMenu = document.getElementById("nav-menu")

    navMenu.classList.remove('show-menu');
};
navLink.forEach(n => n.addEventListener('click', LinkAction));

// ========== EMAIL JS CONTACT ==========

const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-form-name'),
    contactEmail = document.getElementById('contact-form-email'),
    contactProject = document.getElementById('content-project'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {

    e.preventDefault()

    // check field avalue

    if (contactName.value === "" || contactEmail.value === "" || contactProject.value === "") {

        // add and remove color

        contactMessage.classList.remove('color-blue')

        contactMessage.classList.add('color-red')

        // show message 

        contactMessage.textContent = "Write all the input fields 📃"

    } else {
        emailjs.sendForm('service_7zhyezo', 'template_j4nqd2a', '#contact-form', 'vGG97RidQskwqWmF6')

            .then(() => {
                contactMessage.classList.add('color-blue')

                contactMessage.textContent = "Message sent ✅"

                setTimeout(() => {
                    contactMessage.textContent = ""
                }, 5000)
            }, (error) => {
                alert('OOPS! SOMETHING HAS FAILED...', error)
            });
    };

    contactName.value = ''
    contactEmail.value = ''
    contactProject.value = ''

};

contactForm.addEventListener('submit', sendEmail);

// Get the button:
let mybutton = document.getElementById("scroll-up");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.classList.add('scroll-show');
    } else {
        mybutton.classList.remove('scroll-show');
    }
};

// dark them --------

let bodyThemeDark = document.getElementById('body-theme'),
    btnDark = document.getElementById('theme-button-dark'),
    btnlight = document.getElementById('theme-button-light');

function themdark() {
    bodyThemeDark.classList.add('body-dark-theme')
    bodyThemeDark.classList.remove('body-light-theme');
    btnDark.style.background = "#fff";
    btnDark.style.padding = "10px";
    btnDark.style.borderRadius = "20px";
    btnDark.style.color = "black";
    // ===============
    btnlight.style.background = "none";
    btnlight.style.padding = "0";
    btnlight.style.borderRadius = "none";
};
function themlight() {
    bodyThemeDark.classList.remove('body-dark-theme')
    bodyThemeDark.classList.add('body-light-theme');
    btnDark.style.background = "none";
    btnDark.style.padding = "0";
    btnDark.style.borderRadius = "none";
    // ===============
    btnlight.style.background = "#000";
    btnlight.style.padding = "10px";
    btnlight.style.borderRadius = "20px";
    btnlight.style.color = "white";
};
btnDark.addEventListener('click', themdark);
btnlight.addEventListener('click', themlight);

// scroll section 

const sr = ScrollReveal({
    origin: 'top',
    distance: '25px',
    duration: 2500,
    delay: 200,
});

sr.reveal('.home_data-img, .section_project');

sr.reveal('.home_info', { delay: 600, origin: 'bottom', interval: 100 });
sr.reveal('.skills_content-1, .contact-cont-1', { origin: 'left' });

sr.reveal('.skills_content-2, .contact-cont-2', { origin: 'right' });

sr.reveal('.skills_content-3', { origin: 'bottom' });

sr.reveal('.section_services', { interval: 100 });