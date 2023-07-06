import { React, useState } from "react";
import "./Landing.css";
import { DataContext } from "../../Context/DataContext";

import { Header } from "../BaseComponets/Header";
import { Body } from "../BaseComponets/Body";
import { Footer } from "../BaseComponets/Footer";

export const Landing = ({setAuth}) => {

  return (
    <div>
        <Header setAuth={setAuth}></Header>
        <Body></Body>
        <Footer></Footer>
    </div>
  );
};
