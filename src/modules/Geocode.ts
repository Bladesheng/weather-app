export class Geocode {
  static async getCoords(city: string) {
    try {
      const cityFixed = city.replace(/ /g, "+"); // replace spaces with +
      const format = "geocodejson"; // output format
      const limit = "1"; // maximum number of returned results
      const email = "keadr23@gmail.com"; // identification

      const url = `https://nominatim.openstreetmap.org/search?city=${cityFixed}&format=${format}&limit=${limit}&email=${email}`;

      // user agent to identify this app
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
      console.log(url);

      //response.headers.set("expires", "xd");
      const expireDate = response.headers.get("expires");
      console.log("Request expires on: " + expireDate);

      const responseData = await response.json();
      console.log(responseData);

      const point = responseData.features[0];
      const coords: number[] = point.geometry.coordinates;

      const coordsRounded: number[] = [];
      coords.forEach((coord, index) => {
        coordsRounded[index] = parseFloat(coord.toFixed(4));
      });

      return coordsRounded;
    } catch (error) {
      console.log(error);
    }
  }
}
