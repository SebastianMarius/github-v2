import { DataCard } from "../../components/WeatherDashboard/WeatherDashboardStyledComponent";
import Barometer from "../Barometer";

export default function Pressure(props) {
  const { weather, internattionalizare, activelang } = props;
  return (
    <DataCard>
      <h3>{internattionalizare[activelang].rightSide.pressure}</h3>
      <Barometer id="dial9" value={weather?.main?.pressure} title="Barometer" />
    </DataCard>
  );
}
