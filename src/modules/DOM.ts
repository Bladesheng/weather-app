import { Weather } from "./Weather";
import { Icons } from "./Icons";

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
    // show sidebar when button is clicked
    const hamburgerBtn = document.querySelector("button.burger");
    const sidebar = document.querySelector(".sidebar");

    hamburgerBtn.addEventListener("click", () => {
      sidebar.classList.remove("hidden");
    });

    //hide sidebar when you click somewhere else
    const loader = document.querySelector(".loader");
    const header = document.querySelector("header");
    const main = document.querySelector("main");

    for (const element of [loader, header, main]) {
      element.addEventListener("click", (e) => {
        sidebar.classList.add("hidden");
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
      const sidebar = document.querySelector(".sidebar");

      // swiped left
      if (touchEndX < touchStartX) {
        sidebar.classList.add("hidden");
      }

      // swiped right
      if (touchEndX > touchStartX) {
        sidebar.classList.remove("hidden");
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

  return {
    dynamicInput,
    displayNow,
    showLoader,
    hideLoader,
    sidebarInit
  };
})();
