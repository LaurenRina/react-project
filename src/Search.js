import React, { useState } from "react";
import Cities from "./Cities";
import Information from "./Information";

import axios from "axios";

export default function Search() {
  const [name, setName] = useState("");
  const [weather, setWeather] = useState({});

  function UpdateName(event) {
    setName(event.target.value);
  }
  function showWeather(response) {
    setWeather({
      temperature: response.data.main.temp.toFixed(0),
      max: response.data.main.temp_max.toFixed(0),
      min: response.data.main.temp_min.toFixed(0),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed.toFixed(0),
      icon: response.data.weather[0].icon,
    });
  }
  function searchCity(event) {
    event.preventDefault();
    let apiKey = "3e5761385c02293899defe61082c2901";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  let form = (
    <form onSubmit={searchCity} className="search" id="search-form">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city"
            autoComplete="off"
            onChange={UpdateName}
            className="enter-city"
            id="search-input"
          />
        </div>
        <div className="col-3">
          <input type="submit" value="Search" className="submit-city" />
        </div>
      </div>
    </form>
  );

  return (
    <div>
      {form}
      <Cities />
      <hr />
      <Information weather={weather} />
    </div>
  );
}
