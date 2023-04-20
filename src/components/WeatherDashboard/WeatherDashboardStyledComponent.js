import styled from "styled-components";
import snow from "../../assets/snowFlake.png";

export const WeatherContainer = styled.div`
  height: 80vh;
  width: 100vh;

  display: flex;

  border-radius: 20px;

  ${({ currentWeather }) =>
    (currentWeather.includes("Snow") &&
      `background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://i.imgur.com/Qex4phO.jpg"); background-size: 120%;
      `) ||
    (currentWeather.includes("Rain") &&
      `background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://i.imgur.com/5tZrEzd.jpg"); background-size: 120%;
      `) ||
    (currentWeather.includes("Clouds") &&
      `background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://i.imgur.com/5epD1pc.jpg"); background-size: 120%;`) ||
    (currentWeather.includes("Clear") &&
      `background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://i.imgur.com/u6ZUMxF.jpg"); background-size: 150%;`)}
`;

export const WeatherData = styled.div`
  //   background-color: red;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: rgb(219, 229, 235, 0.6);
  height: 100%;
  width: 40%;
  color: white;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const TemperatureContainer = styled.div`
  flex-direction: column;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WeatherDataAndHistory = styled.div`
  border-left: 1px solid #ccc;
  height: 100%;
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: rgba(219, 229, 235, 0.6);

  ${({ weatherCode }) => weatherCode === "404" && ` justify-content:center;`}
`;

export const WeatherHistory = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  background-color: #ffffff;
  margin-left: 2%;
  border-radius: 20px;
`;

export const DataContainer = styled.div`
  //   background-color: green;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1%;
`;

export const DataCard = styled.div`
  width: 30%;
  height: 45%;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border: 1px solid gray;
  margin-left: 1%;
  margin-right: 1%;
  border-radius: 10px;
`;

export const CompassArrow = styled.div`
  width: 3px;
  height: 80px;
  background-color: rgb(96, 54, 54);
  position: absolute;
  top: 0px;
  left: 56.8px;
  border: 1px solid black;

  -webkit-transform: rotate(${(props) => props.degrees}deg);
  -moz-transform: rotate(${(props) => props.degrees}deg);
  -o-transform: rotate(${(props) => props.degrees}deg);
  -ms-transform: rotate(${(props) => props.degrees}deg);

  -moz-transition: all 1s ease;
  -webkit-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
`;
