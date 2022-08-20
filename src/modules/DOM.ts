import { Weather } from "./Weather";

interface inputListenerInterface {
  (): void;
}

export const DOM = (() => {
  // module for manipulating the DOM
  return {
    dynamicInput,
    displayNow,
    showLoader,
    hideLoader
  };

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

    const weatherImg = document.querySelector(".now img");
    weatherImg.setAttribute("src", `../src/weatherIcons/${now.iconCode}.svg`);
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
})();
