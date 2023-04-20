import { DataCard } from "../../components/WeatherDashboard/WeatherDashboardStyledComponent";
import Barometer from "../Barometer";

export default function Pressure(props) {
  const { weather } = props;
  return (
    <DataCard>
      <h3>Pressure</h3>
      <Barometer id="dial9" value={weather?.main?.pressure} title="Barometer" />
    </DataCard>
  );
}
