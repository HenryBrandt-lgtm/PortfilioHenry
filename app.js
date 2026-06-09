window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

// =======väder======
const footer = document.querySelector(".weather-stuff");
const apiKey = "9d762ae83312002cce1bc2df0ac39815";
const city = "Stockholm";
async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error("Could not fetch weather data");
  }

  return await response.json();
}
function displayWeatherInfo(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;

  footer.textContent = "";
  footer.style.display = "flex";

  const cityDisplay = document.createElement("p");
  const tempDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  cityDisplay.textContent = city;
  tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
  weatherEmoji.textContent = getWeatherEmoji(id);

  cityDisplay.classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  weatherEmoji.classList.add("weatherEmoji");

  footer.appendChild(cityDisplay);
  footer.appendChild(tempDisplay);
  footer.appendChild(weatherEmoji);
}
function getWeatherEmoji(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      return "⛈️";
    case weatherId >= 300 && weatherId < 400:
      return "🌦️";
    case weatherId >= 500 && weatherId < 600:
      return "🌧️";
    case weatherId >= 600 && weatherId < 700:
      return "🌨️";
    case weatherId >= 700 && weatherId < 800:
      return "🌫️";
    case weatherId === 800:
      return "☀️";
    case weatherId >= 801 && weatherId < 810:
      return "☁️";
    default:
      return "⁉️";
  }
}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  footer.textContent = "";
  footer.style.display = "flex";
  footer.appendChild(errorDisplay);
}
async function initWeather() {
  try {
    const weatherData = await getWeatherData(city);
    displayWeatherInfo(weatherData);
  } catch (error) {
    console.error(error);
    displayError("Kunde inte hämta väderdata.");
  }
}

initWeather();

// =====gif=====

const gif = document.querySelector(".catgif");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const progress = scrollY / maxScroll; // 0 till 1

  const centerX = (window.innerWidth - gif.offsetWidth) / 2;
  const leftX = 40;
  const rightX = window.innerWidth - 40 - gif.offsetWidth;

  // Sinusvåg för x-rörelse
  const x =
    centerX +
    Math.sin(progress * Math.PI * 2 + Math.PI / 2) * (centerX - leftX);

  // Linjär rörelse nedåt för y
  const y = 80 + progress * 620;

  gif.style.left = `${x}px`;
  gif.style.top = `${y}px`;
});

//======visa och dölja kunskapsinfo======

document.querySelectorAll(".areas-list a").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.getElementById(this.getAttribute("data-target"));
    const isVisible = target.style.display === "block";

    // dölj alla först
    document.querySelectorAll(".info-box").forEach(function (box) {
      box.style.display = "none";
    });
    //nollställ pilar
    document.querySelectorAll(".arrow-icon").forEach(function (arrow) {
      arrow.classList.remove("flipped");
    });

    // visa bara om den inte redan var synlig
    if (!isVisible) {
      target.style.display = "block";

      //ger pilen ny class
      const arrow = this.querySelector(".arrow-icon");
      arrow.classList.toggle("flipped");
      console.log("före:", arrow.classList);
    }
  });
});
