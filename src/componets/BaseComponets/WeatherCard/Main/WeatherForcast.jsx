import { React, useContext, useEffect } from "react";
import { DataContext } from "../../../../Context/DataContext";
import "./WeatherForcast.css"

export const WeatherForcast = (props) => {
  const { location, forcast } = useContext(DataContext);
  // console.log(props.forecastData)
  return (
    <section className="forcast">
    <p>Day 1</p>
    <p>
      High: 69 F <br /> Low: 42 F
    </p>
  </section>
  )
}
