/* ==========================================================
   COMPANY EMPLOYEE PORTAL
   search.js
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    initializeSearch();

});

/* ==========================================================
   INITIALIZE SEARCH
========================================================== */

function initializeSearch() {

    const searchBox = document.getElementById("formSearch") ||
                      document.getElementById("searchInput");

    if (!searchBox) return;

    searchBox.addEventListener("keyup", filterCards);

}

/* ==========================================================
   FILTER DOCUMENT CARDS
========================================================== */

function filterCards(event) {

    const keyword = event.target.value.toLowerCase().trim();

    const cards = document.querySelectorAll(
        ".form-card, .portal-card, .policy-card, .department-card"
    );

    let visibleCards = 0;

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(keyword)) {

            card.style.display = "";

            visibleCards++;

        } else {

            card.style.display = "none";

        }

    });

    showNoResults(visibleCards);

}

/* ==========================================================
   NO RESULTS MESSAGE
========================================================== */

function showNoResults(count) {

    let message = document.getElementById("noResults");

    if (!message) {

        message = document.createElement("div");

        message.id = "noResults";

        message.className = "alert alert-warning mt-4 text-center";

        message.innerHTML = `
            <i class="bi bi-search"></i>
            No matching forms found.
        `;

        const formsSection = document.getElementById("forms");

        if (formsSection) {

            formsSection.appendChild(message);

        }

    }

    message.style.display = count === 0 ? "block" : "none";

}

/* ==========================================================
   CLEAR SEARCH
========================================================== */

function clearSearch() {

    const searchBox = document.getElementById("formSearch") ||
                      document.getElementById("searchInput");

    if (searchBox) {

        searchBox.value = "";

    }

    const cards = document.querySelectorAll(
        ".form-card, .portal-card, .policy-card, .department-card"
    );

    cards.forEach(card => {

        card.style.display = "";

    });

    const message = document.getElementById("noResults");

    if (message) {

        message.style.display = "none";

    }

}

/* ==========================================================
   SEARCH ON ENTER
========================================================== */

document.addEventListener("keydown", function (event) {

    const searchBox = document.getElementById("formSearch") ||
                      document.getElementById("searchInput");

    if (!searchBox) return;

    if (event.key === "Escape") {

        clearSearch();

    }

});

/* ==========================================================
   OPTIONAL SEARCH HIGHLIGHT
========================================================== */

function highlightKeyword(card, keyword) {

    if (!keyword) return;

    const original = card.dataset.originalText || card.innerHTML;

    card.dataset.originalText = original;

    const regex = new RegExp(`(${keyword})`, "gi");

    card.innerHTML = original.replace(
        regex,
        "<mark>$1</mark>"
    );

}

/* ==========================================================
   RESET HIGHLIGHT
========================================================== */

function removeHighlight() {

    document.querySelectorAll(
        ".form-card,.portal-card,.policy-card,.department-card"
    ).forEach(card => {

        if (card.dataset.originalText) {

            card.innerHTML = card.dataset.originalText;

        }

    });

}

/* ==========================================================
   END OF FILE
========================================================== */