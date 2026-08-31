/* =====================================================
   THEME.JS
===================================================== */

const themeButton = document.querySelector(".theme-button");

const THEME_KEY = "portfolio-theme";

/* Aplicar tema salvo */

function applyTheme(theme){

    document.body.classList.toggle(
        "light-theme",
        theme === "light"
    );

    themeButton.textContent =
        theme === "light" ? "☀️" : "🌙";

}

/* Ler tema salvo */

const savedTheme =
    localStorage.getItem(THEME_KEY) || "dark";

applyTheme(savedTheme);

/* Alternar */

themeButton.addEventListener("click", ()=>{

    const currentTheme =
        document.body.classList.contains("light-theme")
        ? "light"
        : "dark";

    const nextTheme =
        currentTheme === "dark"
        ? "light"
        : "dark";

    localStorage.setItem(THEME_KEY,nextTheme);

    applyTheme(nextTheme);

});