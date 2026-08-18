/* ==========================================================
   COMPANY EMPLOYEE PORTAL
   recentVisits.js
========================================================== */

const RECENT_VISITS_KEY = "portal-recent-visits";
const RECENT_VISITS_MAX = 5;

const RECENT_VISITS_PAGES = {
    "hr.html": { label: "HR Forms", icon: "bi-person-badge-fill" },
    "it.html": { label: "IT Forms", icon: "bi-pc-display" },
    "finance.html": { label: "Finance", icon: "bi-cash-stack" },
    "procurement.html": { label: "Procurement", icon: "bi-box-seam" },
    "admin.html": { label: "Administration", icon: "bi-building" },
    "hse.html": { label: "HSE", icon: "bi-shield-check" },
    "qhse.html": { label: "QHSE", icon: "bi-patch-check-fill" },
    "policies.html": { label: "Policies", icon: "bi-journal-bookmark-fill" },
    "contact.html": { label: "Contact Directory", icon: "bi-telephone-fill" }
};

document.addEventListener("DOMContentLoaded", () => {

    recordCurrentVisit();
    renderRecentVisits();

});

/* ==========================================================
   RECORD CURRENT PAGE VISIT
========================================================== */

function recordCurrentVisit() {

    const page = window.location.pathname.split("/").pop() || "index.html";

    const info = RECENT_VISITS_PAGES[page];

    if (!info) return;

    let recent = getRecentVisits();

    recent = recent.filter(item => item.page !== page);

    recent.unshift({ page, label: info.label, icon: info.icon });

    recent = recent.slice(0, RECENT_VISITS_MAX);

    localStorage.setItem(RECENT_VISITS_KEY, JSON.stringify(recent));

}

/* ==========================================================
   GET RECENT VISITS
========================================================== */

function getRecentVisits() {

    try {

        return JSON.parse(localStorage.getItem(RECENT_VISITS_KEY)) || [];

    } catch (e) {

        return [];

    }

}

/* ==========================================================
   RENDER RECENT VISITS (Home Page Only)
========================================================== */

function renderRecentVisits() {

    const list = document.getElementById("recentVisits");

    if (!list) return;

    const section = document.getElementById("recentVisitsSection");

    const recent = getRecentVisits();

    if (recent.length === 0) {

        if (section) section.style.display = "none";

        return;

    }

    list.innerHTML = recent.map(item =>
        `<a href="${item.page}" class="recent-visit-chip">
            <i class="bi ${item.icon}"></i> ${item.label}
        </a>`
    ).join("");

}

/* ==========================================================
   END OF FILE
========================================================== */
