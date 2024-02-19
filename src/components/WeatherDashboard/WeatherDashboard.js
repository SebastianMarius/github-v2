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

export default function WeatherDashboard(props) {
  const { weatherDescription, Apikey, weather, setCity, city } = props;

  const [internattionalizare, setInternationalizare] = useState({
    'en' : {
       leftSide : {
          temperatureFeels : 'Feels like',
          temperatureMin : 'Temperature min',
          temperatureMax : 'Temperature max',
       },
       rightSide : {
          totalHighlits : 'Today Highlights',
          humidity : 'Humidity',
          pressure : 'Pressure',
          windStatus : 'Wind status',
          airQuality : 'Air Quality',
          sunsetSunrise : 'Sunrise & Sunset',
          visibility : 'Visibility',
       },
       badRequest : {
          badRequest: 'Bad city you entered, again try'
       },

    },
    'ro' : {
      leftSide : {
        temperatureFeels : 'Temperatura resimtita',
        temperatureMin : 'Temperatura minima',
        temperatureMax : 'Temperatura maxima',
     },
     rightSide : {
      totalHighlits : 'Starea vremii',
      humidity : 'Umiditate',
      pressure : 'Presiune',
      windStatus : 'Viteza Vant',
      airQuality : 'Calitate Aer',
      sunsetSunrise : 'Apus & Rasarit',
      visibility : 'Visibilitate',
   },
      badRequest : {
      badRequest: 'Oras prost tu ai introdus incearca iara'
      },
    }
  });

  const [activelang, setActiveLang] = useState('ro');

  const weekday = activelang === 'en' ?  [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ] : ["Duminica", "Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata"];

  const weatherCode = weather?.cod;

  console.log(internattionalizare[activelang].leftSide.temperatureFeels);

  return (
    <>
      <WeatherContainer currentWeather={weatherDescription}>
        <TemperatureData
          setCity={setCity}
          internattionalizare = {internattionalizare}
          activelang = {activelang}
          setActiveLang={setActiveLang}
          city={city}
          weatherDescription={weatherDescription}
          weather={weather}
          weekday={weekday}
          weatherCode={weatherCode}
        />
        <WeatherDataAndHistory weatherCode={weatherCode}>
          <WeatherDetails
            internattionalizare = {internattionalizare}
            activelang = {activelang}
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
