export class MET {
  static async get() {
    try {
      const url =
        "https://api.met.no/weatherapi/locationforecast/2.0/complete?altitude=325&lat=50.661&lon=14.996";

      // user agent to comply with MET terms of service
      const customHeaders = new Headers({
        "User-Agent": "bladesheng.github.io/weather-app/ keadr23@gmail.com"
      });

      const response = await fetch(url, {
        method: "GET",
        headers: customHeaders
      });

      const responseData = await response.json();

      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  }
}
