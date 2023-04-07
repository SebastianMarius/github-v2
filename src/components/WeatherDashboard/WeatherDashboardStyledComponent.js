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
      `background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://i.imgur.com/5epD1pc.jpg"); background-size: 120%;`)}
`;

export const WeatherData = styled.div`
  //   background-color: red;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 90%;
  width: 40%;
  color: white;
`;

export const TemperatureContainer = styled.div`
  //   background-color: green;
  flex-direction: column;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OiVedeIo = styled.div`
  border-left: 1px solid #ccc;
  height: 100%;
  width: 80%;
`;
