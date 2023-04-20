import { useEffect, useState } from "react";
import { WeatherHistory } from "./WeatherDashboard/WeatherDashboardStyledComponent";
import { getWeatherCloud } from "./WeatherUsedFunctions/WeatherUsedFunctions";

export default function WeatherHistorySection(props) {
  const [historyData, setHistoryData] = useState();
  const { weather, Apikey, weekday } = props;

  const lat = weather?.coord?.lat;
  const long = weather?.coord?.lon;

  useEffect(() => {
    const fetchWeatherHistory = async () => {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=" +
          lat +
          "&lon=" +
          long +
          "&appid=" +
          Apikey +
          "&units=metric"
      );
      const weatherHistory = await response.json();

      const weather_days = weatherHistory.list.filter((weather) => {
        return weather.dt_txt.includes("15:00:00");
      });
      setHistoryData(weather_days);
    };

    long && lat && fetchWeatherHistory();
  }, [lat, long]);

  const getDate = (day) => {
    const specificDay = day.dt_txt.slice(0, 10);

    const date = new Date(specificDay);
    return <div>{weekday[date?.getDay()]}</div>;
  };

  return (
    <div className="weather_history ">
      {historyData?.map((day) => (
        <WeatherHistory key={day.dt_txt}>
          <div>{getDate(day)}</div>
          <img
            src={getWeatherCloud(day.weather[0].main)}
            className="weather_history_icon"
          />
          <div>{day.main.temp}</div>
        </WeatherHistory>
      ))}
    </div>
  );
}
