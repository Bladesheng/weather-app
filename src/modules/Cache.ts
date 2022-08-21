export const Cache = (() => {
  // module for xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  async function getResponse(url: string) {
    const isInvalid = await _isInvalid(url);

    // either force fetch new request and cache it or force use of cache, nothing else
    function createRequest(cacheType: "reload" | "force-cache") {
      return new Request(url, {
        method: "GET",
        cache: cacheType
      });
    }

    let response: Response;

    if (isInvalid) {
      const request = createRequest("reload"); // request new response and cache it
      response = await fetch(request);

      // manually give the response expire time, cache it and return the the new response
      response = await _saveWithExpire(url, response);
    } else if (!isInvalid) {
      const request = createRequest("force-cache"); // return response from cache
      response = await fetch(request);
    }

    return response;
  }

  // returns false if response for given url is expired or nothing is not cached at all
  // if the response is cached and expire date has not happened yet, return true
  async function _isInvalid(url: string) {
    const cacheName = "apiResponses";
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

        const isInvalid = true;
        return isInvalid;
      }

      // If there is cached response, continue.

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
      const isInvalid = expiresTimer < 0;

      return isInvalid;
    }

    const isInvalid = await checkCacheExpired(url);
    console.log("Is response invalid?:", isInvalid);

    return isInvalid;
  }

  // Copy the initial response and give it custom expire date
  // because some APIs don't do that by default,
  // as if the coordinates and altitude of cities are gonna change lol.
  // Returns the newly created response.
  async function _saveWithExpire(url: string, responseOriginal: Response) {
    const cacheName = "apiResponses";
    const cache = await caches.open(cacheName);

    const currentDate = new Date();
    const expireTime = 10080; // expire time in minutes
    const expireDate = new Date(currentDate.getTime() + expireTime * 60000);

    const newHeaders = new Headers(responseOriginal.headers);
    newHeaders.set("expires", expireDate.toUTCString()); // use standard HTTP date format
    const newResponse = new Response(responseOriginal.body, {
      headers: newHeaders
    });
    await cache.put(url, newResponse.clone()); // cache the newly created response

    return newResponse;
  }

  return {
    getResponse
  };
})();
