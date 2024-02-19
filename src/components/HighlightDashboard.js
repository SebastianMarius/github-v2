import AirQuality from "./HighlightComponents/AirQuality";
import Humidity from "./HighlightComponents/Humidity";
import Pressure from "./HighlightComponents/Pressure";
import SunsetAndSunrise from "./HighlightComponents/SunsetAndSunrise";
import WindStatus from "./HighlightComponents/WindStatus";
import VisibilityCard from "./HighlightComponents/VisibilityCard";
import { DataContainer } from "./WeatherDashboard/WeatherDashboardStyledComponent";

export default function HighlightDashboard(props) {
  const { weather, Apikey, internattionalizare, activelang } = props;

  return (
    <DataContainer>
      <Humidity weather={weather} internattionalizare={internattionalizare} activelang={activelang}/>
      <Pressure weather={weather} internattionalizare={internattionalizare} activelang={activelang}/>
      <WindStatus weather={weather} internattionalizare={internattionalizare} activelang={activelang}/>
      <AirQuality weather={weather} Apikey={Apikey}internattionalizare={internattionalizare} activelang={activelang} />
      <SunsetAndSunrise weather={weather} internattionalizare={internattionalizare} activelang={activelang}/>
      <VisibilityCard weather={weather} internattionalizare={internattionalizare} activelang={activelang}/>
    </DataContainer>
  );
}
