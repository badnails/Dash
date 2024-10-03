import React, { useState, useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import oceanLocations from "./OCEAN_LOCATIONS";
import "./GlobesPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import imageCrolo from "./resources/co2.png";
import imgSeaTemp from "./resources/temperature2022-AQUA_MODIS.20220101_20221231.L3m.YR.SST.sst.4km.nc.png";
import imageRad from "./resources/co2(1).png";
import imgCarbonDi from "./resources/Carbon_Dioxide.png";
import imgCarbonMo from "./resources/Carbon_Monoxide.png";
import imgOzone from "./resources/Ozone.png";
import imgWaterVpr from "./resources/Water_Vapour.png";
import imgAirTemp from "./resources/Air_Temperature.png";
import imgSulpurDi from "./resources/Sulpur_Dioxode.png";
import imgMethane from "./resources/co.png"; //just for example

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

  const [globeImageUrl, setGlobeImageUrl] = useState(imgMethane);

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
            onClick={() => changeImages(imgCarbonDi, "GlobeOceanTemperature")}
          >
            Carbon Dioxide
          </Button>
          <Button
            variant="contained"
            onClick={() => changeImages(imgSulpurDi, "ChloroPage")} //Not added yet.
          >
            Sulfur Dioxide
          </Button>
          <Button
            variant="contained"
            onClick={() => changeImages(imgOzone, "GlobeAbsortion")}
          >
            Ozone
          </Button>
          <Button
            variant="contained"
            onClick={() => changeImages(imgMethane, "GlobeAbsortion")} //Not added yet properly. just for example
          >
            Methane
          </Button>
          <Button
            variant="contained"
            onClick={() => changeImages(imgWaterVpr, "GlobeAbsortion")}
          >
            Water Vapour
          </Button>
          <Button
            variant="contained"
            onClick={() => changeImages(imgSeaTemp, "GlobeAbsortion")}
          >
            Sea Surface Temperature
          </Button>
          <Button
            variant="contained"
            onClick={() => changeImages(imgAirTemp, "GlobeAbsortion")}
          >
            Air Temperature
          </Button>
          <ButtonGroup
            variant="contained"
            style={{ display: "flex", position: "relative", left: "0vh" }}
          ></ButtonGroup>
          <ButtonGroup
            variant="contained"
            style={{ display: "flex", position: "relative", left: "0vh" }}
          ></ButtonGroup>
          <ButtonGroup
            variant="contained"
            style={{ display: "flex", position: "relative", left: "0vh" }}
          ></ButtonGroup>
          <ButtonGroup
            variant="contained"
            style={{ display: "flex", position: "relative", left: "0vh" }}
          ></ButtonGroup>
          <ButtonGroup
            variant="contained"
            style={{ display: "flex", position: "relative", left: "0vh" }}
          ></ButtonGroup>
          <ButtonGroup
            variant="contained"
            style={{ display: "flex", position: "relative", left: "0vh" }}
          ></ButtonGroup>
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
