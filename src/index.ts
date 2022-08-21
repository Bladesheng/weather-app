import "./style.scss";
import { MET } from "./modules/MET";
import { DOM } from "./modules/DOM";
import { Weather } from "./modules/Weather";
import { Geocode } from "./modules/Geocode";

async function search(searchValue: string) {
  DOM.showLoader();

  DOM.wipeTabs();

  cityHeading.textContent = searchValue;

  const coords = await Geocode.getCoords(searchValue);

  await Promise.all([MET.getLocationforecast(coords), MET.getSunrise(coords)]);

  Weather.init();

  const nowWeather = Weather.returnNow();
  console.log("Weather now is: ", nowWeather);

  const todaysWeather = Weather.returnForDate(new Date().getDate());
  console.log(
    "Today's weather: ",
    todaysWeather.weatherPoints,
    todaysWeather.sunrisePoint.sunrise,
    todaysWeather.sunrisePoint.sunset
  );

  const tomorowWeatherCompact = Weather.returnForDateCompact(
    new Date().getDate() + 1
  );
  console.log(
    "Tomorow's compact weather: ",
    tomorowWeatherCompact.weatherPoints,
    tomorowWeatherCompact.sunrisePoint.sunrise,
    tomorowWeatherCompact.sunrisePoint.sunset
  );

  DOM.createTodayTab();

  //DOM.createDayTab();
  // not compact for tommorow
  // compact for all other days

  DOM.hideLoader();
}

const searchBtn = document.querySelector("button.search");
const cityHeading = document.querySelector("h1.city");
const searchInput: HTMLInputElement = document.querySelector("input.search");

DOM.dynamicInput(searchBtn, cityHeading, searchInput, async () => {
  const searchValue = searchInput.value;
  search(searchValue);
});

DOM.sidebarInit();

// default city when page is loaded
search("Český Dub");
