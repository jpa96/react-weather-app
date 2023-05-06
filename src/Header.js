import React from "react";
import "./Header.css";

export default function Header() {
  let currentData = {
    city: "Brisbane",
    time: "04:15",
    today: "Monday, 15th April 2023"
  };
  return (
    <div className="Header">
      <div>
        <div className="title">World Weather?.. We're With You</div>
        <nav className="navbar sticky-top">
          <div className="container-fluid d-flex">
            <form className="search-bar">
              <input
                className="search-input me-2"
                type="search"
                placeholder="Click To Search City"
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
              {currentData.time}
              <small> in </small> {currentData.city}
            </div>
          </div>
        </nav>

        <div class="container">
          <div class="row date-wrapper">
            <div class="col-12 date">{currentData.today}</div>
            <div class="col-12 forecast-title">Forecast</div>
          </div>
        </div>
      </div>
    </div>
  );
}
