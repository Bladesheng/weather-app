interface ITimePoint {
  data: {
    instant: {
      details: any;
    };
  };
  time: string | Date;
}

export class MET {
  static timeseries: ITimePoint[];

  static async get() {
    try {
      const url =
        "https://api.met.no/weatherapi/locationforecast/2.0/complete?altitude=325&lat=50.661&lon=14.996";

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
      console.log("Error: " + error);
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
