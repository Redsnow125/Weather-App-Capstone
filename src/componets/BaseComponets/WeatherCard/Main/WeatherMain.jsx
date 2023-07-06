import { React, useContext, useEffect } from "react";
import { DataContext } from "../../../../Context/DataContext";
import "./WeatherMain.css";

export const WeatherMain = ({location,current}) => {
  console.log(current)
  return (
    <section id="main">
      <div id="titles">
        <p className="city-state">
          {location.name}, {location.region}
          <br /> {location.country}
        </p>
      </div>
      <div id="submain">
        <img
          src={current.condition.icon}
          // Breakes the site if not icon^
          alt="icon"
        />
        <div>{current.temp_f} F</div>
      </div>
    </section>
  );
};
