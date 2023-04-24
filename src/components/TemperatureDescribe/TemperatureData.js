import { useState, useEffect } from "react";
import Thermometer from "react-thermometer-component";
import { Search } from "@mui/icons-material";
import getTimeDiffAndTimeZone from "city-country-timezone";
import { findTimeZone, getZonedTime } from "timezone-support";

//Components
import {
  WeatherData,
  TemperatureContainer,
} from "../WeatherDashboard/WeatherDashboardStyledComponent";

// Constants and helpers
import {
  getWeatherCloud,
  getColorByWeather,
} from "../WeatherUsedFunctions/WeatherUsedFunctions";
import { searchPhotos } from "../pexels";

const date = new Date();
const currentDate = (weekday) => {
  return {
    day: weekday[date.getDay()],
    hour: date.getDay <= 9 ? "0" + date.getDay() : date.getDay(),
    min: date.getMinutes <= 9 ? "0" + date.getMinutes() : date.getMinutes(),
  };
};
let currentMins;

export default function TemperatureData(props) {
  const {
    setCity,
    weatherCode,
    weatherDescription,
    weather,

    city,

    weekday,
  } = props;
  const [photos, setPhotos] = useState([]);
  const [date, setDate] = useState(currentDate(weekday));

  const changeHandle = (e) => {
    if (e.key === "Enter") {
      setCity(e.target.value);
    }
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      const data = await searchPhotos(city);
      setPhotos(data);
    };

    if (weather?.cod === 404) return;

    const timer = setInterval(() => {
      const timezone = getTimeDiffAndTimeZone(city).timezone;

      const country = findTimeZone(timezone);

      const nativeDate = new Date();

      const countryTime = getZonedTime(nativeDate, country);

      const min =
        countryTime.minutes <= 9
          ? "0" + countryTime.minutes
          : countryTime.minutes;

      if (min === currentMins) return;

      const dayOfWeek = weekday[countryTime.dayOfWeek];

      const hour =
        countryTime.hours <= 9 ? "0" + countryTime.hours : countryTime.hours;

      currentMins = min;

      setDate({ min: min, hour: hour, day: dayOfWeek });
    }, 1000);

    fetchPhotos();

    return () => {
      clearInterval(timer);
    };
  }, [city]);

  return (
    <WeatherData weather={weather}>
      {console.log(weather)}
      <TemperatureContainer className="search_container">
        <Search style={{ color: "#b9b7b7" }} />
        <input onKeyDown={(e) => changeHandle(e)}></input>
      </TemperatureContainer>

      {weatherCode === 200 && (
        <>
          <div className="weather_icon_and_thermo">
            <img
              src={getWeatherCloud(weatherDescription[0])}
              className="weather_image"
            />

            <Thermometer
              class="thermometer"
              theme="light"
              value={weather?.main?.temp}
              format="°C"
              size="small"
              height="100"
            />
          </div>

          <TemperatureContainer className="temperature">
            {weather?.main?.temp}°C
          </TemperatureContainer>

          <div className="date_and_time">
            <div className={"date "}>{date.day},</div>
            <div className="hour">{date.hour + ":" + date.min}</div>
          </div>

          <TemperatureContainer>
            {" "}
            Feels like: {weather?.main?.feels_like}°C
          </TemperatureContainer>
          <TemperatureContainer>
            Temp min: {weather?.main?.temp_min}°C
          </TemperatureContainer>

          <TemperatureContainer>
            {" "}
            Temp max: {weather?.main?.temp_max}°C
          </TemperatureContainer>
          <hr className="horizontal_hr_line"></hr>
          <TemperatureContainer>
            <h4 className="city_name">{city}</h4>
            <img src={photos[0]?.src.landscape} className="city_photo"></img>
          </TemperatureContainer>
        </>
      )}

      {console.log(weather)}
    </WeatherData>
  );
}
