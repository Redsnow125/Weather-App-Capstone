import { React, useState, useEffect, useContext } from "react";
import "./SearchState.css";
import axios from "axios";
import { DataContext } from "../../Context/DataContext";

export const SearchState = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputText, setInputText] = useState("");
  const [submitText, setSubmitText] = useState(84115);
  const { savedCards, setSavedCards } = useContext(DataContext);


  const handleChange = (evt) => {
    // 👇 Store the input value to local state
    setInputText(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSubmitText(inputText)
    setSavedCards(oldArray => [...oldArray,+inputText]);
    setInputText ('')
  };
  console.log(savedCards)

  return (
    <div id="searchContainer">
      {/* <div onClick={() => setIsClick(!isClick)}> {isClick && (<h1>+</h1>)}</div> */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={inputText}
          id="searchFeild"
        />
        <input type="submit" value="Search" id="searchBtn" />
      </form>
    </div>
  );
};
