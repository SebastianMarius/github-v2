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

const date = new Date();
const currentDate = {
  day: weekday[date.getDay()],
  hour: date.getDay <= 9 ? "0" + date.getDay() : date.getDay(),
  min: date.getMinutes <= 9 ? "0" + date.getMinutes() : date.getMinutes(),
};

export default function WeatherDashboard(props) {
  const { weatherDescription, Apikey, weather, setCity, city } = props;

  const [date, setDate] = useState(currentDate);
  const weatherCode = weather?.cod;

  console.log("d aaci?");

  return (
    <>
      <WeatherContainer currentWeather={weatherDescription}>
        <TemperatureData
          setCity={setCity}
          city={city}
          weatherDescription={weatherDescription}
          weather={weather}
          date={date}
          setDate={setDate}
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
