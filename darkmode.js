// ================================
// StudentHub Dark / Light Mode
// ================================

const darkModeToggle = document.getElementById("darkModeToggle");

// Check the saved theme when the page loads
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");

    if (darkModeToggle) {
        darkModeToggle.textContent = "☀️";
        darkModeToggle.setAttribute("aria-label", "Switch to light mode");
    }
} else {
    document.body.classList.remove("dark-mode");

    if (darkModeToggle) {
        darkModeToggle.textContent = "🌙";
        darkModeToggle.setAttribute("aria-label", "Switch to dark mode");
    }
}


// Toggle between dark and light mode
if (darkModeToggle) {

    darkModeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        // If dark mode is enabled
        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");

            darkModeToggle.textContent = "☀️";
            darkModeToggle.setAttribute(
                "aria-label",
                "Switch to light mode"
            );

        }

        // If light mode is enabled
        else {

            localStorage.setItem("theme", "light");

            darkModeToggle.textContent = "🌙";
            darkModeToggle.setAttribute(
                "aria-label",
                "Switch to dark mode"
            );

        }

    });

}
