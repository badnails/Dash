// components/ThreeDVisualizer/ThreeDVisualizer.js
import React from 'react';
import './3D.css';
import GlobesPage from '../Earth/GlobesPage'

const ThreeDVisualizer = () => {
  return (
    <div className="tv">
      <GlobesPage />
    </div>
  );
};

export default ThreeDVisualizer;