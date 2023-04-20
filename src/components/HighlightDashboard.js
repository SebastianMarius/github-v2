import AirQuality from "./HighlightComponents/AirQuality";
import Humidity from "./HighlightComponents/Humidity";
import Pressure from "./HighlightComponents/Pressure";
import SunsetAndSunrise from "./HighlightComponents/SunsetAndSunrise";
import WindStatus from "./HighlightComponents/WindStatus";
import VisibilityCard from "./HighlightComponents/VisibilityCard";
import { DataContainer } from "./WeatherDashboard/WeatherDashboardStyledComponent";

export default function HighlightDashboard(props) {
  const { weather, Apikey } = props;

  return (
    <DataContainer>
      <Humidity weather={weather} />
      <Pressure weather={weather} />
      <WindStatus weather={weather} />
      <AirQuality weather={weather} Apikey={Apikey} />
      <SunsetAndSunrise weather={weather} />
      <VisibilityCard weather={weather} />
    </DataContainer>
  );
}
