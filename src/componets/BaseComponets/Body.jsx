import { React, useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import "./Body.css";
import { CardState } from "./CardState";

export const Body = () => {
  const { savedCards } = useContext(DataContext);
 
  const weatherDisplay = savedCards.map((zip, index) => {
    return <CardState zip={zip} index={index} key={zip}/>;
  });

  return (
    <div>
      {weatherDisplay}
    </div>
  );
};
