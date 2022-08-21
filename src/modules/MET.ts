import { Geocode } from "./Geocode";

export interface ITimePointLocationforecast {
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
    next_1_hours: {
      summary: {
        symbol_code: string;
      };
    };
    next_6_hours: {
      details: {
        precipitation_amount: number;
      };
      summary: {
        symbol_code: string;
      };
    };
  };
  time: string | Date;
}

export interface ITimePointSunrise {
  date: string | Date;
  sunrise: {
    desc?: string;
    time: string | Date;
  };
  sunset: {
    desc?: string;
    time: string | Date;
  };
  high_moon?: object;
  low_moon?: object;
  moonphase?: object;
  moonposition?: object;
  moonrise?: object;
  moonset?: object;
  moonshadow?: object;
  solarmidnight?: object;
  solarnoon?: object;
}

export const MET = (() => {
  // module for interacting with MET API (https://api.met.no/)

  let _LocationforecastData: ITimePointLocationforecast[];
  let _SunriseData: ITimePointSunrise[];

  async function getLocationforecast(coords: number[]) {
    try {
      const url = `https://api.met.no/weatherapi/locationforecast/2.0/compact?&lon=${coords[0]}&lat=${coords[1]}&altitude=${coords[2]}`;

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

      const responseData = await response.json();

      const updatedDate = responseData.properties.meta.updated_at;
      console.log("Last model update: " + updatedDate);

      // store all the time points in array
      _StoreLocationforecast(responseData.properties.timeseries);
    } catch (error) {
      console.log(error);
    }
  }

  // converts string times to Date objects and stores it
  function _StoreLocationforecast(
    timePointsArray: ITimePointLocationforecast[]
  ) {
    for (const timePoint of timePointsArray) {
      timePoint.time = new Date(timePoint.time);
    }

    _LocationforecastData = timePointsArray;
  }

  function returnLocationforecast() {
    return _LocationforecastData;
  }

  function returnSunrise() {
    return _SunriseData;
  }

  async function getSunrise(coords: number[]) {
    try {
      const dateObj = new Date();

      const year = dateObj.getUTCFullYear();
      const month = dateObj.getUTCMonth() + 1;
      const monthPadded = String(month).padStart(2, "0");
      const day = dateObj.getUTCDate();

      const offset = _dateToOffset(dateObj);

      const days = 10; // number of days forward to include in response
      // Locationforecast returns data for next ~10 days, so same number is used here

      const url = `https://api.met.no/weatherapi/sunrise/2.0/.json?lat=${coords[1]}&lon=${coords[0]}&date=${year}-${monthPadded}-${day}&offset=${offset}&days=${days}`;

      const request = new Request(url, {
        method: "GET",
        cache: "default" // return response from cache (if it's not expired)
      });

      const response = await fetch(request);

      const responseData = await response.json();

      const timePointsArray = responseData.location.time;
      // store all the time points in array
      _StoreSunrise(timePointsArray.slice(0, days)); // exclude any extra days that are returned
    } catch (error) {
      console.log(error);
    }
  }

  // converts Date object to offset formated as: "+02:00" or "-02:00"
  function _dateToOffset(dateObj: Date) {
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

  // converts string times to Date objects and stores it
  function _StoreSunrise(timePointsArray: ITimePointSunrise[]) {
    for (const timePoint of timePointsArray) {
      timePoint.date = new Date(timePoint.date);

      timePoint.sunrise.time = new Date(timePoint.sunrise.time);

      timePoint.sunset.time = new Date(timePoint.sunset.time);
    }

    _SunriseData = timePointsArray;
  }

  return {
    getLocationforecast,
    getSunrise,
    returnLocationforecast,
    returnSunrise
  };
})();
