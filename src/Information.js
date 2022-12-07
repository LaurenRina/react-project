import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./Information.css";

export default function Information(props) {
  return (
    <div className="information">
      <div className="row">
        <div className="col-7">
          <h1>{props.weather.city}</h1>
        </div>
        <div className="col-5">
          <h2>
            <FormattedDate date={props.weather.date} />
          </h2>
        </div>
      </div>
      <div className="current-weather">
        <div className="row">
          <div className="col-7">
            <div className="row">
              <div className="col-5 current-weather-icon">
                <WeatherIcon code={props.weather.icon} size={80} />
              </div>
              <div className="col-7">
                <div className="current-weather-temperature">
                  <span className="current-day">
                    {props.weather.temperature}
                  </span>
                  <span className="current-day-unit">° C</span>
                </div>
                <div className="current-day-information">
                  <span className="current-day-text">Feels like </span>
                  <span className="current-day-temperature">
                    {props.weather.feels}
                  </span>
                  <span className="current-day-information-unit">° C</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-5">
            <ul>
              <li>
                <span>{props.weather.description}</span>
              </li>
              <li>
                Humidity: <span>{props.weather.humidity}</span>%
              </li>
              <li>
                Wind speed: <span>{props.weather.wind}</span> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
