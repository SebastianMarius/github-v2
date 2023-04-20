import styled from "styled-components";

export const CurrentWeatherContainer = styled.div`
  width: 100%;
  height: 93.2vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ weatherDescription }) =>
    weatherDescription === "Snow" &&
    " background-image: url(https://images.unsplash.com/photo-1531972497489-8eb337acf6e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=193456e9385b553747a5e0f0cbc7badb&auto=format&fit=crop&w=1334&q=80);"}

  background: ${(props) =>
    (props.weatherDescription.includes("Clouds") &&
      "linear-gradient(to left, #dde7ee,#c6cfd6 )") ||
    (props.weatherDescription.includes("Snow") && "#282c34") ||
    (props.weatherDescription.includes("Rain") &&
      "linear-gradient(to left, #959595,#D0D0D0 )") ||
    (props.weatherDescription.includes("Clear") &&
      "linear-gradient(to left, #CBE0F1,#B7DBFD )")};
`;
