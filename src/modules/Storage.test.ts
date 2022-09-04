import { Storage } from "./Storage";

beforeEach(() => {
  class LocalStorageMock {
    store: any;
    length: any;
    key: any;

    constructor() {
      this.store = {};
    }

    clear() {
      this.store = {};
    }

    getItem(key) {
      return this.store[key] || null;
    }

    setItem(key, value) {
      this.store[key] = String(value);
    }

    removeItem(key) {
      delete this.store[key];
    }
  }
  global.localStorage = new LocalStorageMock();
});

test("Set and get last city", () => {
  Storage.lastCity = "Some City";
  expect(Storage.lastCity).toBe("Some City");
});

test("Set and get controls", () => {
  Storage.retrieve();
  Storage.setControls("wind", true);
  expect(Storage.returnControlsValue("wind")).toBe(true);
});

test("Add and retrieve favorite city", () => {
  Storage.addFavoriteCity("Some City");

  expect(Storage.isFavorite("Some City")).toBe(true);
});

test("Add and remove favorite city", () => {
  Storage.addFavoriteCity("Some City");
  Storage.removeFavoriteCity("Some City");

  expect(Storage.isFavorite("Some City")).toBe(false);
});

test("Setup and retrieve default values", () => {
  Storage.retrieve();

  expect(Storage.lastCity).toBe("Český Dub");

  expect(Storage.returnFavorites()).toEqual(["Český Dub"]);

  expect(Storage.returnControlsValue("clouds")).toBe(false);
  expect(Storage.returnControlsValue("humidity")).toBe(false);
  expect(Storage.returnControlsValue("pressure")).toBe(false);
  expect(Storage.returnControlsValue("wind")).toBe(true);
});
