// =========================================================
// script.js
// Small JavaScript interactions for the website.
// =========================================================

// Automatically write the current year into the footer.
// This means you do not need to manually update the copyright year.
document.getElementById("year").textContent = new Date().getFullYear();

// Get references to the mobile menu button and navigation container.
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".greedy-nav");

// When the user clicks the mobile menu button,
// toggle the "open" CSS class.
// The CSS rule ".greedy-nav.open" then makes the menu visible.
toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// =========================================================
// Dark mode toggle (white background/black text <-> black
// background/white text). Remembers the choice in localStorage
// so it persists across pages/visits.
// Wrapped in try/catch: some browsers (notably when the page is
// opened directly as a file:// URL) throw a SecurityError when
// touching localStorage, which would otherwise stop this script
// before the click listener below gets registered, making the
// button appear completely unresponsive.
// =========================================================
const modeToggle = document.querySelector(".mode-toggle");
const modeToggleIcon = modeToggle.querySelector("i");
const rootEl = document.documentElement;

function readDarkPref() {
  try {
    return localStorage.getItem("darkMode") === "1";
  } catch (e) {
    return false;
  }
}

function saveDarkPref(isDark) {
  try {
    localStorage.setItem("darkMode", isDark ? "1" : "0");
  } catch (e) {
    // Ignore: preference just won't persist (e.g. file:// restrictions).
  }
}

function applyIcon(isDark) {
  modeToggleIcon.classList.toggle("fa-sun", isDark);
  modeToggleIcon.classList.toggle("fa-moon", !isDark);
}

const startDark = readDarkPref();
if (startDark) {
  rootEl.classList.add("dark-mode");
}
applyIcon(startDark);

modeToggle.addEventListener("click", () => {
  const isDark = rootEl.classList.toggle("dark-mode");
  saveDarkPref(isDark);
  applyIcon(isDark);
});
