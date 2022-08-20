import { MET, ITimePointLocationforecast, ITimePointSunrise } from "./MET";

export const Weather = (() => {
  // module for extracting weather numbers from timeseries array
  return {
    init,
    returnNow,
    returnForDate,
    returnForDateCompact
  };

  let _LocationforecastPoints: ITimePointLocationforecast[];
  let _SunrisePoints: ITimePointSunrise[];

  function init() {
    _LocationforecastPoints = MET.returnLocationforecast();
    _SunrisePoints = MET.returnSunrise();
  }

  function returnNow() {
    const currentTimePoint = _LocationforecastPoints[0];
    const details = currentTimePoint.data.instant.details;
    const airTemp = details.air_temperature;

    const minMaxTemp = _minMaxTemp(new Date().getDate());

    return { airTemp, minMaxTemp };
  }

  // returns weather points and sunrise point for given date
  function returnForDate(wantedDate: number) {
    const weatherPoints: ITimePointLocationforecast[] = [];
    let sunrisePoint: ITimePointSunrise;

    for (const timePoint of _LocationforecastPoints) {
      if (typeof timePoint.time === "object") {
        const date = timePoint.time.getDate();

        // add only wanted date's time points
        if (date === wantedDate) {
          weatherPoints.push(timePoint);
        }
      }
    }

    for (const timePoint of _SunrisePoints) {
      if (typeof timePoint.date === "object") {
        const date = timePoint.date.getDate();

        // add only wanted date's time point
        if (date === wantedDate) {
          sunrisePoint = timePoint;
        }
      }
    }

    return { weatherPoints, sunrisePoint };
  }

  // trimmed weather points + sunrise point for given date
  // (only 0h, 6h, 12h, 18h)
  function returnForDateCompact(wantedDate: number) {
    const fullData = returnForDate(wantedDate);
    const sunrisePoint = fullData.sunrisePoint;

    const weatherPoints = [];

    // divide the full data into 4 slices
    const slices = [
      fullData.weatherPoints.slice(0, 6),
      fullData.weatherPoints.slice(6, 12),
      fullData.weatherPoints.slice(12, 18),
      fullData.weatherPoints.slice(18)
    ];

    // custom time point interface for data extracted from each slice
    interface InewTimePoint {
      startTime: string | Date;
      endTime: string | Date;
      summary: string;
      precipitation: number;

      air_pressure_at_sea_level: number;
      air_temperature: number;
      cloud_area_fraction: number;
      relative_humidity: number;
      wind_from_direction: number;
      wind_speed: number;
    }

    for (const slice of slices) {
      // returns average from all 6 time points for given key
      function averageValue(key: string) {
        // for storing all values
        const summationArr: number[] = [];

        // store all values
        for (const timePoint of slice) {
          // @ts-expect-error
          const value: number = timePoint.data.instant.details[`${key}`];
          summationArr.push(value);
        }

        // get sum of the whole array
        const sum = summationArr.reduce((previousValue, currentValue) => {
          return previousValue + currentValue;
        });

        const avgValue = Math.round(sum / 6);

        return avgValue;
      }

      // create new custom time point for each slice
      const newTimePoint: InewTimePoint = {
        startTime: slice[0].time, // time of first point
        endTime: slice[5].time, // time of last point
        summary: slice[0].data.next_6_hours.summary.symbol_code, // weather icon for the slice
        precipitation: slice[0].data.next_6_hours.details.precipitation_amount, // precipitation for the slice

        // average values of other properties
        air_pressure_at_sea_level: averageValue("air_pressure_at_sea_level"),
        air_temperature: averageValue("air_temperature"),
        cloud_area_fraction: averageValue("cloud_area_fraction"),
        relative_humidity: averageValue("relative_humidity"),
        wind_from_direction: averageValue("wind_from_direction"),
        wind_speed: averageValue("wind_speed")
      };

      weatherPoints.push(newTimePoint);
    }

    return { weatherPoints, sunrisePoint };
  }

  // returns minimum and maximum temperature for given date
  function _minMaxTemp(wantedDate: number) {
    const weatherPoints = returnForDate(wantedDate).weatherPoints;

    const temperatures: number[] = [];

    for (const timePoint of weatherPoints) {
      const temperature = timePoint.data.instant.details.air_temperature;
      temperatures.push(temperature);
    }

    const minTemp = Math.min(...temperatures);
    const maxTemp = Math.max(...temperatures);

    return { minTemp, maxTemp };
  }
})();
