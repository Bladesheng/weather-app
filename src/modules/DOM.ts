import { Weather } from "./Weather";
import { Icons } from "./Icons";
import { Storage } from "./Storage";
import { search } from "../index";

interface inputListenerInterface {
  (): void;
}

export const DOM = (() => {
  // module for manipulating the DOM

  // Dynamic input listener that switches betwen static text
  // and input
  function dynamicInput(
    btnElement: Element,
    textElement: Element,
    inputElement: HTMLInputElement,
    processCallback: inputListenerInterface
  ) {
    btnElement.addEventListener("click", () => {
      function sendInput() {
        if (inputElement.value !== "") {
          // reset visibility
          btnElement.classList.remove("active");
          textElement.classList.remove("active");
          inputElement.classList.remove("active");

          // process the input
          processCallback();
          inputElement.value = "";
        } else {
          // reset visibility if input was empty
          btnElement.classList.remove("active");
          textElement.classList.remove("active");
          inputElement.classList.remove("active");
        }
      }

      // hides the text and button, shows the input and focuses it
      btnElement.classList.add("active");
      textElement.classList.add("active");
      inputElement.classList.add("active");
      inputElement.focus();

      // when you lose focus by clicking somewhere outside the input
      inputElement.onblur = () => {
        sendInput();
      };

      inputElement.onkeydown = (e) => {
        if (e.key === "Enter") {
          sendInput();
        } else if (e.key === "Escape") {
          inputElement.value = "";
          sendInput();
        }
      };
    });
  }

  function displayNow() {
    const now = Weather.returnNow();

    const airTemp = String(Math.round(now.airTemp));
    const minTemp = String(Math.round(now.minTemp));
    const maxTemp = String(Math.round(now.maxTemp));

    const currentTempText = document.querySelector(".now h1");
    currentTempText.textContent = `${airTemp}˚`;

    const minMaxText = document.querySelector(".now h2");
    minMaxText.textContent = `${maxTemp}˚/${minTemp}˚`;

    const weatherImg: HTMLImageElement = document.querySelector(".now img");
    const iconPath = Icons.get(now.iconCode);
    weatherImg.src = iconPath;
  }

  // shows and hides loader modal with animated icon
  function showLoader() {
    const loader: HTMLElement = document.querySelector(".loader");
    loader.style.display = "flex";
  }
  function hideLoader() {
    const loader: HTMLElement = document.querySelector(".loader");
    loader.style.display = "none";
  }

  // add listeners for sidebar
  function sidebarInit() {
    // receate all favorite cities
    const favoriteCities = Storage.returnFavorites();
    for (const city of favoriteCities) {
      _createCityBtn(city);
    }

    // show sidebar when button is clicked
    const hamburgerBtn = document.querySelector("button.burger");

    hamburgerBtn.addEventListener("click", () => {
      _showSidebar();
    });

    //hide sidebar when you click somewhere else
    const loader = document.querySelector(".loader");
    const header = document.querySelector("header");
    const main = document.querySelector("main");

    for (const element of [loader, header, main]) {
      element.addEventListener("click", (e) => {
        _hideSidebar();
      });
    }

    // swipe listener
    _sidebarSwipeListener();
  }

  // hide sidebar when you swipe left
  // show sidebar when you swipe right
  function _sidebarSwipeListener() {
    let touchStartX = 0;
    let touchEndX = 0;

    function checkDirection() {
      // swiped left
      if (touchEndX < touchStartX) {
        _hideSidebar();
      }

      // swiped right
      if (touchEndX > touchStartX) {
        _showSidebar();
      }
    }

    document.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      checkDirection();
    });
  }

  function _showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("hidden");
  }
  function _hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.add("hidden");
  }

  // remove everything from main (all day tabs)
  function wipeTabs() {
    const main = document.querySelector("main");
    main.textContent = "";
  }

  // create new tab for today
  // also inlucdes big "now" section unlike normal tab
  function createTodayTab() {
    const dateObj = new Date();

    const main = document.querySelector("main");

    const dayTab = document.createElement("div");
    dayTab.classList.add("dayTab", "today");

    const dateElement = _returnDate(dateObj);
    dayTab.appendChild(dateElement);
    // replace name of day with "today" (only for today)
    // "Monday 14.08." -> "Today 14.08."
    dateElement.textContent = `Dnes ${dateElement.textContent.split(" ")[1]}`;

    const nowElement = _returnNow();
    dayTab.appendChild(nowElement);

    const hourlyBreakdown = _returnHourlyBreakdown(dateObj.getDate(), true);
    dayTab.appendChild(hourlyBreakdown);

    main.appendChild(dayTab);
  }

  // create new tab for any given date
  function createDayTab(dateObj: Date) {
    const main = document.querySelector("main");

    const dayTab = document.createElement("div");
    dayTab.classList.add("dayTab");

    const dateElement = _returnDate(dateObj);
    dayTab.appendChild(dateElement);

    const hourlyBreakdown = _returnHourlyBreakdown(dateObj.getDate(), false);
    dayTab.appendChild(hourlyBreakdown);

    main.appendChild(dayTab);
  }

  // return new paragraph with given date and day name
  function _returnDate(dateObj: Date) {
    const dateElement = document.createElement("p");
    dateElement.classList.add("date");

    const daysCZ: string[] = [
      "Neděle",
      "Pondělí",
      "Úterý",
      "Středa",
      "Čtvrtek",
      "Pátek",
      "Sobota"
    ];

    const day = dateObj.getDay();
    const dayCZ = daysCZ[day];

    const date = dateObj.getDate();
    const datePadded = String(date).padStart(2, "0");

    const month = dateObj.getMonth() + 1;
    const monthPadded = String(month).padStart(2, "0");

    dateElement.textContent = `${dayCZ} ${datePadded}.${monthPadded}.`;

    return dateElement;
  }

  // return big "now" section with current hour weather info
  function _returnNow() {
    const nowElement = document.createElement("div");
    nowElement.classList.add("now");

    const nowData = Weather.returnNow();

    const airTemp = String(Math.round(nowData.airTemp));
    const minTemp = String(Math.round(nowData.minTemp));
    const maxTemp = String(Math.round(nowData.maxTemp));
    const iconCode = nowData.iconCode;

    const icon = _returnIcon(iconCode);
    nowElement.appendChild(icon);

    const currentTemp = document.createElement("h1");
    currentTemp.textContent = `${airTemp}˚`;
    nowElement.appendChild(currentTemp);

    const minMaxText = document.createElement("h2");
    minMaxText.textContent = `${maxTemp}˚/${minTemp}˚`;
    nowElement.appendChild(minMaxText);

    return nowElement;
  }

  // return new hourly breakdown
  // includes description, rows with weather data and sunrise/sunset row
  function _returnHourlyBreakdown(date: number, showSunriseSunset: boolean) {
    const hourlyBreakdown = document.createElement("div");
    hourlyBreakdown.classList.add("hourlyBreakdown");

    // header with descriptions for rows
    const descriptions = _returnDescriptions();
    hourlyBreakdown.appendChild(descriptions);

    // append row for every hour available and append sunrise/sunset row

    const fullData = Weather.returnForDate(date);

    // append new row for every timePoint
    for (const timePoint of fullData.weatherPoints) {
      const details = timePoint.data.instant.details;

      const rowData: IRowInput = {
        time: String(timePoint.time.getHours()),
        temperature: String(Math.round(details.air_temperature)),
        clouds: String(Math.round(details.cloud_area_fraction)),
        humidity: String(Math.round(details.relative_humidity)),
        pressure: String(Math.round(details.air_pressure_at_sea_level)),
        wind_speed: String(Math.round(details.wind_speed)),
        wind_from_direction: String(details.wind_from_direction)
      };

      // Only fine (1 hour apart) timepoints have "next_1_hours".
      // Rough timepoints (6 hours apart) have "next_6_hours" instead
      if (timePoint.data.hasOwnProperty("next_1_hours")) {
        rowData.iconCode = timePoint.data.next_1_hours.summary.symbol_code;
        rowData.precipitation = String(
          timePoint.data.next_1_hours.details.precipitation_amount
        );
      } else if (timePoint.data.hasOwnProperty("next_6_hours")) {
        rowData.iconCode = timePoint.data.next_6_hours.summary.symbol_code;
        rowData.precipitation = String(
          timePoint.data.next_6_hours.details.precipitation_amount
        );
      }

      const row = _returnRow(rowData);

      hourlyBreakdown.appendChild(row);
    }

    if (showSunriseSunset) {
      // convert date objects to "hh:mm" format
      const sunriseHours = String(
        fullData.sunrisePoint.sunrise.time.getHours()
      ).padStart(2, "0");
      const sunriseMinutes = String(
        fullData.sunrisePoint.sunrise.time.getMinutes()
      ).padStart(2, "0");
      const sunrise = `${sunriseHours}:${sunriseMinutes}`;

      const sunsetHours = String(
        fullData.sunrisePoint.sunset.time.getHours()
      ).padStart(2, "0");
      const sunsetMinutes = String(
        fullData.sunrisePoint.sunset.time.getMinutes()
      ).padStart(2, "0");
      const sunset = `${sunsetHours}:${sunsetMinutes}`;

      const sunriseSunsetTimes = [sunrise, sunset];

      const sunriseSunsetRow = _returnSunriseSunset(sunriseSunsetTimes);
      hourlyBreakdown.appendChild(sunriseSunsetRow);
    }

    return hourlyBreakdown;
  }

  interface IRowInput {
    time: string;
    iconCode?: string;
    temperature: string;
    precipitation?: string;
    clouds: string;
    humidity: string;
    pressure: string;
    wind_speed: string;
    wind_from_direction: string;
  }

  // return new header row with descriptions for rows with weather data
  function _returnDescriptions() {
    const descriptionsElement = document.createElement("div");
    descriptionsElement.classList.add("row", "descriptions");

    const descriptions: any = {
      time: "Čas",
      temperature: "Teplota ˚C",
      precipitation: "Srážky mm",
      clouds: "Oblačnost %",
      humidity: "Vlhkost %",
      pressure: "Tlak hPa",
      wind: "Vítr m/s"
    };

    for (const key of Object.keys(descriptions)) {
      const span = document.createElement("span");
      span.classList.add(key);
      span.textContent = descriptions[key];

      descriptionsElement.appendChild(span);
    }

    return descriptionsElement;
  }

  // create new row from given strings
  function _returnRow(rowData: IRowInput) {
    const row = document.createElement("div");
    row.classList.add("row", "data");

    // append simple string element to the row
    function appendData(className: string, text: string) {
      const element = document.createElement("span");
      element.classList.add(className);
      element.textContent = text;
      row.appendChild(element);
    }

    appendData("time", rowData.time);

    const icon = _returnIcon(rowData.iconCode);
    row.appendChild(icon);

    appendData("temperature", `${rowData.temperature}˚`);

    const precipitation = rowData.precipitation;
    let precipitationText: string;
    if (precipitation === "0") {
      precipitationText = " "; // don't show 0s
    } else {
      precipitationText = precipitation;
    }
    appendData("precipitation", precipitationText);

    appendData("clouds", rowData.clouds);

    appendData("humidity", rowData.humidity);

    appendData("pressure", rowData.pressure);

    const wind = document.createElement("span");
    wind.classList.add("wind");
    row.appendChild(wind);

    const windSpeed = document.createElement("span");
    windSpeed.classList.add("windSpeed");
    windSpeed.textContent = rowData.wind_speed;
    wind.appendChild(windSpeed);

    const windFrom = document.createElement("img");
    windFrom.classList.add("windFrom");
    windFrom.src = "assets/arrow.svg";
    windFrom.style.transform = `rotate(${rowData.wind_from_direction}deg)`;
    wind.appendChild(windFrom);

    return row;
  }

  // return new row with sunrise and sunset descriptions, icons and times
  function _returnSunriseSunset(sunriseSunsetTimes: string[]) {
    const row = document.createElement("div");
    row.classList.add("row", "sun");

    sunriseSunsetTimes.forEach((time, index) => {
      const container = document.createElement("div");
      container.classList.add("sunriseSunset");
      row.appendChild(container);

      const description = document.createElement("p");
      container.appendChild(description);

      const icon = document.createElement("img");
      container.appendChild(icon);

      const timeElement = document.createElement("span");
      container.appendChild(timeElement);
      timeElement.textContent = time;

      if (index === 0) {
        description.textContent = "Východ";
        icon.src = "assets/sunrise.svg";
      } else {
        description.textContent = "Západ";
        icon.src = "assets/sunset.svg";
      }
    });

    return row;
  }

  // return new icon element for given icon code
  function _returnIcon(iconCode: string) {
    const img = document.createElement("img");

    const iconPath = Icons.get(iconCode);
    img.src = iconPath;

    return img;
  }

  // favorite (star) button
  function favoriteListener() {
    const favoriteBtn = document.querySelector("button.favorite");
    favoriteBtn.addEventListener("click", () => {
      const city = document.querySelector("h1.city").textContent;

      if (favoriteBtn.classList.contains("on")) {
        favoriteOff();
        _removeCityBtn(city);
        Storage.removeFavoriteCity(city);
      } else {
        favoriteOn();
        _createCityBtn(city);
        Storage.addFavoriteCity(city);
      }
    });
  }

  // toggle favorite button (star) visual state
  function favoriteOn() {
    const favoriteBtn: HTMLImageElement =
      document.querySelector("img.favorite");

    favoriteBtn.src = "./assets/star.svg";
    favoriteBtn.parentElement.classList.add("on");
  }
  function favoriteOff() {
    const favoriteBtn: HTMLImageElement =
      document.querySelector("img.favorite");

    favoriteBtn.src = "./assets/star-outline.svg";
    favoriteBtn.parentElement.classList.remove("on");
  }

  function _createCityBtn(cityName: string) {
    const favorites = document.querySelector(".favorites");

    const cityBtn = document.createElement("button");
    cityBtn.textContent = cityName;
    // replace spaces with dashes because html doesn't like spaces
    cityBtn.dataset.city = cityName.replace(/\s/g, "-");
    cityBtn.addEventListener("click", () => {
      _hideSidebar();
      search(cityName); // trigger new search
    });

    favorites.appendChild(cityBtn);
  }
  function _removeCityBtn(cityName: string) {
    const cityBtn = document.querySelector(
      `[data-city=${cityName.replace(/\s/g, "-")}]`
    );
    cityBtn.remove();
  }

  // creates new css rule to hide column
  function _hideColumn(
    columnName: "clouds" | "humidity" | "pressure" | "wind"
  ) {
    document.styleSheets[1].insertRule(
      `.${columnName} { display: none !important; }`
    );
  }
  // removes previously created rule
  function _restoreColumn(
    columnName: "clouds" | "humidity" | "pressure" | "wind"
  ) {
    const styleSheet = document.styleSheets[1];
    const rules = styleSheet.cssRules;

    // Custom loop incrementing because we are gonna loop over all
    // rules and we need their indexes. Sadly CSSRuleList doesn't
    // have any usual array methods
    let ruleIndex = 0;

    for (const rule of rules) {
      const ruleText = rule.cssText;

      // if the rule matches the unwanted rule, remove it and return
      if (ruleText === `.${columnName} { display: none !important; }`) {
        styleSheet.deleteRule(ruleIndex);
        return;
      }

      ruleIndex++;
    }
  }

  return {
    dynamicInput,
    displayNow,
    showLoader,
    hideLoader,
    sidebarInit,
    wipeTabs,
    createTodayTab,
    createDayTab,
    favoriteOn,
    favoriteOff,
    favoriteListener
  };
})();
