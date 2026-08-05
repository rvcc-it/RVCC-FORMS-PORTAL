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