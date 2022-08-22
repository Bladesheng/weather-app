import { MET, ITimePointLocationforecast, ITimePointSunrise } from "./MET";

export const Weather = (() => {
  // module for returning weather numbers in more readable format

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

    const minMax = _minMaxTemp(new Date().getDate());
    const minTemp = minMax.minTemp;
    const maxTemp = minMax.maxTemp;

    const iconCode = currentTimePoint.data.next_1_hours.summary.symbol_code;

    return { airTemp, minTemp, maxTemp, iconCode };
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

  return {
    init,
    returnNow,
    returnForDate
  };
})();
