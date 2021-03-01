import React from "react";
import "./MoreMenuItem.css";
const MoreMenuItem = ({ title, Icon }) => {
  return (
    <div className="moreMenuItem">
      <Icon />
      <span>{title}</span>
    </div>
  );
};

export default MoreMenuItem;
