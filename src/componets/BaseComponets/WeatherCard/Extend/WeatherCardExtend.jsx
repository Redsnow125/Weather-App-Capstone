import React from "react";
import "./WeatherCardExtend.css";
import { WeatherMainExtend } from "./WeatherMainExtend";
import { WeatherForcastExtend } from "./WeatherForcastExtend";

export const WeatherCardExtend = ({ location, current, forecast }) => {
  let tempForcast = forecast.forecastday;
  return (
    <div id="containerExtend">
      <div id="weatherCardExtend">
        <WeatherMainExtend
          location={location}
          current={current}
          forecast={forecast}
        />
        <section className="forcast">
          <p>{tempForcast[1].date}</p>
          <img src={tempForcast[1].day.condition.icon} alt="weather" />
          <p>
            High: {tempForcast[1].day.maxtemp_f} F <br /> Low:{" "}
            {tempForcast[1].day.mintemp_f} F
          </p>
        </section>
        <section className="forcast">
          <p>{tempForcast[2].date}</p>
          <img src={tempForcast[2].day.condition.icon} alt="weather" />
          <p>
            High: {tempForcast[2].day.maxtemp_f} F <br /> Low:{" "}
            {tempForcast[2].day.mintemp_f} F
          </p>
        </section>{" "}
        <section className="forcast">
          <p>{tempForcast[3].date}</p>
          <img src={tempForcast[3].day.condition.icon} alt="weather" />
          <p>
            High: {tempForcast[3].day.maxtemp_f} F <br /> Low:{" "}
            {tempForcast[3].day.mintemp_f} F
          </p>
        </section>{" "}
        <section className="forcast">
          <p>{tempForcast[4].date}</p>
          <img src={tempForcast[4].day.condition.icon} alt="weather" />
          <p>
            High: {tempForcast[4].day.maxtemp_f} F <br /> Low:{" "}
            {tempForcast[4].day.mintemp_f} F
          </p>
        </section>{" "}
        <section className="forcast">
          <p>{tempForcast[5].date}</p>
          <img src={tempForcast[5].day.condition.icon} alt="weather" />
          <p>
            High: {tempForcast[5].day.maxtemp_f} F <br /> Low:{" "}
            {tempForcast[5].day.mintemp_f} F
          </p>
        </section>{" "}
        <section className="forcast">
          <p>{tempForcast[6].date}</p>
          <img src={tempForcast[6].day.condition.icon} alt="weather" />
          <p>
            High: {tempForcast[6].day.maxtemp_f} F <br /> Low:{" "}
            {tempForcast[6].day.mintemp_f} F
          </p>
        </section>{" "}
        <section className="forcast">
          <p>{tempForcast[7].date}</p>
          <img src={tempForcast[7].day.condition.icon} alt="weather" />
          <p>
            High: {tempForcast[7].day.maxtemp_f} F <br /> Low:{" "}
            {tempForcast[7].day.mintemp_f} F
          </p>
        </section>
      </div>
    </div>
  );
};
