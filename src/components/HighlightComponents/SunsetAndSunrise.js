import { DataCard } from "../WeatherDashboard/WeatherDashboardStyledComponent";
import Sunrise from "../../assets/sunrise.svg";
import Sunset from "../../assets/sunset.svg";
import { getSunTime } from "../WeatherUsedFunctions/WeatherUsedFunctions";

export default function SunsetAndSunrise(props) {
  const { weather, internattionalizare, activelang } = props;
  return (
    <DataCard>
      <h3>{internattionalizare[activelang].rightSide.sunsetSunrise}</h3>
      <div className="sunrise_container">
        <img src={Sunrise} className="sunrise_svg give_margin" />
        <p className="sun_time">{getSunTime(weather?.sys?.sunrise)}</p>
      </div>
      <div className="sunset_container">
        <img src={Sunset} className="sunset_svg give_margin" />
        <p className="sun_time">{getSunTime(weather?.sys?.sunset)}</p>
      </div>
    </DataCard>
  );
}
