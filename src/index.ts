import "./style.scss";
import { MET } from "./modules/MET";
import { DOM } from "./modules/DOM";
import { Weather } from "./modules/Weather";
import { Geocode } from "./modules/Geocode";
import { Storage } from "./modules/Storage";

export async function search(searchValue: string) {
  DOM.showLoader();

  DOM.wipeTabs();

  cityHeading.textContent = searchValue;

  // turn on / off favorite button if city is favorite
  if (Storage.isFavorite(searchValue)) {
    DOM.favoriteOn();
  } else {
    DOM.favoriteOff();
  }

  const coords = await Geocode.getCoords(searchValue);

  await Promise.all([MET.getLocationforecast(coords), MET.getSunrise(coords)]);

  Weather.init();

  DOM.createTodayTab();

  // show next 9 days
  for (let daysPast = 1; daysPast < 10; daysPast++) {
    const date = new Date();
    date.setDate(date.getDate() + daysPast);
    DOM.createDayTab(date);
  }

  // cache searched city
  Storage.lastCity = searchValue;

  DOM.hideLoader();
}

const searchBtn = document.querySelector("button.search");
const cityHeading = document.querySelector("h1.city");
const searchInput: HTMLInputElement = document.querySelector("input.search");

DOM.dynamicInput(searchBtn, cityHeading, searchInput, async () => {
  const searchValue = searchInput.value;
  search(searchValue);
});

Storage.retrieve();

DOM.sidebarInit();

search(Storage.lastCity);

DOM.favoriteListener();
