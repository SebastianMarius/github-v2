import React from "react";
import ReactRain from "react-rain-animation";
import "react-rain-animation/lib/style.css";
import "../../styling/Raining.css";

export default function Rain() {
  return (
    <div>
      <ReactRain numDrops="150" />
    </div>
  );
}
