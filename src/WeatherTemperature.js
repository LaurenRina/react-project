import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("metric");

  function convertF(event) {
    event.preventDefault();
    setUnit("imperial");
  }
  function convertC(event) {
    event.preventDefault();
    setUnit("metric");
  }
  function imperial() {
    return (props.temperature * 9) / 5 + 32;
  }

  if (unit === "metric") {
    return (
      <div>
        <span className="temperature-day">{props.temperature}</span>
        <span className="temperature-unit">
          °C |{" "}
          <a href="/" onClick={convertF} className="unit-link">
            °F
          </a>{" "}
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temperature-day">{Math.round(imperial())}</span>
        <span className="temperature-unit">
          <a href="/" onClick={convertC} className="unit-link">
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
