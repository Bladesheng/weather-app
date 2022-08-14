import { Geocode } from "./Geocode";

export interface ITimePoint {
  data: {
    instant: {
      details: {
        // keys with ? are only in complete api
        air_pressure_at_sea_level: number;
        air_temperature: number;
        cloud_area_fraction: number;
        cloud_area_fraction_high?: number;
        cloud_area_fraction_low?: number;
        cloud_area_fraction_medium?: number;
        dew_point_temperature?: number;
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

export const MET = (() => {
  // module for interacting with MET API (https://api.met.no/)
  return {
    getLocationforecast,
    getSunrise,
    returnTimeseries
  };

  let _timeseries: ITimePoint[];

  async function getLocationforecast(coords: number[]) {
    try {
      const url = `https://api.met.no/weatherapi/locationforecast/2.0/compact?&lon=${coords[0]}&lat=${coords[1]}`;

      // user agent to comply with MET terms of service
      // doesn't actually work in browsers
      // const customHeaders = new Headers({
      //   "User-Agent": "bladesheng.github.io/weather-app/ keadr23@gmail.com"
      // });

      const request = new Request(url, {
        method: "GET",
        // headers: customHeaders,
        cache: "default" // return response from cache (if it's not expired)
      });

      const response = await fetch(request);
      console.log(response);

      const expireDate = response.headers.get("expires");
      console.log("Response expires on: " + expireDate);

      const responseData = await response.json();
      console.log(responseData);

      const updatedDate = responseData.properties.meta.updated_at;
      console.log("Last model update: " + updatedDate);

      // store all the time points in array
      _storeTimeseries(responseData.properties.timeseries);
      console.log(_timeseries);
    } catch (error) {
      console.log(error);
    }
  }

  // converts string times to Date objects and stores it
  function _storeTimeseries(timePointsArray: ITimePoint[]) {
    timePointsArray.forEach((timePoint: ITimePoint) => {
      timePoint.time = new Date(timePoint.time);
    });

    _timeseries = timePointsArray;
  }

  function returnTimeseries() {
    return _timeseries;
  }

  async function getSunrise(coords: number[]) {
    try {
      const dateObj = new Date();

      const year = dateObj.getUTCFullYear();
      const month = dateObj.getUTCMonth() + 1;
      const day = dateObj.getUTCDate();

      const offset = dateToOffset(dateObj);

      const url = `https://api.met.no/weatherapi/sunrise/2.0/.json?lat=${coords[1]}&lon=${coords[0]}&date=${year}-${month}-${day}&offset=${offset}`;
      console.log(url);

      const request = new Request(url, {
        method: "GET",
        cache: "default" // return response from cache (if it's not expired)
      });

      const response = await fetch(request);
      console.log(response);

      const expireDate = response.headers.get("expires");
      console.log("Response expires on: " + expireDate);

      const responseData = await response.json();
      console.log(responseData);

      // // store all the time points in array
      // _storeTimeseries(responseData.properties.timeseries);
      // console.log(_timeseries);
    } catch (error) {
      console.log(error);
    }
  }

  // converts Date object to offset formated as: "+02:00" or "-02:00"
  function dateToOffset(dateObj: Date) {
    const offsetMinutes = dateObj.getTimezoneOffset();
    let offsetHours = offsetMinutes / -60;

    const isNegative = offsetHours < 0; // if the timezone offset is something like: -02:00

    if (isNegative) {
      offsetHours = -offsetHours; // remove the minus sign
    }

    let paddedOffsetHours = String(offsetHours).padStart(2, "0");

    if (isNegative) {
      paddedOffsetHours = `-${paddedOffsetHours}`; // add back the minus sign
    } else {
      paddedOffsetHours = `+${paddedOffsetHours}`; // add plus sign
    }

    const paddedOffsetHoursFull = `${paddedOffsetHours}:00`;

    return paddedOffsetHoursFull;
  }
})();
