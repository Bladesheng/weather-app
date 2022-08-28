# weather-app

Website for displaying weather data from MET.no API.

By default, time, weather icon, temperature and precipitation ammount are shown. You can also show/hide columns with some extra data (pressure, wind, cloudiness and humidity).
You can search for a city and save it to favorites for quick acces in sidebar.
Favorite cities and shown/hidden columns preferences are saved to local storage.

Searching for a city sends request to Nominatim API, which returns it's coordinates.
Coordinates are sent to Open-Elevation API which returns the citie's altitude.
Last but not least, 2 requests are sent to MET.no API with coordinates (and optional altitude for a more accurate results). One request returns roughly 80 time points with predicted weather, icon data and much more. The other request returns sunset and sunrise times for next the 10 days (and also a lot more sun + moon data).
When all requests are completed, all the data is rendered on the website.

I had to implement custom caching, because some API responses don't have "expires" property, which means they are never automatically cached by the browser. Specifically geolocation API and elevation API. Since cities usually don't move arround too much, the cache time was set to 1 week. This was done to speed up repeated checking of weather for the same cities and also to reduce load on these free APIs.

The site was made as mobile first, because 99% of times, I check weather only on mobile. Desktop version is a bit ugly, but it works just as well.

The design was heavily inspired by the "Yr" mobile app and also by "ČHMÚ" mobile app.

Check it out here: https://bladesheng.github.io/weather-app/

Built as a part of The Odin Project course: https://www.theodinproject.com/
