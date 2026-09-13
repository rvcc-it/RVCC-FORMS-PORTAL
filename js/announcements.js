/* ==========================================================
   COMPANY EMPLOYEE PORTAL
   announcements.js
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    initializeAnnouncements();

});

/* ==========================================================
   INITIALIZE
========================================================== */

function initializeAnnouncements() {

    rotateAnnouncements();

    updateCurrentDate();

    highlightLatestAnnouncement();

    updateNextThursdayDate();

}

/* ==========================================================
   ROTATE ANNOUNCEMENTS
========================================================== */

function rotateAnnouncements() {

    const announcements = document.querySelectorAll(".announcement-card");

    if (announcements.length === 0) return;

    let current = 0;

    announcements.forEach((item, index) => {

        if (index !== 0) {

            item.style.display = "none";

        }

    });

    setInterval(() => {

        announcements[current].style.display = "none";

        current++;

        if (current >= announcements.length) {

            current = 0;

        }

        announcements[current].style.display = "flex";

    }, 6000);

}

/* ==========================================================
   CURRENT DATE
========================================================== */

function updateCurrentDate() {

    const dateElement = document.getElementById("currentDate");

    if (!dateElement) return;

    const today = new Date();

    const options = {

        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"

    };

    dateElement.textContent =
        today.toLocaleDateString("en-US", options);

}

/* ==========================================================
   NEXT THURSDAY DATE (IT Maintenance - recurs weekly)
========================================================== */

function updateNextThursdayDate() {

    const dateElement = document.getElementById("itMaintenanceDate");

    if (!dateElement) return;

    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];

    const today = new Date();

    const daysUntilThursday = (4 - today.getDay() + 7) % 7;

    const nextThursday = new Date(today);
    nextThursday.setDate(today.getDate() + daysUntilThursday);

    const day = String(nextThursday.getDate()).padStart(2, "0");
    const month = months[nextThursday.getMonth()];
    const year = nextThursday.getFullYear();

    dateElement.textContent = `${day} ${month} ${year}`;

}

/* ==========================================================
   HIGHLIGHT LATEST ANNOUNCEMENT
========================================================== */

function highlightLatestAnnouncement() {

    const firstAnnouncement =
        document.querySelector(".announcement-card");

    if (!firstAnnouncement) return;

    firstAnnouncement.style.borderLeft =
        "6px solid #198754";

}

/* ==========================================================
   NOTIFICATION BADGE
========================================================== */

function updateNotificationBadge(count) {

    const badge = document.getElementById("notificationBadge");

    if (!badge) return;

    badge.textContent = count;

    badge.style.display = count > 0 ? "inline-flex" : "none";

}

/* ==========================================================
   AUTO REFRESH (Placeholder)
========================================================== */

function refreshAnnouncements() {

    console.log("Checking for new announcements...");

    // Future API call can be added here

}

/* Refresh every 5 minutes */

setInterval(refreshAnnouncements, 300000);

/* ==========================================================
   END OF FILE
========================================================== */