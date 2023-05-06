import React from "react";
import "./WeatherDisplay.css";

export default function WeatherDisplay() {
  let weatherData = {
    mainForecast: "Cool Breeze",
    mainAverage: 11,
    mainFeel: 9,
    mainHigh: 15,
    mainLow: 7,
    mainWind: 40,
    mainHumidity: 12,
    mainIcon: "/",
    sunriseIcon: "/",
    sunsetIcon: "/",
    moonriseIcon: "/",
    moonsetIcon: "/"
  };

  return (
    <div className="WeatherDisplay">
      <div className="container">
        <div className="row">
          <div className="col-12 main-icon-wrapper">
            <img src={weatherData.mainIcon} alt={weatherData.mainForecast} />
          </div>
          <div className="col-12 main-forecast">{weatherData.mainForecast}</div>

          <div className="col weather-conditions" style={{ marginTop: "10px" }}>
            <br />
            Average{" "}
            <span className="weather-data">{weatherData.mainAverage}°C</span>
            <br />
            Feels Like{" "}
            <span className="weather-data">{weatherData.mainFeel}°C</span>
            <br />
            High <span className="weather-data">{weatherData.mainHigh}°C</span>
            <br />
            Low <span className="weather-data">{weatherData.mainLow}C</span>
            <br />
            Wind{" "}
            <span className="weather-data">{weatherData.mainWind}km/h</span>
            <br />
            Humidity{" "}
            <span className="weather-data">{weatherData.mainHumidity}%</span>
          </div>
          <div className="col icons-wrapper" style={{ marginTop: "10px" }}>
            <img src={weatherData.sunriseIcon} alt="sunrise-png" />
            ↑
            <br />
            <img src={weatherData.sunsetIcon} alt="sunset-png" />
            ↓
            <br />
            <img src={weatherData.moonriseriseIcon} alt="moonrise-png" />
            ↑
            <br />
            <img src={weatherData.moonsetIcon} alt="moonset-png" />↓
          </div>
        </div>
      </div>
    </div>
  );
}