import React, { useState } from "react";
import Information from "./Information";
import Forecast from "./Forecast";
import "./Search.css";

import axios from "axios";

export default function Search(props) {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState(props.cityName);
  let [loaded, setLoaded] = useState(false);
  let cityNames = ["London", "Paris", "Rome", "Oslo", "Kyiv"];

  function showWeather(response) {
    setWeather({
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current.toFixed(0),
      feels: response.data.temperature.feels_like.toFixed(0),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed.toFixed(0),
      icon: response.data.condition.icon,
      city: response.data.city,
    });
    setLoaded(true);
  }
  function submitCity(event) {
    event.preventDefault();
    searchCity();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function displayCity(event) {
    event.preventDefault();
    setCity(event.target.innerHTML);
    searchCity();
  }
  function searchCity() {
    let apiKey = "e0191bb0f348113ffb0643acotf727ba";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  let form = (
    <form onSubmit={submitCity} className="search">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city"
            autoComplete="off"
            onChange={updateCity}
            className="enter-city"
          />
        </div>
        <div className="col-3">
          <input type="submit" value="Search" className="submit-city" />
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div className="Content">
        {form}
        <div className="cities">
          <div className="row">
            {cityNames.map(function (cityName, index) {
              return (
                <div className="col">
                  <a
                    href="/"
                    key={index}
                    className="city-link"
                    onClick={displayCity}
                  >
                    {cityName}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <hr />
        <Information weather={weather} />
        <hr />
        <Forecast city={weather.city} />
      </div>
    );
  } else {
    searchCity();
    return "Loading...";
  }
}
