import { DataCard } from "../WeatherDashboard/WeatherDashboardStyledComponent";
import GaugeChart from "react-gauge-chart";

export default function Humidity(props) {
  const { weather, internattionalizare, activelang } = props;
  return (
    <DataCard>
      <h3>{internattionalizare[activelang].rightSide.humidity}</h3>

      <GaugeChart
        id="gauge-chart4"
        nrOfLevels={3}
        arcPadding={0.1}
        cornerRadius={3}
        percent={weather?.main?.humidity / 100}
        textColor="black"
      />
    </DataCard>
  );
}
