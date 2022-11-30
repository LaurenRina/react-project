import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function Information(props) {
  return (
    <div className="information">
      <div className="row">
        <div className="col-7">
          <h1 id="city">{props.weather.city}</h1>
        </div>
        <div className="col-5">
          <h2 id="date">
            <FormattedDate date={props.weather.date} />
          </h2>
        </div>
      </div>
      <div className="current-weather">
        <div className="row">
          <div className="col-7">
            <div className="row">
              <div className="col-5 current-weather-icon">
                <WeatherIcon code={props.weather.icon} />
              </div>
              <div className="col-7">
                <div className="current-weather-temperature">
                  <span className="temperature-day" id="current-temperature">
                    {props.weather.temperature}
                  </span>
                  <span className="temperature-unit">°C</span>
                </div>
                <div className="temperature-information">
                  <strong>
                    {" "}
                    <span id="max">{props.weather.max}</span>° /
                  </strong>{" "}
                  <span id="min">{props.weather.min}</span>°
                </div>
              </div>
            </div>
          </div>
          <div className="col-5">
            <ul>
              <li>
                <span id="description">{props.weather.description}</span>
              </li>
              <li>
                Humidity: <span id="humidity">{props.weather.humidity}</span>%
              </li>
              <li>
                Wind speed: <span id="wind">{props.weather.wind}</span> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
