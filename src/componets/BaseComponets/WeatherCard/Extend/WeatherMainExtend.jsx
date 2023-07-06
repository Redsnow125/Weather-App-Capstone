import React from "react";
import "./WeatherMainExtend.css";

export const WeatherMainExtend = ({ location, current, forecast }) => {
  // console.log(current);
  // console.log(forecast);
  return (
    <div id="holder">
      <section id="mainExtend">
        <div id="titles">
          <p className="city-state">
            {location.name}, {location.region}
            <br /> {location.country}
          </p>
        </div>
        <div id="submain">
          <img
            src={current.condition.icon}
            alt="weather"
          />
          <div>{current.temp_f} F</div>
        </div>
      </section>
      <div id="details">
        <div id="desc">
          <p>{current.condition.text}</p>
          <p>Feels like {current.feelslike_f} F</p>
        </div>
        <div id="hilo">
          <p className="details">
            High: {forecast.forecastday[0].day.maxtemp_f} F
          </p>
          <p className="details">
            Low: {forecast.forecastday[0].day.mintemp_f} F
          </p>
        </div>
        <div id="water">
          <p className="details">Precipitaion chance: {forecast.forecastday[0].day.daily_chance_of_rain}%</p>
          <p className="details">Humidity: {forecast.forecastday[0].day.avghumidity}%</p>
        </div>
        <div id="air">
          <p className="details">Windspeed: {current.wind_mph} MPH</p>
        </div>
      </div>
    </div>
  );
};
// forecast.forecastday[0].day.air_quality.us-epa-index

