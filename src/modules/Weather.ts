import { MET, ITimePointLocationforecast, ITimePointSunrise } from "./MET";

export const Weather = (() => {
  // module for extracting weather numbers from timeseries array
  return {
    init,
    logCurrentTemp,
    today
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

  function today() {
    const todayWeatherPoints: ITimePointLocationforecast[] = [];
    let todaySunrise: ITimePointSunrise;

    const dateObj = new Date();
    const todayDate = dateObj.getDate();

    for (const timePoint of _LocationforecastPoints) {
      if (typeof timePoint.time === "object") {
        const date = timePoint.time.getDate();

        // add only today's time points
        if (date === todayDate) {
          todayWeatherPoints.push(timePoint);
        }
      }
    }

    for (const timePoint of _SunrisePoints) {
      if (typeof timePoint.date === "object") {
        const date = timePoint.date.getDate();

        // add only today's time points
        if (date === todayDate) {
          todaySunrise = timePoint;
        }
      }
    }

    console.log("Todays arrays: ", todayWeatherPoints, todaySunrise);
    return [todayWeatherPoints, todaySunrise];
  }
})();
