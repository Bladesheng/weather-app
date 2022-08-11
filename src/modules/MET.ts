export class MET {
  static async get() {
    try {
      const url =
        "https://api.met.no/weatherapi/locationforecast/2.0/complete?altitude=325&lat=50.661&lon=14.996";

      // user agent to comply with MET terms of service
      const customHeaders = new Headers({
        "User-Agent": "bladesheng.github.io/weather-app/ keadr23@gmail.com"
      });

      const request = new Request(url, {
        method: "GET",
        headers: customHeaders,
        cache: "default" // look into cache first if the data hasn't expired yet
      });

      const response = await fetch(request);
      console.log(response);

      const expireDate = response.headers.get("expires");
      console.log(expireDate);

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  }
}
