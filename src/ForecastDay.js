import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }
  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <div className="row">
        <div className="col-6">
          <div className="forecast-icon">
            <WeatherIcon code={props.data.weather[0].icon} size={60} />
          </div>
        </div>
        <div className="col-6">
          <div className="forecast-temperature">
            <strong>max</strong>
            <br />
            min
          </div>
        </div>
      </div>
    </div>
  );
}
