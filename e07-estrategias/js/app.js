if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/sw.js");
}

const API_KEY = "0ba4a5a1b1522f77eba7e3080302ae87";
const CITY_NAME = "Bilbao";
const btnsLoad = document.querySelectorAll(".btn-load-data");
const weatherWrapper = document.querySelector("#weather-wrapper");

const generateHTML = (weatherObject) => {
  weatherWrapper
    ? (weatherWrapper.innerHTML = `
      <ul>
        <li>Ciudad: ${weatherObject.name}</li>
        <li>Temperatura: ${weatherObject.main.temp - 273.15} Cº</li>
        <li>Presión: ${weatherObject.main.pressure}</li>
        <li>Descripción: ${weatherObject.weather[0].description}</li>
        <li>Última actualización: ${weatherObject.date}</li>
      </ul>
    `)
    : null;
};

const init = () => {
  getWeather().then((weather) => {
    generateHTML(weather);
  });
};

const getWeather = (city = CITY_NAME) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  )
    .then((res) => res.json())
    .then((res) => {
      // res = { ...res, date: new Date() };
      return res;
    });
};

init();

btnsLoad.forEach((btn) => {
  btn.addEventListener("click", () => {
    const city = btn.getAttribute("data-city");
    getWeather(city).then((weather) => {
      generateHTML(weather);
    });
  });
});