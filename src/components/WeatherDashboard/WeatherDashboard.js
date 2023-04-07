import Snowfall from "react-snowfall";
import {
  OiVedeIo,
  TemperatureContainer,
  WeatherContainer,
  WeatherData,
} from "./WeatherDashboardStyledComponent";
import Rain from "../../Pages/Weather/Rain";
import Thermometer from "react-thermometer-component";
import { Search } from "@mui/icons-material";
import "../../styling/Thermometer.css";
import SnowingCloud from "../../assets/snowflakeSvg.svg";
import RainingCloud from "../../assets/rainn.svg";
import CloudlySvg from "../../assets/cloudly.svg";
import { useEffect, useState } from "react";

import { searchPhotos } from "../pexels";

export default function WeatherDashboard(props) {
  const { weatherDescription, weather, setCity, city } = props;
  const [date, setDate] = useState(new Date());
  const [photos, setPhotos] = useState([]);

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    const fetchPhotos = async () => {
      const data = await searchPhotos(city);
      setPhotos(data);
    };

    fetchPhotos();
  }, [city]);

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();

      setDate(date);
    }, 60 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const changeHandle = (e) => {
    if (e.key === "Enter") {
      setCity(e.target.value);
    }
  };

  const getWeatherCloud = () => {
    if (weatherDescription[0] === "Snow") {
      return SnowingCloud;
    } else if (weatherDescription[0] === "Rain") {
      return RainingCloud;
    } else if (weatherDescription[0] === "Clouds") {
      return CloudlySvg;
    }
  };

  console.log(weatherDescription, " apa curenta");

  return (
    <>
      <WeatherContainer currentWeather={weatherDescription}>
        <WeatherData>
          <TemperatureContainer className="search_container">
            <Search />
            <input onKeyDown={(e) => changeHandle(e)}></input>
          </TemperatureContainer>
          <div className="weather_icon_and_thermo">
            <img src={getWeatherCloud()} className="weather_image" />
            <Thermometer
              class="thermometer"
              theme="light"
              value={weather?.main.temp}
              format="°C"
              size="small"
              height="100"
            />
          </div>

          <TemperatureContainer className="temperature">
            {" "}
            {weather?.main.temp}°C
          </TemperatureContainer>
          <div className="date_and_time">
            <div className="date">{weekday[date.getDay()]},</div>
            <div className="hour">
              {" "}
              {date.getHours()}:{date.getMinutes()}{" "}
            </div>
          </div>

          <TemperatureContainer>
            {" "}
            Feels like: {weather?.main.feels_like}°C
          </TemperatureContainer>
          <TemperatureContainer>
            Temp min: {weather?.main.temp_min}°C
          </TemperatureContainer>

          <TemperatureContainer>
            {" "}
            Temp max: {weather?.main.temp_max}°C
          </TemperatureContainer>
          <hr className="horizontal_hr_line"></hr>
          <TemperatureContainer>
            <h4 className="city_name">{city}</h4>
            <img src={photos[0]?.src.landscape} className="city_photo"></img>
          </TemperatureContainer>
        </WeatherData>
        <OiVedeIo />
      </WeatherContainer>
      {weatherDescription?.includes("Snow") && <Snowfall />}
      {weatherDescription?.includes("Rain") && <Rain />}
    </>
  );
}
