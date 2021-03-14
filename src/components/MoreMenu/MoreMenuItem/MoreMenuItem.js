import React from "react";
import { Link } from "react-router-dom";
import "./MoreMenuItem.css";
const MoreMenuItem = ({ title, Icon, link }) => {
  return (
    <Link className="moreMenuItem" to={link && link}>
      <Icon />
      <span>{title}</span>
    </Link>
  );
};

export default MoreMenuItem;
