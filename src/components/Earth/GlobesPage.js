import React, { useState, useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import oceanLocations from "./OCEAN_LOCATIONS";
import "./GlobesPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import imageCrolo from "./resources/co2.png";
import imageTemp from "./resources/temperature2022-AQUA_MODIS.20220101_20221231.L3m.YR.SST.sst.4km.nc.png";
import imageRad from "./resources/co2(1).png";


function GlobesPage() {
  const [text, setText] = useState("ChloroPage");

  const renderText = () => {
    switch (text) {
      case "ChloroPage":
        
      case "GlobeOceanTemperature":
        
      case "GlobeAbsortion":
        
      default:
        return null;
    }
  };

  const [globeImageUrl, setGlobeImageUrl] = useState(imageCrolo);

  const changeImages = (newBackgroundImage, typeGlob) => {
    setGlobeImageUrl(newBackgroundImage);
    setText(typeGlob);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  };
  const globeRef = useRef();

  useEffect(() => {
    // Access controls and set autoRotate to true
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.enableZoom = false;
      globeRef.current.pointOfView({ lat: 20.88, lng: -97.14, altitude: 3.0 });
    }
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div>
      <div id="header">
        {renderText()}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Button
            variant="contained"
            onClick={() =>
              changeImages(imageTemp, "GlobeOceanTemperature")
            }
          >
            Water Temperature
          </Button>
          <Button
            variant="contained"
            onClick={() => changeImages(imageCrolo, "ChloroPage")}
          >
            Chlorophyll Concentration
          </Button>
          <Button
            variant="contained"
            onClick={() =>
              changeImages(imageRad, "GlobeAbsortion")
            }
          >
            Photosynthetically available radiation
          </Button>
          <ButtonGroup
            variant="contained"
            style={{ display: "flex", position: "relative", left: "0vh" }}
          >
          </ButtonGroup>
        </div>
      </div>
      <div className="globe-container">
        <Globe
          ref={globeRef}
          globeImageUrl={globeImageUrl}
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          labelsData={oceanLocations}
          labelText={"label"}
          width={"50vw"}
          height={"50vh"}
          labelSize={3}
          labelColor={() => "white"}
          labelDotRadius={0.4}
          labelAltitude={0.05}
        />
      </div>
    </div>
  );
}

export default GlobesPage;
