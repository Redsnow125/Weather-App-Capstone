import { React, useState, useContext, useEffect } from "react";
import { WeatherCard } from "./WeatherCard/Main/WeatherCard";
import { WeatherCardExtend } from "./WeatherCard/Extend/WeatherCardExtend";
import axios from "axios";
import { DataContext } from "../../Context/DataContext";
import "./CardState.css"

export const CardState = (props) => {
  const [isExtend, setIsExtend] = useState(false);
  const [location, setlocation] = useState([]);
  const [current, setCurrent] = useState([]);
  const [forecast, setForecast] = useState([]);

  let indexArr = [];
  indexArr = props.index;
  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=c23f1d0522c1430299770130232706&q=${props.zip}&days=8&aqi=yes&alerts=no`
      )
      .then((res) => {
        setlocation(res.data.location);
        setCurrent(res.data.current);
        setForecast(res.data.forecast);
      });
  }, [indexArr]);
  const { savedCards, setSavedCards } = useContext(DataContext);

  if (!forecast.forecastday) return <h1>loading</h1>;
  let removeItem = () => {
    let newState = [...savedCards];
    newState.splice(props.index, 1);
    setSavedCards(newState);
  };

  return (
    <div id="holderState">
      <div onClick={() => setIsExtend(!isExtend)}>
        {!isExtend && (
          <WeatherCard
            location={location}
            current={current}
            forecast={forecast}
            id={props.index}
          />
        )}
        {isExtend && (
          <WeatherCardExtend
            location={location}
            current={current}
            forecast={forecast}
          />
        )}
      </div>
      <button onClick={removeItem} id="delBtn">X</button>
    </div>
  );
};
