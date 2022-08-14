import { MET, ITimePointLocationforecast } from "./MET";

export const Weather = (() => {
  // module for extracting weather numbers from timeseries array
  return {
    init,
    logCurrentTemp
  };

  let _timeseries: ITimePointLocationforecast[];

  function init() {
    _timeseries = MET.returnTimeseries();
  }

  function logCurrentTemp() {
    const currentTimePoint = _timeseries[0];
    const details = currentTimePoint.data.instant.details;
    const airTemp = details.air_temperature;

    console.log(`Current temperature is ${airTemp} °C`);
  }
})();
