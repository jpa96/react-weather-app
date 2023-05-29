import React, {useState} from "react";
import axios from "axios";
import "./WeatherDisplay.css";

export default function WeatherDisplay() {
 
  const [weatherData, setWeatherData] = useState({ready: false})
  
 
function handleResponse(response){
  console.log(response.data);

  setWeatherData({
    ready: true,
    mainForecast: response.data.condition.description,
    mainAverage: Math.round(response.data.temperature.current),
    mainFeel: Math.round(response.data.temperature.feels_like),
    mainHigh: 15,
    mainLow: 7,
    mainWind: response.data.wind.speed,
    mainHumidity: Math.round(response.data.temperature.humidity),
    mainIcon: "/",
    sunriseIcon: "/",
    sunsetIcon: "/",
    moonriseIcon: "/",
    moonsetIcon: "/",
    city: response.data.name,
    time: response.data.time,
  });
}

  if (weatherData.ready) {
    return (
      <div className="WeatherDisplay">
      <div className="Header">
      <div>
        <div className="title">World Weather?.. We're With You</div>
        <nav className="navbar sticky-top">
          <div className="container-fluid d-flex">
            <form className="search-bar">
              <input
                className="form-control"
                type="search"
                placeholder="Enter a City"
                aria-label="Search"
                autoFocus="off"
                autoComplete="off"
                style={{ width: "140px", height: "30px" }}
              />

              <button
                id="search-button"
                className="search-button"
                type="submit"
                style={{ width: "40px", height: "30px" }}
              >
                <img
                  src="media\magnifying-glass.png"
                  alt="search-png"
                  className="search-image"
                  style={{ width: "20px" }}
                />
              </button>
            </form>

            <div className="time-city">
              {weatherData.time}
              <small> in </small> {weatherData.city}
            </div>
          </div>
        </nav>

        <div className="container">
          <div className="row date-wrapper">
            <div className="col-12 date">{""}</div>
            <div className="col-12 forecast-title">Forecast</div>
          </div>
        </div>
      </div>
    </div>
        <div className="container">
          <div className="row">
            <div className="col-12 main-icon-wrapper">
              <img src={""} alt={""} />
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
              <span className="weather-data">{weatherData.mainWind}%</span>
            </div>
            <div className="col icons-wrapper" style={{ marginTop: "10px" }}>
              <img src={""} alt="sunrise-png" />
              ↑
              <br />
              <img src={""} alt="sunset-png" />
              ↓
              <br />
              <img src={""} alt="moonrise-png" />
              ↑
              <br />
              <img src={""} alt="moonset-png" />↓
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const key = "b66bf4df92e6t09fe4302co548bafea3";
    let city = "hobart";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
    axios.get(apiUrl).then(handleResponse)

    return (
      "Loading"
    )
  }
};