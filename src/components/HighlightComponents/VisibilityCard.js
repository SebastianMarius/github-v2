import { DataCard } from "../WeatherDashboard/WeatherDashboardStyledComponent";
import Visibility from "../../assets/visibility.svg";

export default function VisibilityCard(props) {
  const { weather } = props;
  return (
    <DataCard>
      <h3>Visibility</h3>
      <img src={Visibility} className="visibility_svg" />
      <div className="visibility">
        <p>{weather?.visibility / 1000}</p>
        <p>Km</p>
      </div>
    </DataCard>
  );
}
