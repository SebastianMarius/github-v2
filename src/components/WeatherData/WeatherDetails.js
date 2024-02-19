// Components
import HighlightDashboard from "../HighlightDashboard";
import WeatherHistorySection from "../WeatherHistorySection";
import BadRequest from "../BadRequest";

// Constants and helpers
import "../../styling/WeatherDataAndHistory.css";
import "../../styling/SkeletonLoading.css";

export default function WeatherDetails(props) {
  const { weather, weekday, Apikey, weatherCode, internattionalizare, activelang } = props;

  return (
    <>
      {weatherCode === 200 ? (
        <>
          <WeatherHistorySection
            weather={weather}
            Apikey={Apikey}
            weekday={weekday}
          />
          <h2 className="highlights"> {internattionalizare[activelang].rightSide.totalHighlits}</h2>

          <HighlightDashboard weather={weather} Apikey={Apikey} activelang={activelang}  internattionalizare={internattionalizare} />
        </>
      ) : (
        <BadRequest  activelang={activelang} internattionalizare={internattionalizare} />
      )}
    </>
  );
}
