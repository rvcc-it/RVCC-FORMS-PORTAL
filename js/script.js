/* ==========================================================
   COMPANY EMPLOYEE PORTAL
   script.js
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializePortal();

});

/* ==========================================================
   INITIALIZE
========================================================== */

function initializePortal(){

    navbarShadow();

    activeNavigation();

    smoothScrolling();

    mobileMenu();

    revealAnimation();

    cardEffects();

    welcomeMessage();

}

/* ==========================================================
   NAVBAR SHADOW
========================================================== */

function navbarShadow(){

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 40){

            navbar.classList.add("shadow");

        }

        else{

            navbar.classList.remove("shadow");

        }

    });

}

/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */

function activeNavigation(){

    const currentPage = window.location.pathname.split("/").pop();

    const links = document.querySelectorAll(".navbar-nav .nav-link");

    links.forEach(link=>{

        const href = link.getAttribute("href");

        if(href === currentPage){

            link.classList.add("active");

        }

    });

}

/* ==========================================================
   SMOOTH SCROLL
========================================================== */

function smoothScrolling(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

}

/* ==========================================================
   MOBILE MENU AUTO CLOSE
========================================================== */

function mobileMenu(){

    const navLinks=document.querySelectorAll(".navbar-nav .nav-link");

    const navCollapse=document.querySelector(".navbar-collapse");

    navLinks.forEach(link=>{

        link.addEventListener("click",()=>{

            if(navCollapse.classList.contains("show")){

                bootstrap.Collapse.getInstance(navCollapse).hide();

            }

        });

    });

}

/* ==========================================================
   CARD HOVER EFFECT
========================================================== */

function cardEffects(){

    const cards=document.querySelectorAll(

        ".portal-card,.form-card,.policy-card,.contact-card,.department-card"

    );

    cards.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-10px)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="translateY(0px)";

        });

    });

}

/* ==========================================================
   REVEAL ON SCROLL
========================================================== */

function revealAnimation(){

    const reveals=document.querySelectorAll(".reveal");

    function reveal(){

        const windowHeight=window.innerHeight;

        reveals.forEach(item=>{

            const top=item.getBoundingClientRect().top;

            if(top < windowHeight-100){

                item.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll",reveal);

    reveal();

}

/* ==========================================================
   WELCOME MESSAGE
========================================================== */

function welcomeMessage(){

    console.log(

        "%cWelcome to Company Employee Portal",

        "color:#0d6efd;font-size:18px;font-weight:bold;"

    );

}

/* ==========================================================
   CURRENT YEAR (Optional)
========================================================== */

const yearElement=document.getElementById("currentYear");

if(yearElement){

    yearElement.textContent=new Date().getFullYear();

}

/* ==========================================================
   LOADING SCREEN (Optional)
========================================================== */

window.addEventListener("load",()=>{

    const loader=document.querySelector(".loader");

    if(loader){

        loader.style.display="none";

    }

});

/* ==========================================================
   TOOLTIP INITIALIZATION
========================================================== */

const tooltipTriggerList=[].slice.call(

document.querySelectorAll('[data-bs-toggle="tooltip"]')

);

tooltipTriggerList.map(function(el){

return new bootstrap.Tooltip(el);

});

/* ==========================================================
   POPOVER INITIALIZATION
========================================================== */

const popoverTriggerList=[].slice.call(

document.querySelectorAll('[data-bs-toggle="popover"]')

);

popoverTriggerList.map(function(el){

return new bootstrap.Popover(el);

});

/* ==========================================================
   END OF FILE
========================================================== */