/* ============================================
   LANGUAGE.JS
============================================ */

const languageButton =
    document.querySelector("#language-button");

const languageMenu =
    document.querySelector("#language-menu");

const languageItems =
    document.querySelectorAll("#language-menu li");

const LANGUAGE_KEY = "portfolio-language";

let translations = {};

/* CARREGAR JSON */

async function loadTranslations(){

    const response =
        await fetch("./data/translations.json");

    translations = await response.json();

    const savedLanguage =
        localStorage.getItem(LANGUAGE_KEY) || "pt-BR";

    changeLanguage(savedLanguage);

}

/* TROCAR IDIOMA */

function changeLanguage(language) {
    localStorage.setItem(LANGUAGE_KEY, language);
    document.documentElement.lang = language;

    // Tradução dos textos
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const keys = element.dataset.i18n.split(".");

        let value = translations[language];

        keys.forEach(key => {
            value = value[key];
        });

        if (value) {
            element.textContent = value;
        }
    });

    // Tradução dos placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const keys = element.dataset.i18nPlaceholder.split(".");

        let value = translations[language];

        keys.forEach(key => {
            value = value[key];
        });

        if (value) {
            element.placeholder = value;
        }
    });

    updateButton(language);

    // Atualiza conteúdos gerados por JavaScript
    renderProjects(projects);
    renderTimeline(timelineItems);
    renderCertificates(certificatesList);
}

/* BOTÃO */

function updateButton(language){

    const flags = {

        "pt-BR":"🇧🇷 PT",
        "en-US":"🇺🇸 EN",
        "es-ES":"🇪🇸 ES",
        "ru-RU":"🇷🇺 RU"

    };

    languageButton.textContent = flags[language];

}

/* MENU */

languageButton.addEventListener("click",()=>{

    languageMenu.classList.toggle("show");

});

languageItems.forEach(item=>{

    item.addEventListener("click",()=>{

        changeLanguage(item.dataset.language);

        languageMenu.classList.remove("show");

    });

});

/* FECHAR AO CLICAR FORA */

window.addEventListener("click",(event)=>{

    if(!event.target.closest(".language-selector")){

        languageMenu.classList.remove("show");

    }

});

loadTranslations();