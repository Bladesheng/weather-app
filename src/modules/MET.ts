import { Geocode } from "./Geocode";

interface ITimePoint {
  data: {
    instant: {
      details: {
        air_pressure_at_sea_level: number;
        air_temperature: number;
        cloud_area_fraction: number;
        cloud_area_fraction_high: number;
        cloud_area_fraction_low: number;
        cloud_area_fraction_medium: number;
        dew_point_temperature: number;
        fog_area_fraction?: number;
        relative_humidity: number;
        ultraviolet_index_clear_sky?: number;
        wind_from_direction: number;
        wind_speed: number;
      };
    };
  };
  time: string | Date;
}

export class MET {
  // class for interacting with MET API (https://api.met.no/)

  static timeseries: ITimePoint[];

  static async get(city: string) {
    try {
      const coords = await Geocode.getCoords(city);
      console.log(coords);

      const url = `https://api.met.no/weatherapi/locationforecast/2.0/complete?&lon=${coords[0]}&lat=${coords[1]}`;

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
      console.log("Request expires on: " + expireDate);

      const responseData = await response.json();
      console.log(responseData);

      const updatedDate = responseData.properties.meta.updated_at;
      console.log("Last model update: " + updatedDate);

      // store all the time points in array
      MET.storeTimeseries(responseData.properties.timeseries);
      console.log(MET.timeseries);
    } catch (error) {
      console.log(error);
    }
  }

  // converts string times to Date objects and stores it
  static storeTimeseries(timePointsArray: ITimePoint[]) {
    timePointsArray.forEach((timePoint: ITimePoint) => {
      timePoint.time = new Date(timePoint.time);
    });

    MET.timeseries = timePointsArray;
  }

  static logCurrentTemp() {
    const currentTimePoint = MET.timeseries[0];
    const details = currentTimePoint.data.instant.details;
    const airTemp = details.air_temperature;

    console.log(`Current temperature is ${airTemp} °C`);
  }
}
