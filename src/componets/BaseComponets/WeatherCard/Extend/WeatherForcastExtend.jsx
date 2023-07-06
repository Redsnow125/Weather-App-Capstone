import React from "react";
import "./WeatherForcastExtend.css"

export const WeatherForcastExtend = () => {
  return (
    <section className="forcastExtend">
      <p>Day 1</p>
      <img
        src="https://cdn.weatherapi.com/weather/64x64/night/116.png"
        alt="weather"
      />
      <p id="FCdeats">
        High :  69 F <br /> Low :  42 F
      </p>
    </section>
  );
};
