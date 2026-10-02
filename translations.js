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
    "skill-csharp":
      "C# mitt favoritspråk än så länge, det jag använt mest. Backend är den personliga favoriten",
    "skill-sql": `Använt under mina projekt för att skapa lokala databaser. 
      Van att skriva Querys.`,
    "skill-html":
      "Använt en hel del HTML i mina projekt, inte så spännande men det ska vara där.",
    "skill-css":
      "Frontend är inte mitt favoritområde men kan ändå använda CSS och tailwind.",
    "skill-js": "Roligt med JavaScript för att få en liveuppdaterad hemsida.",
    "skill-razorpages":
      "RazorPages är tillsammans med MVC favoriten när det kommer till ASP.Net.",
    "skill-mvc":
      "MVC är enkelt och trevligt att använda, favorit tillsammans med RazorPages.",
    "skill-azure": "Använt Azure mest hittills för att skapa databas.",
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
    "send-btn": "Skicka",
    "form-success": "Tack för ditt mejl! Jag återkommer snarast.",
    "form-error": "Något gick fel. Försök igen eller mejla mig direkt.",
    //resume sidan
    "home-btn": "Startsidan",
    "download-btn": "Ladda ner",
    "cv-pdf-href": "files/CV HenryBrandt.pdf",
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
    "skill-csharp":
      "C# is my favorite language so far, and the one I've used the most. Backend is my personal favorite.",
    "skill-sql":
      "Used in my projects to create local databases. Accustomed to writing queries.",
    "skill-html":
      "Used HTML quite a bit in my projects—not super exciting, but it needs to be there.",
    "skill-css":
      "Frontend isn't my favorite area, but I can still use CSS and Tailwind.",
    "skill-js":
      "JavaScript is fun for creating dynamic, live-updated websites.",
    "skill-razorpages":
      "Razor Pages, along with MVC, is my favorite when it comes to ASP.NET.",
    "skill-mvc":
      "MVC is simple and pleasant to use, a favorite alongside Razor Pages.",
    "skill-azure": "Mainly used Azure so far to set up databases.",
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
    "send-btn": "Send",
    "form-success":
      "Thanks for your email! I'll get back to you as soon as possible.",
    "form-error":
      "Something went wrong. Please try again or email me directly.",
    //resume sidan
    "home-btn": "Homepage",
    "download-btn": "Download",
    "cv-pdf-href": "files/CV HenryBrandt EN.pdf",
  },
};
// =======testamonials=====
const testimonials = {
  sv: [
    '"Självständig, noggrann, effektiv och intiativtagande" - Jill',
    '"Bästa chefen jag någonsin kommer ha" - Romee',
    '"Otroligt lösningsorienterad" - Åsa',
  ],
  en: [
    '"Independent, thorough, efficient, and proactive" - Jill',
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
  icon.src = currentLang === "sv" ? "Images/uk.svg" : "Images/sweden.svg";
  icon.alt = currentLang === "sv" ? "EN" : "SV";

  const resume = document.getElementById("resume-img");
  if (resume) {
    resume.src =
      currentLang === "sv"
        ? "Images/CVHenryBrandt.webp"
        : "Images/CVHenryBrandtEN.webp";
  }
  const downloadBtn = document.getElementById("download-btn");
  if (downloadBtn) {
    downloadBtn.href =
      currentLang === "sv"
        ? "files/CV HenryBrandt.pdf"
        : "files/CV Henry Brandt EN.pdf";
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
    }, 2000);
  }, 6000);
});

// ============kontaktformulär==========
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (!form) return; // finns inte på CV-sidan

  const statusBox = document.getElementById("form-status");
  const sendBtn = document.getElementById("send-email");

  function showStatus(key, type) {
    statusBox.setAttribute("data-i18n", key);
    statusBox.textContent = translations[currentLang][key];
    statusBox.className = `form-status ${type}`;
    statusBox.hidden = false;

    clearTimeout(hideTimer);
    hideTimer = setTimeout(function () {
      statusBox.hidden = true;
    }, 6000);
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    sendBtn.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (!response.ok) throw new Error("Request failed");

      showStatus("form-success", "success");
      form.reset();
    } catch (err) {
      showStatus("form-error", "error");
    } finally {
      sendBtn.disabled = false;
    }
  });
});
