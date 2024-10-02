import React from "react";
import Cards from "../Cards/Cards";
import Web from "../Web/web";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <Web src="https://climate.nasa.gov" title="NASA"/>
    </div>
  );
};

export default MainDash;
