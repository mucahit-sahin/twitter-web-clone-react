import React from "react";
import "./SidebarItem.css";

function SidebarItem({ Icon, text, active }) {
  return (
    <div className={`sidebarItem ${active && "sidebarItem--active"}`}>
      <Icon className="sidebaricon" />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarItem;
