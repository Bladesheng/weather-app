export const Geocode = (() => {
  // module for interacting with Nominatim API (https://nominatim.org/)
  return {
    getCoords
  };

  async function getCoords(city: string) {
    const response = await _getResponse(city);

    const responseData = await response.json();
    console.log(responseData);

    const point = responseData.features[0];
    const coordsLong: number[] = point.geometry.coordinates;

    const coordsRounded: number[] = [];
    coordsLong.forEach((coord, index) => {
      coordsRounded[index] = parseFloat(coord.toFixed(4)); // MET api allows only 4 decimal numbers
    });

    return coordsRounded;
  }

  async function _getResponse(city: string) {
    try {
      const cityFixed = city.replace(/ /g, "+"); // replace spaces with +
      const format = "geocodejson"; // output format
      const limit = "1"; // maximum number of returned results
      const email = "keadr23@gmail.com"; // identification

      const url = `https://nominatim.openstreetmap.org/search?city=${cityFixed}&format=${format}&limit=${limit}&email=${email}`;

      // user agent to identify this app
      // doesn't actually work in browsers
      // const customHeaders = new Headers({
      //   "User-Agent": "bladesheng.github.io/weather-app/ keadr23@gmail.com"
      // });

      const cacheName = "responsesExpiry";
      const cache = await caches.open(cacheName);
      const requests = await cache.keys();
      const urls = requests.map((request) => {
        return request.url;
      });
      console.log("Cached urls:", urls);

      // manually check if there is cached response for given url
      // and if it is expired
      async function checkCacheExpired(url: string) {
        const cachedResponse = await cache.match(url);
        console.log("Cached response: ", cachedResponse);

        // if no response for given url is cached
        if (cachedResponse === undefined) {
          console.log("There is no cached response");

          // the procedure is the same whether the cached response is expired
          // or if it is missing
          const isExpired = true;
          return isExpired;
        }

        // logs all info from header
        for (const pair of cachedResponse.headers.entries()) {
          console.log(pair[0], ":", pair[1]);
        }

        const hasExpire = cachedResponse.headers.has("expires");
        console.log("Does cached response have expire time?: ", hasExpire);

        const expireDate = cachedResponse.headers.get("expires");
        const expireDateObj = new Date(expireDate);
        console.log("Response expires on: " + expireDateObj);

        // time until the response expires
        const expiresTimer = expireDateObj.getTime() - new Date().getTime();
        // if the timer has already hit zero (or lower), response is expired
        const isExpired = expiresTimer < 0;

        return isExpired;
      }

      const isExpired = await checkCacheExpired(url);
      console.log("Is response expired?:", isExpired);

      function createRequest(cacheType: "reload" | "force-cache") {
        return new Request(url, {
          method: "GET",
          //headers: customHeaders,
          cache: cacheType
        });
      }

      let response: Response;

      if (isExpired) {
        const request = createRequest("reload"); // request new response and cache it

        response = await fetch(request);

        // copy the initial response and give it custom expire date
        // because sadly, the API doesn't do that by default,
        // as if the coordinates of cities are gonna change lol
        const currentDate = new Date();
        const expireTime = 30; // expire time in minutes
        const expire = new Date(currentDate.getTime() + expireTime * 60000);
        const newHeaders = new Headers(response.headers);
        newHeaders.set("expires", expire.toUTCString()); // use HTTP date format
        response = new Response(response.body, {
          headers: newHeaders
        });
        await cache.put(url, response.clone()); // cache the newly create response
      } else if (!isExpired) {
        const request = createRequest("force-cache"); // return response from cache

        response = await fetch(request);
      }

      console.log(response);
      console.log(url);

      const expireDate = response.headers.get("expires");
      console.log("Response expires on: " + expireDate);

      return response;
    } catch (error) {
      console.log(error);
    }
  }
})();
