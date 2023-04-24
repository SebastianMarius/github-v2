import Snowfall from "react-snowfall";
import { useState } from "react";

// Components
import {
  WeatherDataAndHistory,
  WeatherContainer,
} from "./WeatherDashboardStyledComponent";
import Rain from "../../Pages/Weather/Rain";
import TemperatureData from "../TemperatureDescribe/TemperatureData";
import WeatherDetails from "../WeatherData/WeatherDetails";

// Constants and helpers
import "../../styling/Thermometer.css";

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function WeatherDashboard(props) {
  const { weatherDescription, Apikey, weather, setCity, city } = props;

  const weatherCode = weather?.cod;

  return (
    <>
      <WeatherContainer currentWeather={weatherDescription}>
        <TemperatureData
          setCity={setCity}
          city={city}
          weatherDescription={weatherDescription}
          weather={weather}
          weekday={weekday}
          weatherCode={weatherCode}
        />
        <WeatherDataAndHistory weatherCode={weatherCode}>
          <WeatherDetails
            weather={weather}
            weatherCode={weatherCode}
            Apikey={Apikey}
            weekday={weekday}
          />
        </WeatherDataAndHistory>
      </WeatherContainer>
      {weatherDescription?.includes("Snow") && <Snowfall />}
      {weatherDescription?.includes("Rain") && <Rain />}
    </>
  );
}
