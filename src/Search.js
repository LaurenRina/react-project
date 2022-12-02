import React, { useState } from "react";
import Information from "./Information";
import "./Search.css";

import axios from "axios";

export default function Search(props) {
  const [weather, setWeather] = useState({ loaded: false });
  const [city, setCity] = useState(props.cityName);
  let cityNames = [
    { id: 1, name: "London" },
    { id: 2, name: "Paris" },
    { id: 3, name: "Rome" },
    { id: 4, name: "Berlin" },
    { id: 5, name: "Kyiv" },
  ];

  function showWeather(response) {
    setWeather({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp.toFixed(0),
      max: response.data.main.temp_max.toFixed(0),
      min: response.data.main.temp_min.toFixed(0),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed.toFixed(0),
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });
  }
  function submitCity(event) {
    event.preventDefault();
    searchCity();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function showCity(event) {
    event.preventDefault();
    setCity("London");
    searchCity();
  }
  function searchCity() {
    let apiKey = "3e5761385c02293899defe61082c2901";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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

  let cities = (
    <div className="cities">
      <div className="row">
        {cityNames.map(function (city) {
          return (
            <div className="col">
              <a
                href="/"
                key={city.id}
                className="city-link"
                onClick={showCity}
              >
                {city.name}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );

  if (weather.ready) {
    return (
      <div className="Content">
        {form}
        {cities}
        <hr />
        <Information weather={weather} />
      </div>
    );
  } else {
    searchCity();
    return "Loading...";
  }
}
