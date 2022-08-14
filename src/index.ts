import "./style.scss";
import { MET } from "./modules/MET";
import { DOM } from "./modules/DOM";
import { Weather } from "./modules/Weather";
import { Geocode } from "./modules/Geocode";

const searchInput: HTMLInputElement = document.querySelector("input.search");
const searchBtn = document.querySelector("button.search");

searchBtn.addEventListener("click", async () => {
  const inputValue = searchInput.value;
  const coords = await Geocode.getCoords(inputValue);

  await Promise.all([MET.getLocationforecast(coords), MET.getSunrise(coords)]);

  Weather.init();
  Weather.logCurrentTemp();
});
