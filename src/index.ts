import "./style.scss";
import { MET } from "./modules/MET";
import { DOM } from "./modules/DOM";
import { Weather } from "./modules/Weather";

const searchInput: HTMLInputElement = document.querySelector("input.search");
const searchBtn = document.querySelector("button.search");

searchBtn.addEventListener("click", async () => {
  const inputValue = searchInput.value;
  await MET.get(inputValue);
  Weather.init();
  Weather.logCurrentTemp();
});
