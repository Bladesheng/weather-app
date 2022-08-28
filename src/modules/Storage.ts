export const Storage = (() => {
  let lastCity: string;
  let _favoriteCities: string[];
  let _controls: {
    // true == checked, false == unchecked
    clouds: boolean;
    humidity: boolean;
    pressure: boolean;
    wind: boolean;
  };

  // save everything to local storage
  function _save() {
    localStorage.setItem("lastCity", JSON.stringify(lastCity));
    localStorage.setItem("favoriteCities", JSON.stringify(_favoriteCities));
    localStorage.setItem("columnControls", JSON.stringify(_controls));
  }

  // retrieve everything from local storage
  function retrieve() {
    // default city
    lastCity = "Český Dub";
    _favoriteCities = ["Český Dub"];

    // default colums options
    _controls = {
      clouds: false,
      humidity: false,
      pressure: false,
      wind: true
    };

    // if there is something saved
    // retrieve it instead of using the default value
    if (localStorage.getItem("lastCity") !== null) {
      lastCity = JSON.parse(localStorage.getItem("lastCity"));
    }
    if (localStorage.getItem("favoriteCities") !== null) {
      _favoriteCities = JSON.parse(localStorage.getItem("favoriteCities"));
    }
    if (localStorage.getItem("columnControls") !== null) {
      _controls = JSON.parse(localStorage.getItem("columnControls"));
    }
  }

  function addFavoriteCity(city: string) {
    _favoriteCities.push(city);
    _save();
  }

  function removeFavoriteCity(city: string) {
    const newFavoriteCities = _favoriteCities.filter((element) => {
      return element !== city;
    });

    _favoriteCities = newFavoriteCities;

    _save();
  }

  // returns true if city is in favorites
  function isFavorite(city: string) {
    return _favoriteCities.includes(city);
  }

  function returnFavorites() {
    return _favoriteCities;
  }

  function returnControlsValue(
    key: "clouds" | "humidity" | "pressure" | "wind"
  ) {
    return _controls[key];
  }

  // change value of column control option and save it
  function setControls(
    key: "clouds" | "humidity" | "pressure" | "wind",
    value: boolean
  ) {
    _controls[key] = value;
    _save();
  }

  return {
    retrieve,
    addFavoriteCity,
    removeFavoriteCity,
    isFavorite,
    returnFavorites,
    returnControlsValue,
    setControls,

    set lastCity(value: string) {
      lastCity = value;
      _save();
    },
    get lastCity() {
      return lastCity;
    }
  };
})();
