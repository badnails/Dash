import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RigtSide/RightSide";
import Sidebar from "./components/Sidebar";
import ThreeDVisualizer from "./components/3D/3D";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <Routes>
            <Route path="/dash" element={<MainDash />} />
            <Route path="/3d-visualizer" element={<ThreeDVisualizer />} />
          </Routes>
          <RightSide />
        </div>
      </div>
    </Router>
  );
}

export default App;
