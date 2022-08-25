export const Storage = (() => {
  let lastCity: string;
  let _favoriteCities: string[];

  // save everything to local storage
  function _save() {
    localStorage.setItem("lastCity", JSON.stringify(lastCity));
    localStorage.setItem("favoriteCities", JSON.stringify(_favoriteCities));
  }

  // retrieve everything from local storage
  function retrieve() {
    // default city
    lastCity = "Český Dub";
    _favoriteCities = ["Český Dub"];

    // if there is something saved, retrieve it
    if (localStorage.getItem("lastCity") !== null) {
      lastCity = JSON.parse(localStorage.getItem("lastCity"));
    }
    if (localStorage.getItem("favoriteCities") !== null) {
      _favoriteCities = JSON.parse(localStorage.getItem("favoriteCities"));
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

  return {
    retrieve,
    addFavoriteCity,
    removeFavoriteCity,
    isFavorite,
    returnFavorites,

    set lastCity(value: string) {
      lastCity = value;
      _save();
    },
    get lastCity() {
      return lastCity;
    }
  };
})();
