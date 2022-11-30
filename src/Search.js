import React, { useState } from "react";
import Cities from "./Cities";
import Information from "./Information";

import axios from "axios";

export default function Search(props) {
  const [weather, setWeather] = useState({ loaded: false });

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

  if (weather.ready) {
    return (
      <div>
        <form className="search" id="search-form">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                autoComplete="off"
                className="enter-city"
                id="search-input"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="submit-city" />
            </div>
          </div>
        </form>
        <Cities />
        <hr />
        <Information weather={weather} />
      </div>
    );
  } else {
    const apiKey = "3e5761385c02293899defe61082c2901";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
    return "Loading...";
  }
}
