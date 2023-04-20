import SnowingCloud from "../../assets/snowflakeSvg.svg";
import RainingCloud from "../../assets/rainn.svg";
import CloudlySvg from "../../assets/cloudly.svg";
import ClearSky from "../../assets/clear_weather.svg";

const airQualityByIndex = [
  "Very Good",
  "Fair",
  "Moderate",
  "Poor",
  "Very Poor",
];

const getAirQuality = (airQuality) => {
  console.log(airQuality);
  const qualityIndex = airQuality?.list[0].main.aqi;
  return airQualityByIndex[qualityIndex - 1];
};

const getSunTime = (timeToConvert) => {
  const EpochTimeToNormal = new Date(timeToConvert * 1000);
  const hour =
    EpochTimeToNormal.getHours() <= 9
      ? "0" + EpochTimeToNormal.getHours()
      : EpochTimeToNormal.getHours();

  const mins =
    EpochTimeToNormal.getMinutes() <= 9
      ? "0" + EpochTimeToNormal.getMinutes()
      : EpochTimeToNormal.getMinutes();

  return hour + ":" + mins;
};

const getWeatherCloud = (weatherDescription) => {
  if (weatherDescription === "Snow") {
    return SnowingCloud;
  } else if (weatherDescription === "Rain") {
    return RainingCloud;
  } else if (weatherDescription === "Clouds") {
    return CloudlySvg;
  } else if (weatherDescription === "Clear") {
    return ClearSky;
  }
};

const getColorByWeather = (weather) => {
  if (
    weather.weather[0].main === "Clouds" ||
    weather.weather[0].main === "Clear"
  ) {
    return "gray_color";
  }
};

export { getAirQuality, getSunTime, getWeatherCloud, getColorByWeather };
