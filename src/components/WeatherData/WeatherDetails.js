// Components
import HighlightDashboard from "../HighlightDashboard";
import WeatherHistorySection from "../WeatherHistorySection";

// Constants and helpers
import "../../styling/WeatherDataAndHistory.css";
import "../../styling/SkeletonLoading.css";

export default function WeatherDetails(props) {
  const { weather, weekday, Apikey } = props;

  return (
    <>
      {weather && (
        <>
          <WeatherHistorySection
            weather={weather}
            Apikey={Apikey}
            weekday={weekday}
          />
          <h2 className="highlights"> Today Highlights</h2>
          <HighlightDashboard weather={weather} Apikey={Apikey} />
        </>
      )}
    </>
  );
}
