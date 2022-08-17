import { MET, ITimePointLocationforecast, ITimePointSunrise } from "./MET";

export const Weather = (() => {
  // module for extracting weather numbers from timeseries array
  return {
    init,
    logCurrentTemp,
    returnForDate
  };

  let _LocationforecastPoints: ITimePointLocationforecast[];
  let _SunrisePoints: ITimePointSunrise[];

  function init() {
    _LocationforecastPoints = MET.returnLocationforecast();
    _SunrisePoints = MET.returnSunrise();
  }

  function logCurrentTemp() {
    const currentTimePoint = _LocationforecastPoints[0];
    const details = currentTimePoint.data.instant.details;
    const airTemp = details.air_temperature;

    console.log(`Current temperature is ${airTemp} °C`);
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

    console.log(
      `Weather for date "${wantedDate}": `,
      weatherPoints,
      sunrisePoint
    );
    return { weatherPoints, sunrisePoint };
  }
})();
