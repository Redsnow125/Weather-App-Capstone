import React, { Fragment,useContext } from "react";
import "./Header.css";
import { SearchState } from "./SearchState";
import logo from "../../client/assets/logo.png";
import { DataContext } from "../../Context/DataContext";

export const Header = () => {
  const { setAuth } = useContext(DataContext);
  const logoutHandler = () =>{
    setAuth(false)
  }

  return (
    <div id="containerhead">
      <div id="header">
        <SearchState id="search-state"/>
        <img src={logo} alt="pic" id="logo"/> 
        <div id="logout" onClick={logoutHandler}>Logout</div>
      </div>
    </div>
  );
};
