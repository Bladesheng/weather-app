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

  DOM.createTodayTab();

  // show next 9 days
  for (let daysPast = 1; daysPast < 10; daysPast++) {
    const date = new Date();
    date.setDate(date.getDate() + daysPast);
    DOM.createDayTab(date);
  }

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
