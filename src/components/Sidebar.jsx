import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import Logo from "../imgs/405.png";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: '0'
    },
    false: {
      left: '-60%'
    }
  };

  return (
    <>
      <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpaned(!expanded)}>
        <UilBars />
      </div>
      <motion.div className='sidebar'
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
      >
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
            <span>Cli</span>matter
          </span>
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <Link to={item.path} key={index} className={selected === index ? "menuItem active" : "menuItem"} onClick={() => setSelected(index)}>
                <item.icon />
                <span>{item.heading}</span>
              </Link>
            );
          })}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;