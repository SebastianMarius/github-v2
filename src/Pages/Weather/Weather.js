import React from "react";
import Navbar from "../../components/Navbar";
import { CurrentWeatherContainer } from "./WeatherStyledComponent";
import { useEffect } from "react";
import { useState } from "react";
import Snowing from "./Snowing";
import WeatherDashboard from "../../components/WeatherDashboard/WeatherDashboard";
import Rain from "./Rain";

export default function Weather() {
  const [weather, setWeather] = useState();
  const [currentWeather, setCurrentWeather] = useState([]);
  const [city, setCity] = useState("Cluj-Napoca");
  const [cityExist, setCityExist] = useState(true);

  const Apikey = "709e827bd8b3d48947e29431897b244d";

  useEffect(() => {
    const getCurrentWeather = async () => {
      const weatherData = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&appid=" +
          Apikey +
          "&units=metric"
      );
      const currentWeather = await weatherData.json();
      const currentWeatherArray = [];

      currentWeather.weather?.map((element) => {
        currentWeatherArray.push(element.main);
      });

      setCurrentWeather(currentWeatherArray);

      if (currentWeather.cod === 200) {
        setWeather(currentWeather);
      } else {
        setWeather();
      }

      setWeather(currentWeather);
    };

    getCurrentWeather();
  }, [city]);

  return (
    <div>
      <Navbar />

      <CurrentWeatherContainer weatherDescription={currentWeather}>
        {weather && (
          <WeatherDashboard
            cityExist={cityExist}
            weatherDescription={currentWeather}
            weather={weather}
            setCity={setCity}
            city={city}
            Apikey={Apikey}
          />
        )}
      </CurrentWeatherContainer>
    </div>
  );
}
