/* ==========================================================
   COMPANY EMPLOYEE PORTAL
   counter.js
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeCounters();

});

/* ==========================================================
   INITIALIZE COUNTERS
========================================================== */

function initializeCounters() {

    const counters = document.querySelectorAll(".counter");

    if (!counters.length) return;

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                animateCounter(entry.target);

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.5
    });

    counters.forEach(counter => observer.observe(counter));

}

/* ==========================================================
   ANIMATE COUNTER
========================================================== */

function animateCounter(counter) {

    const target = parseInt(counter.innerText);

    if (isNaN(target)) return;

    const duration = 1800;

    const increment = Math.ceil(target / 100);

    let current = 0;

    const timer = setInterval(() => {

        current += increment;

        if (current >= target) {

            current = target;

            clearInterval(timer);

        }

        counter.innerText = current;

    }, duration / 100);

}

/* ==========================================================
   RESET COUNTERS (OPTIONAL)
========================================================== */

function resetCounters() {

    document.querySelectorAll(".counter").forEach(counter => {

        counter.innerText = "0";

    });

}

/* ==========================================================
   REFRESH COUNTERS (OPTIONAL)
========================================================== */

function refreshCounters() {

    resetCounters();

    initializeCounters();

}

/* ==========================================================
   END OF FILE
========================================================== */