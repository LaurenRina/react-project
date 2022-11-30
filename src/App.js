import React from "react";
import Search from "./Search";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Content">
          <Search cityName="Rome" />
        </div>
        <footer>
          <i class="fa-brands fa-github content-icon"></i>LaurenRina{" "}
          <a
            href="https://github.com/LaurenRina/weather-react"
            target="blank"
            class="contact-link"
            title="GitHub"
          >
            React Project
          </a>
        </footer>
      </div>
    </div>
  );
}
