import React from "react";
import Search from "./Search";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search cityName="Kyiv" />
        <footer>
          <i className="fa-brands fa-github contact-icon"></i>LaurenRina{" "}
          <a
            href="https://github.com/LaurenRina/weather-react"
            target="blank"
            className="contact-link"
            title="GitHub"
          >
            React Project
          </a>
        </footer>
      </div>
    </div>
  );
}
