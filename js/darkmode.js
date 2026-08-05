/* ==========================================================
   COMPANY EMPLOYEE PORTAL
   darkmode.js
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeDarkMode();

});

/* ==========================================================
   INITIALIZE
========================================================== */

function initializeDarkMode() {

    const darkButton = document.getElementById("darkMode");

    if (!darkButton) return;

    // Load saved theme
    loadTheme();

    // Toggle on click
    darkButton.addEventListener("click", toggleTheme);

}

/* ==========================================================
   TOGGLE THEME
========================================================== */

function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    localStorage.setItem("portal-theme", isDark ? "dark" : "light");

    updateThemeIcon(isDark);

}

/* ==========================================================
   LOAD SAVED THEME
========================================================== */

function loadTheme() {

    const savedTheme = localStorage.getItem("portal-theme");

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    let enableDark = false;

    if (savedTheme === "dark") {

        enableDark = true;

    } else if (savedTheme === null && prefersDark) {

        enableDark = true;

    }

    if (enableDark) {

        document.body.classList.add("dark-mode");

    }

    updateThemeIcon(enableDark);

}

/* ==========================================================
   UPDATE ICON
========================================================== */

function updateThemeIcon(isDark) {

    const button = document.getElementById("darkMode");

    if (!button) return;

    const icon = button.querySelector("i");

    if (!icon) return;

    if (isDark) {

        icon.className = "bi bi-sun-fill";

        button.setAttribute("title", "Switch to Light Mode");

    } else {

        icon.className = "bi bi-moon-stars-fill";

        button.setAttribute("title", "Switch to Dark Mode");

    }

}

/* ==========================================================
   SYSTEM THEME CHANGE (Optional)
========================================================== */

window.matchMedia("(prefers-color-scheme: dark)")
.addEventListener("change", (event) => {

    const savedTheme = localStorage.getItem("portal-theme");

    // Only auto-switch if user hasn't chosen manually
    if (savedTheme === null) {

        if (event.matches) {

            document.body.classList.add("dark-mode");
            updateThemeIcon(true);

        } else {

            document.body.classList.remove("dark-mode");
            updateThemeIcon(false);

        }

    }

});

/* ==========================================================
   RESET THEME (Optional Helper)
========================================================== */

function resetThemePreference() {

    localStorage.removeItem("portal-theme");

    document.body.classList.remove("dark-mode");

    updateThemeIcon(false);

}

/* ==========================================================
   END OF FILE
========================================================== */