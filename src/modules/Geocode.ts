import { Cache } from "./Cache";

export const Geocode = (() => {
  // module for interacting with Nominatim API (https://nominatim.org/)

  // returns [Longitude, Latitude, Altitude]
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

    const altitude = await _getAltitude(coordsRounded);
    coordsRounded.push(altitude);

    console.log("Coords:", coordsRounded);
    return coordsRounded;
  }

  async function _getResponse(city: string) {
    try {
      const cityFixed = city.replace(/ /g, "+"); // replace spaces with +
      const format = "geocodejson"; // output format
      const limit = "1"; // maximum number of returned results
      const email = "keadr23@gmail.com"; // identification

      const url = `https://nominatim.openstreetmap.org/search?city=${cityFixed}&format=${format}&limit=${limit}&email=${email}`;

      const response = await Cache.getResponse(url);

      console.log(response);
      console.log(url);

      const expireDate = response.headers.get("expires");
      console.log("Response expires on: " + expireDate);

      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async function _getAltitude(coords: number[]) {
    try {
      // uses Open-Elevation API (https://open-elevation.com/)

      const url = `https://api.open-elevation.com/api/v1/lookup?locations=${coords[1]},${coords[0]}`;

      const response = await Cache.getResponse(url);
      console.log(response);

      const responseData = await response.json();
      console.log(responseData);

      const elevation: number = responseData.results[0].elevation;
      return elevation;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    getCoords
  };
})();
