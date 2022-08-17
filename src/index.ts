import "./style.scss";
import { MET } from "./modules/MET";
import { DOM } from "./modules/DOM";
import { Weather } from "./modules/Weather";
import { Geocode } from "./modules/Geocode";

const searchBtn = document.querySelector("button.search");
const cityHeading = document.querySelector("h1.city");
const searchInput: HTMLInputElement = document.querySelector("input.search");

DOM.dynamicInput(searchBtn, cityHeading, searchInput, async () => {
  const searchValue = searchInput.value;
  cityHeading.textContent = searchValue;

  const coords = await Geocode.getCoords(searchValue);

  await Promise.all([MET.getLocationforecast(coords), MET.getSunrise(coords)]);

  Weather.init();
  Weather.logCurrentTemp();

  Weather.today();
});
