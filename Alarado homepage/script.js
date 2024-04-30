let darkmode = false;
const modeChanges = document.querySelectorAll(".mode-change");

modeChanges.forEach((change) => {
    change.addEventListener("click", () => {
        darkmode = !darkmode;

        // Change logo
        const logo = document.getElementById("nav-logo");

        !darkmode
            ? logo.setAttribute("src", "resources/alarado-icon-homepage.svg")
            : logo.setAttribute("src", "resources/alarado-icon-homepage-dark.svg");

        // Change mode switch
        const modeIndicators = document.querySelectorAll(".mode-indicator");
        const lightModes = document.querySelectorAll("[alt='Light mode']");
        const darkModes = document.querySelectorAll("[alt='Dark mode']");

        if (darkmode) {
            modeIndicators.forEach((indicator) => (indicator.style.transform = "translateX(-92%)"));
            darkModes.forEach((mode) => mode.setAttribute("src", "resources/Moon_fill.svg"));
            lightModes.forEach((mode) => mode.setAttribute("src", "resources/Sun_fill_dark.svg"));
        } else {
            modeIndicators.forEach((indicator) => (indicator.style.transform = "translateX(0)"));
            darkModes.forEach((mode) => mode.setAttribute("src", "resources/Moon_fill_light.svg"));
            lightModes.forEach((mode) => mode.setAttribute("src", "resources/Sun_fill.svg"));
        }

        // Change colors
        const dmBgBlack = document.querySelectorAll('[data-dm-bg="black"]');
        const dmTextWhite = document.querySelectorAll('[data-dm-text="white"]');
        const dmTextGrey = document.querySelectorAll('[data-dm-text="grey"]');
        const dmImg = document.querySelectorAll('[data-dm-image="invert"]');

        dmBgBlack.forEach((bg) => bg.classList.toggle("dm-bg-black"));
        dmTextWhite.forEach((text) => text.classList.toggle("dm-text-white"));
        dmTextGrey.forEach((text) => text.classList.toggle("dm-text-grey"));
        dmImg.forEach((img) => img.classList.toggle("dm-img-invert"));
    });
});
