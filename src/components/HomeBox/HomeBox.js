import React from "react";
import "./HomeBox.css";
import Sidebar from "../Sidebar/Sidebar";

const HomeBox = ({ children }) => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeBox">{children}</div>
    </div>
  );
};

export default HomeBox;
