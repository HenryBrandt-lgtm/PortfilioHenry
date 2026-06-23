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
    "skill-csharp": "Vad jag kan om C#",
    "skill-sql": "Vad jag kan om SQL.",
    "skill-html": "Vad jag kan om HTML.",
    "skill-css": "Vad jag kan om CSS.",
    "skill-js": "Vad jag kan om JavaScript.",
    "skill-razorpages": "Vad jag kan om RazorPages.",
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
    "gdpr-text":
      "Dina uppgifter lagras inte och används endast för att besvara ditt meddelande.",
    //resume sidan
    "home-btn": "Startsidan",
    "download-btn": "Ladda ner",
  },
  en: {
    //navtext
    "nav-home": "Home",
    "nav-about": "About",
    "nav-projects": "Projects",
    "nav-contact": "Contact",
    "nav-cv": "CV",
    //herocard
    "profile-text-1": "Hardworking & a fast learner,",
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
    "skills-header": "Skills i've learned",
    //info boxen med skills
    "skill-csharp": "What i know about C#",
    "skill-sql": "What I know about SQL.",
    "skill-html": "What I know about HTML.",
    "skill-css": "What I know about CSS.",
    "skill-js": "What I know about JavaScript.",
    "skill-razorpages": "What I know about RazorPages.",
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
    "gdpr-text":
      "Your details are not stored and will only be used to respond to your message.",
    //resume sidan
    "home-btn": "Homepage",
    "download-btn": "Download",
  },
};
// =======testamonials=====
const testimonials = {
  sv: [
    '"Riktigt cool kille" - Hanna',
    '"Bästa chefen jag någonsin kommer ha" - Romee',
    '"Otroligt lösningsorienterad" - Åsa',
  ],
  en: [
    '"Real fine lad" - Hanna',
    '"The best boss I\'ll ever have" - Rommee',
    '"Incredibly solution-oriented" - Åsa',
  ],
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

let currentLang = localStorage.getItem("lang") || "sv";

function updateLangIcon() {
  const icon = document.getElementById("lang-icon");
  icon.src = currentLang === "sv" ? "images/uk.svg" : "images/sweden.svg";
  icon.alt = currentLang === "sv" ? "EN" : "SV";

  const resume = document.getElementById("resume-img");
  if (resume) {
    resume.src =
      currentLang === "sv"
        ? "Images/CVHenryBrandt.webp"
        : "Images/CVHenryBrandtEN.webp";
  }
}

function toggleLanguage() {
  currentLang = currentLang === "sv" ? "en" : "sv";
  localStorage.setItem("lang", currentLang);
  setLanguage(currentLang);
  updateLangIcon();
}

document.addEventListener("DOMContentLoaded", function () {
  setLanguage(currentLang);
  updateLangIcon();
  document.getElementById("lang-btn").addEventListener("click", toggleLanguage);

  // byter testaminial
  const testamonial = document.querySelector(".testamonials");
  let currentIndex = 0;

  testamonial.textContent = testimonials[currentLang][currentIndex];

  setInterval(() => {
    testamonial.style.opacity = "0";

    setTimeout(() => {
      currentIndex++;
      if (currentIndex === testimonials[currentLang].length) {
        currentIndex = 0;
      }
      testamonial.textContent = testimonials[currentLang][currentIndex];
      testamonial.style.opacity = "1";
    }, 1500);
  }, 4000);
});
