const translations = {
  sv: {
    // navtext
    "nav-home": "Hem",
    "nav-about": "Om mig",
    "nav-projects": "Projekt",
    "nav-contact": "Kontakt",
    "nav-cv": "CV",
    //herocard
    "profile-text-1": "Arbetsvillig och snabblärd,",
    "profile-text-2": "redo för nya erfarenheter!",
    "contact-btn": "Kontakta mig",
    "cv-btn": "Mitt CV",
    "hero-header": ".NET utvecklare med fullstack kunskaper.",
    //about
    "about-header": "Tidigare småföretagare och ballongkonstnär.",
    "about-text-1":
      "Jag heter Henry, är 33 år och tidigare delägare i Sickla Party AB med tre butiker inom detaljhandel i Stockholm och Uppsala. Efter 10 år i drift och utveckling av bolaget valde jag att byta riktning och plugga till .NET-utvecklare.",
    "about-text-2":
      "Genom företagandet har jag byggt upp god erfarenhet av ledarskap, personalansvar och social kompetens - vilket har gett mig en tydlig bild av vad som krävs av en bra anställd. Jag är van att arbeta i högt tempo och har en stark arbetsmoral.",
    "skills-header": "Mina kunskaper",
    //info-boxen med skills
    "info-box": "Vad jag kan om C#",
    "skill-sql": "Vad jag kan om SQL.",
    "skill-html": "Vad jag kan om HTML.",
    "skill-css": "Vad jag kan om CSS.",
    "skill-js": "Vad jag kan om JavaScript.",
    "skill-razor": "Vad jag kan om RazorPages.",
    "skill-react": "Vad jag kan om React.",
    "skill-azure": "Vad jag kan om Azure.",
    //project
    "project-tetris":
      "Skapade och designade en tetris sida med neon tema. Ett av mina absolut första projekt i HTML, CSS och JS.",
    //contact
    "contact-header": "Kontakta mig",
    "placeholder-name": "Ditt Namn",
    "placeholder-email": "Din Email",
    "placeholder-message": "Meddelande",
    "send-btn": "Skicka",
    //resume sidan
    "home-btn": "Startsidan",
    "download-btn": "Ladda ner",
  },
  en: {
    //navtext
    "nav-home": "Home",
    "nav-about": "About me",
    "nav-projects": "Projects",
    "nav-contact": "Contact",
    "nav-cv": "CV",
    //herocard
    "profile-text-1": "Hardworking and a fast learner,",
    "profile-text-2": "ready for new experiences!",
    "contact-btn": "Contact me",
    "cv-btn": "My resume",
    "hero-header": ".NET developer with fullstack skills.",
    //about
    "about-header": "Former small business owner and balloon artist.",
    "about-text-1":
      "My name is Henry, I'm 33 years old and a former co-owner of Sickla Party AB with three retail stores in Stockholm and Uppsala. After 10 years of running and developing the company, I decided to change direction and study to become a .NET developer.",
    "about-text-2":
      "Through running a business I've built up solid experience in leadership, staff management and social skills - which has given me a clear picture of what it takes to be a great employee. I'm used to working at a fast pace and have a strong work ethic.",
    "skills-header": "My skills",
    //info boxen med skills
    "info-box": "What i know about C#",
    "skill-sql": "What I know about SQL.",
    "skill-html": "What I know about HTML.",
    "skill-css": "What I know about CSS.",
    "skill-js": "What I know about JavaScript.",
    "skill-razor": "What I know about RazorPages.",
    "skill-react": "What I know about React.",
    "skill-azure": "What I know about Azure.",
    //project
    "project-tetris":
      "Created and designed a Tetris site with a neon theme. One of my very first projects in HTML, CSS and JS.",
    //contact
    "contact-header": "Contact me",
    "placeholder-name": "Your Name",
    "placeholder-email": "Your Email",
    "placeholder-message": "Message",
    "send-btn": "Send",
    //resume sidan
    "home-btn": "Home page",
    "download-btn": "Download",
  },
};

// ============språkbyte==========
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    const key = el.getAttribute("data-i18n-placeholder");
    el.placeholder = translations[lang][key];
  });
}

let currentLang = "sv";

function toggleLanguage() {
  currentLang = currentLang === "sv" ? "en" : "sv";
  setLanguage(currentLang);
  document.getElementById("lang-btn").textContent =
    currentLang === "sv" ? "EN" : "SV";
}
document.getElementById("lang-btn").addEventListener("click", toggleLanguage);

document.addEventListener("DOMContentLoaded", function () {
  setLanguage("sv");
});
