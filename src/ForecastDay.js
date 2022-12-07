import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  function maxTemperature() {
    let temperature = props.data.temperature.maximum.toFixed(0);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = props.data.temperature.minimum.toFixed(0);
    return `${temperature}°`;
  }

  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <div className="row">
        <div className="col-7 forecast-icon">
          <WeatherIcon code={props.data.condition.icon} size={35} />
        </div>
        <div className="col-5 forecast-temperature">
          <span className="forecast-temperature-max">{maxTemperature()}</span>
          <br />
          <span className="forecast-temperature-min">{minTemperature()}</span>
        </div>
      </div>
    </div>
  );
}
