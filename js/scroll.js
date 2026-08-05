/* ==========================================================
   COMPANY EMPLOYEE PORTAL
   scroll.js
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeScrollFeatures();

});

/* ==========================================================
   INITIALIZE
========================================================== */

function initializeScrollFeatures(){

    scrollTopButton();

    smoothAnchorScroll();

    navbarScrollEffect();

}

/* ==========================================================
   SCROLL TO TOP BUTTON
========================================================== */

function scrollTopButton(){

    const button = document.getElementById("scrollTopBtn");

    if(!button) return;

    window.addEventListener("scroll", () => {

        if(window.scrollY > 300){

            button.style.display = "flex";

        }else{

            button.style.display = "none";

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/* ==========================================================
   SMOOTH SCROLL FOR ANCHORS
========================================================== */

function smoothAnchorScroll(){

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function(e){

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });

            }

        });

    });

}

/* ==========================================================
   NAVBAR EFFECT
========================================================== */

function navbarScrollEffect(){

    const navbar = document.querySelector(".navbar");

    if(!navbar) return;

    window.addEventListener("scroll", () => {

        if(window.scrollY > 60){

            navbar.classList.add("shadow");

            navbar.style.padding = "10px 0";

        }else{

            navbar.classList.remove("shadow");

            navbar.style.padding = "15px 0";

        }

    });

}

/* ==========================================================
   SCROLL PROGRESS BAR (Optional)
========================================================== */

window.addEventListener("scroll", () => {

    const progress = document.getElementById("scrollProgress");

    if(!progress) return;

    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

    const current = (window.pageYOffset / totalHeight) * 100;

    progress.style.width = current + "%";

});

/* ==========================================================
   END OF FILE
========================================================== */