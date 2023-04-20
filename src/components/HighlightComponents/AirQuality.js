import { useEffect, useState } from "react";
import { DataCard } from "../WeatherDashboard/WeatherDashboardStyledComponent";
import Lungs from "../../assets/lungs.svg";
import { getAirQuality } from "../WeatherUsedFunctions/WeatherUsedFunctions";

export default function AirQuality(props) {
  const { weather, Apikey } = props;
  const [airQuality, setAirQuality] = useState();

  const lat = weather?.coord?.lat;
  const long = weather?.coord?.lon;

  useEffect(() => {
    const fetchAirQuality = async () => {
      const getAirQuality = await fetch(
        "http://api.openweathermap.org/data/2.5/air_pollution?lat=" +
          lat +
          "&lon=" +
          long +
          "&appid=" +
          Apikey
      );
      const AirQuality = await getAirQuality.json();

      setAirQuality(AirQuality);
    };
    fetchAirQuality();
  }, [lat, long]);

  return (
    <DataCard>
      <h3>Air Quality</h3>
      <img src={Lungs} className="lungs" />
      <div className="airQuality_description">{getAirQuality(airQuality)}</div>
    </DataCard>
  );
}
