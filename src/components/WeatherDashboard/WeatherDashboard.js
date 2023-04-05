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
import SnowingCloud from "../../assets/let_it_snow.png";
import { useState } from "react";

export default function WeatherDashboard(props) {
  const [date, SetDate] = useState();

  const { weatherDescription, weather } = props;

  return (
    <>
      <WeatherContainer currentWeather={weatherDescription}>
        <WeatherData>
          <TemperatureContainer className="search_container">
            <Search />
            <input></input>
          </TemperatureContainer>
          <img src={SnowingCloud} className="weather_image" />

          <TemperatureContainer className="temperature">
            {" "}
            {weather?.main.temp}°C
            <Thermometer
              class="thermometer"
              theme="light"
              value={weather?.main.temp}
              format="°C"
              size="small"
              height="100"
            />
          </TemperatureContainer>
          <TemperatureContainer>
            {" "}
            Feels like: {weather?.main.feels_like}°C
          </TemperatureContainer>
          <TemperatureContainer>
            Temp min: {weather?.main.temp_min}
          </TemperatureContainer>

          <TemperatureContainer>
            {" "}
            Temp max: {weather?.main.temp_max}
          </TemperatureContainer>
        </WeatherData>
        <OiVedeIo />
      </WeatherContainer>
      {weatherDescription?.includes("Snow") && <Snowfall />}
      {weatherDescription?.includes("Rain") && <Rain />}
    </>
  );
}
