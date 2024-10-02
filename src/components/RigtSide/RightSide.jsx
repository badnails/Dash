import React from "react";
import Temp from "../GlobalTemp/gTemp";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Global Temperature</h3>
        <div className="chart-container">
          <Temp />
        </div>
      </div>
    </div>
  );
};

export default RightSide;