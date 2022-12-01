import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
                <WeatherIcon code={props.weather.icon} />
              </div>
              <div className="col-7">
                <div className="current-weather-temperature">
                  <WeatherTemperature temperature={props.weather.temperature} />
                </div>
                <div className="temperature-information">
                  <strong>
                    {" "}
                    <span>{props.weather.max}</span>° /
                  </strong>{" "}
                  <span>{props.weather.min}</span>°
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
