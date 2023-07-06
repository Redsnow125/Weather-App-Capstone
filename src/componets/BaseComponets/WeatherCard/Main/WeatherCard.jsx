import { React, useContext } from "react";
import "./WeatherCard.css";
import { WeatherMain } from "./WeatherMain";
import { WeatherForcast } from "./WeatherForcast";
import { DataContext } from "../../../../Context/DataContext";

export const WeatherCard = ({ location, current, forecast, id }) => {
  let tempForcast = forecast.forecastday;
  const { savedCards, setSavedCards } = useContext(DataContext);
  console.log(forecast);
  if (!forecast.forecastday) return <h1>loading</h1>;
  let removeItem = () =>{
    let newState = [...savedCards]
    newState.splice(id,1)
    setSavedCards(newState)
  }

  let forecastDisplay = forecast?.forecastday.map((item) => {
    return (
      <>
        <section className="forcast">
          <p>{item.date}</p>
          <p>
            High: {item.day.maxtemp_f} F <br /> Low: {item.day.mintemp_f} F
          </p>
        </section>{" "}
      </>
    );
  });
  return (
    <div id="container">
      <div id="weatherCard">
        <WeatherMain
          location={location}
          current={current}
          forecast={forecast}
        />
        {forecastDisplay}
        
      </div>
    </div>
  );
};
