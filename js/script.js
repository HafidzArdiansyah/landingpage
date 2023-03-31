document.addEventListener("DOMContentLoaded", function () {
    const themeSwitch = document.querySelector("#theme-switch");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
        document.body.classList.add(currentTheme);

        if (currentTheme === "dark-mode") {
            themeSwitch.checked = true;
        }
    }

    themeSwitch.addEventListener("change", function () {
        if (this.checked) {
            switchTheme("dark-mode");
        } else {
            switchTheme("light-mode");
        }
    });

    function switchTheme(theme) {
        document.body.classList.remove("dark-mode", "light-mode");
        document.body.classList.add(theme);
        localStorage.setItem("theme", theme);
    }
});
