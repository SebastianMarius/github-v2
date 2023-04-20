import { DataCard } from "../WeatherDashboard/WeatherDashboardStyledComponent";
import { CompassArrow } from "../WeatherDashboard/WeatherDashboardStyledComponent";

export default function WindStatus(props) {
  const { weather } = props;

  return (
    <DataCard>
      <h3>Wind status</h3>
      <div id="compass">
        <CompassArrow degrees={weather?.wind?.deg}>
          <div className="arrow_head"></div>
        </CompassArrow>
      </div>
      <div className="wind_speed">
        <h1>{weather?.wind?.speed}</h1>
        <h3 className="km">km/h</h3>
      </div>
    </DataCard>
  );
}
